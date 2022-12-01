import * as dotenv from "dotenv";
dotenv.config();

const config = {
	url: {
		login: "https://bk-se-ordering-api.azurewebsites.net/identity/login",
		coupons: "https://bk-se-ordering-api.azurewebsites.net/cms/sv-SE/offers",
		redeem: (id: number) => `https://bk-se-ordering-api.azurewebsites.net/offers/${id}/redeem `,
	},
	dbConnectionString: process.env.MONGODB || (process.env.MONGODB_DEV as string),
	login: {
		email: "hivim52628@sunetoa.com",
		password: process.env.LOGIN_PASSWORD,
	},
};

export default config;
