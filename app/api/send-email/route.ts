import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email } = await req.json();

    try {
        const data = await resend.emails.send({
            from: 'NGConsultancy <onboarding@resend.dev>',
            to: [email],
            subject: 'Welcome To NGConsultancy!',
            html: '<p>Get started with the form below!</p>',
        });
        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error });
    }
}