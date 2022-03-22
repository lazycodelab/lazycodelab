const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_API_SERVER,
})

export default async function run(req, res) {
	const { email, name } = req.body
	const fullName = name.split(' ')
	const firstName = fullName[0]
	const lastName = fullName[1]
	try {
		const response = await mailchimp.lists.addListMember(
			process.env.MAILCHIMP_LIST_ID,
			{
				email_address: req.body.email,
				status: 'subscribed',
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName,
				},
			}
		)
		res.status(200).json({
			success: true,
			msg: "Thank you! We'll get in touch with you soon.",
		})
	} catch (error) {
		res.status(error.status).json({
			success: false,
			msg: "Something went wrong. We're looking into it.",
		})
	}
}
