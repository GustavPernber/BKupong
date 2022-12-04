const handler = async (event: any, context: any) => {
	try {
		if (JSON.parse(event.body).key !== process.env.SCRAPE_KEY) {
			throw new Error()
		}
	} catch (error) {
		return {
			statusCode: 400,
			body: JSON.stringify({
				message: " 'key' required."
			})
		}
	}

	try {
		await main()

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "DB updated!"
			})
		}
	} catch (error) {
		console.error(error)

		return {
			statusCode: 500,
			body: JSON.stringify({
				message: error
			})
		}
	}
}

export { handler }
