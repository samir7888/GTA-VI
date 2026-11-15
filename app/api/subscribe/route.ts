import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { email } = (await req.json().catch(() => ({}))) as { email?: string };
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return NextResponse.json({ ok: false }, { status: 400 });
  // TODO: send to Resend/Mailchimp/ConvertKit here.
  return NextResponse.json({ ok: true });
}
