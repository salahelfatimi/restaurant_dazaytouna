import { EmailTemplate } from "@/components/emailTemplateResend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {name,tel, date, adults, children } = body;
    const data = await resend.emails.send({
      from: `${name}<brett@restaurant-dazaytouna.com>`,
      to: "salahfatimi16@gmail.com",
      subject: `Réserver une table`,
      react: EmailTemplate({
        FullName: name,
        Phone: tel,
        Date:date,
        Adults:adults,
        Children:children
        
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
