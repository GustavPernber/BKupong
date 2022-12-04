import QRCode from "qrcode"

const generateCode = async (text: string) => {
	const result = await QRCode.toDataURL(text, {
		width: 200,
	})
	return result
}

export default generateCode
