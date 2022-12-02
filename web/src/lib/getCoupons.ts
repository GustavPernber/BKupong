import { MongoClient } from "mongodb"
import type { Coupon } from "../utils/types"

const getCoupons = async (): Promise<Coupon[]> => {
	const connectionURI = import.meta.env.MONGODB_READ_DEV as string
	const client = new MongoClient(connectionURI)

	const coupons: Coupon[] = await client.db().collection("coupons").find<Coupon>({}).toArray()
	return coupons
}

export default getCoupons
