import { SMTPClient } from "emailjs";

export default function handler(req, res) {
    const { email } = req.body;
    // console.log(process.env)

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.APP_PWD,
        host: "smtp.gmail.com",
        ssl: true,
    });

    try {
        client.send({
            text: `Just for testing purpose, email of client: ${email}`,
            from: process.env.EMAIL,
            to: "radekvlk31@gmail.com",
            subject: "testing emailjs",
        });
    } catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }));
        return;
    }

    res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
