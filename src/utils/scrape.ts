import config from "./config"
import fetch from "node-fetch"
import { MongoClient } from "mongodb"

export async function scrape() {
	console.log("SCRAPING!!!!")
	type Coupon = {
		id: number
		name: string
		startDate: string
		endDate: string
		imgUrl: string
		code?: string
	}

	async function getToken(): Promise<string> {
		const body = {
			email: config.login.email,
			password: config.login.password
		}
		const response = await fetch(config.url.login, {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})

		const result = (await response.json()) as { data: any }
		return result.data.token as string
	}

	async function getCoupons(): Promise<Coupon[]> {
		const response = await fetch(config.url.coupons)
		const couponData = (await response.json()) as { data: (Coupon & { overview: { mediaUrl: string } })[] }

		return couponData.data.map((responseCoupon) => {
			return {
				id: responseCoupon.id,
				name: responseCoupon.name,
				startDate: responseCoupon.startDate,
				endDate: responseCoupon.endDate,
				imgUrl: responseCoupon.overview.mediaUrl
			}
		})
	}

	async function addCouponsToDb(coupons: Coupon[]): Promise<void> {
		console.log("Adding to db: ", coupons)

		if (coupons.length < 2) {
			throw new Error("To few coupons found")
		}

		const connectionString = config.dbConnectionString
		const client = new MongoClient(connectionString)
		try {
			const collection = client.db().collection("coupons")

			const oldCoupons = await collection.find().toArray()

			await collection.deleteMany({})

			try {
				await collection.insertMany(coupons)
			} catch (error) {
				await collection.insertMany(oldCoupons)
			}
		} finally {
			await client.close()
		}

		console.log("Completed document insertion.")
		return
	}

	async function redeemCoupons(token: string, coupons: Coupon[]): Promise<Coupon[]> {
		const couponsPromises: Promise<Coupon>[] = []

		coupons.forEach((coupon, i) => {
			couponsPromises.push(
				new Promise<Coupon>((resolve) => {
					setTimeout(async () => {
						const response = await fetch(config.url.redeem(coupon.id), {
							method: "POST",
							headers: { "Content-Type": "application/json", Authorization: token }
						})
						const result = (await response.json()) as any

						const redeemed = { ...coupon, code: result.data.qrCode as string }
						resolve(redeemed)
					}, 500 * i)
				})
			)
		})

		const result = await Promise.all(couponsPromises)
		console.log(result)
		return result
	}

	const coupons = await getCoupons()
	console.log("Coupons: ", coupons)

	const token = await getToken()
	console.log("Token: ", token)

	console.log("redeeming...")
	const redeemedCoupons = await redeemCoupons(token, coupons)
	await addCouponsToDb(redeemedCoupons)

	console.log("done scraping")

	return
}
