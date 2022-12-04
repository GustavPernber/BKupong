const config = {
	url: {
		login: "https://bk-se-ordering-api.azurewebsites.net/identity/login",
		coupons: "https://bk-se-ordering-api.azurewebsites.net/cms/sv-SE/offers",
		redeem: (id: number) => `https://bk-se-ordering-api.azurewebsites.net/offers/${id}/redeem `
	},
	dbConnectionString: process.env.MONGODB_WRITE || (process.env.MONGODB_WRITE_DEV as string),
	login: {
		email: process.env.LOGIN_EMAIL,
		password: process.env.LOGIN_PASSWORD
	}
}

export default config
