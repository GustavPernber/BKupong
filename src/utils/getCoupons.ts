import { MongoClient } from "mongodb"
import type { Coupon } from "../types/types"

const getCoupons = async (): Promise<Coupon[]> => {
	const connectionURI = import.meta.env.MONGODB_WRITE_DEV as string
	const client = new MongoClient(connectionURI)

	const coupons: Coupon[] = await client.db().collection("coupons").find<Coupon>({}).toArray()
	await client.close()
	return coupons
}

export default getCoupons
