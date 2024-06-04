import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/VerficationEmail";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verfiyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Mystry message | Verification Code",
      react: VerificationEmail({ username, otp: verfiyCode }),
    });
    return {
      success: true,
      message: "Verification email send successfully",
    };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
    return {
      success: false,
      message: "Failed to send Verification email",
    };
  }
}
