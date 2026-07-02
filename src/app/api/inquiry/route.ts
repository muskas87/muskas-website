import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@muskashainan.com";
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || "musa@muskasconsultants.com";

interface InquiryPayload {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  inquiryType: string;
  message: string;
}

function buildCompanyEmail(data: InquiryPayload): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Shanghai",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a1a;">
  <div style="background: linear-gradient(135deg, #1a3a2a 0%, #0d1f17 100%); padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="color: #c8a45c; margin: 0; font-size: 24px; letter-spacing: 2px;">MUSKAS</h1>
    <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 12px; letter-spacing: 4px; text-transform: uppercase;">Hainan Trading Company Ltd</p>
  </div>

  <div style="background: #ffffff; padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none;">
    <h2 style="color: #1a3a2a; margin: 0 0 24px; font-size: 20px;">New Inquiry Received</h2>
    <p style="color: #6b7280; margin: 0 0 24px; font-size: 14px;">A new business inquiry has been submitted on your website.</p>

    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px; vertical-align: top;">Full Name</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Email</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${data.email}" style="color: #1a3a2a; text-decoration: none;">${data.email}</a></td>
      </tr>
      ${data.phone ? `<tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Phone</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.phone}</td>
      </tr>` : ""}
      ${data.company ? `<tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Company</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.company}</td>
      </tr>` : ""}
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Service Interest</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;"><span style="background: #f0fdf4; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">${data.service}</span></td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Inquiry Type</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.inquiryType}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; color: #6b7280; vertical-align: top;">Message</td>
        <td style="padding: 12px 0; line-height: 1.6; color: #374151;">${data.message.replace(/\n/g, "<br>")}</td>
      </tr>
    </table>
  </div>

  <div style="background: #f9fafb; padding: 16px 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="color: #9ca3af; margin: 0; font-size: 12px;">Submitted on ${submittedAt}</p>
  </div>
</div>`;
}

function buildAutoReply(data: InquiryPayload): string {
  const serviceLabel: Record<string, string> = {
    construction: "Construction Materials",
    "import-export": "Import & Export",
    general: "General Trading",
    "business-setup": "Business Setup in Hainan",
    "exclusive-rep": "Exclusive China Representative",
    other: "General Inquiry",
  };
  const ref = `MUS-${Date.now().toString(36).toUpperCase()}`;

  return `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a1a;">
  <div style="background: linear-gradient(135deg, #1a3a2a 0%, #0d1f17 100%); padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="color: #c8a45c; margin: 0; font-size: 24px; letter-spacing: 2px;">MUSKAS</h1>
    <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 12px; letter-spacing: 4px; text-transform: uppercase;">Hainan Trading Company Ltd</p>
  </div>

  <div style="background: #ffffff; padding: 40px 32px; border: 1px solid #e5e7eb; border-top: none;">
    <p style="font-size: 18px; color: #1a3a2a; margin: 0 0 8px; font-weight: 600;">Dear ${data.fullName},</p>
    <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
      Thank you for reaching out to <strong>Muskas (Hainan) Trading Company Ltd</strong>. We have received your inquiry regarding <strong>${serviceLabel[data.service] || data.service}</strong> and appreciate your interest in our services.
    </p>

    <div style="background: #f0fdf4; border-left: 4px solid #1a3a2a; padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 0 0 24px;">
      <p style="margin: 0; color: #166534; font-size: 14px; font-weight: 500;">
        Your inquiry reference: <strong>${ref}</strong>
      </p>
    </div>

    <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
      Our team has been notified and will review your request carefully. A dedicated representative will respond to you within <strong>12 hours</strong> with a detailed reply tailored to your specific needs.
    </p>

    <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
      In the meantime, if your inquiry is urgent, please feel free to reach us directly:
    </p>

    <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin: 0 0 24px;">
      <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 0; color: #6b7280; width: 100px;">Phone / WeChat</td>
          <td style="padding: 6px 0; font-weight: 600; color: #1a3a2a;">+86 183 0890 1960</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280;">WhatsApp</td>
          <td style="padding: 6px 0; font-weight: 600; color: #1a3a2a;">+86 183 0890 1960</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280;">Email</td>
          <td style="padding: 6px 0;"><a href="mailto:musa@muskasconsultants.com" style="color: #1a3a2a; text-decoration: none; font-weight: 600;">musa@muskasconsultants.com</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; vertical-align: top;">Address</td>
          <td style="padding: 6px 0; color: #374151; line-height: 1.5;">Building 1, No. 223, Nanguang Center, Yongwan Road, Xiuying District, Haikou, Hainan, China</td>
        </tr>
      </table>
    </div>

    <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 8px;">
      We look forward to the opportunity of working with you and building a lasting partnership.
    </p>
    <p style="color: #374151; font-size: 15px; margin: 0 0 0;">
      Best regards,<br/>
      <strong style="color: #1a3a2a;">Musa Kasule</strong><br/>
      <span style="color: #6b7280; font-size: 13px;">Muskas (Hainan) Trading Company Ltd</span>
    </p>
  </div>

  <div style="background: #f9fafb; padding: 20px 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="color: #9ca3af; margin: 0; font-size: 11px; line-height: 1.6;">
      This is an automated confirmation email. Please do not reply directly to this message.<br/>
      &copy; ${new Date().getFullYear()} Muskas (Hainan) Trading Company Ltd. All rights reserved.
    </p>
  </div>
</div>`;
}

export async function POST(request: NextRequest) {
  try {
    const body: InquiryPayload = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.service || !body.inquiryType || !body.message) {
      return NextResponse.json(
        { success: false, error: "All required fields must be provided." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Send emails via Resend if API key is configured
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);

      // ── Send notification email to company ──
      await resend.emails.send({
        from: `Muskas Website <${FROM_EMAIL}>`,
        to: [COMPANY_EMAIL],
        replyTo: body.email,
        subject: `[New Inquiry] ${body.inquiryType} - ${body.service} from ${body.fullName}`,
        html: buildCompanyEmail(body),
      });

      // ── Send professional auto-reply to inquirer ──
      await resend.emails.send({
        from: `Muskas (Hainan) Trading Co. Ltd <${FROM_EMAIL}>`,
        to: [body.email],
        subject: "Thank You for Your Inquiry - Muskas Trading Company",
        html: buildAutoReply(body),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully. We will respond within 12 hours.",
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}