const config = {
	url: {
		login: "https://bk-se-ordering-api.azurewebsites.net/identity/login",
		coupons: "https://bk-se-ordering-api.azurewebsites.net/cms/sv-SE/offers",
		redeem: (id: number) => `https://bk-se-ordering-api.azurewebsites.net/offers/${id}/redeem `
	},
	dbConnectionString: import.meta.env.MONGODB_WRITE || (import.meta.env.MONGODB_WRITE_DEV as string),
	login: {
		email: import.meta.env.LOGIN_EMAIL,
		password: import.meta.env.LOGIN_PASSWORD
	}
}

export default config
