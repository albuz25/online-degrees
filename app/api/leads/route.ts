import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      mobile,
      course,
      state,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      university_slug,
    } = body;

    if (!name || !email || !mobile || !course || !state || !university_slug) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, mobile, course, state, university_slug" },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { error } = await supabase.from("leads").insert({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      mobile: String(mobile).trim(),
      course: String(course).trim(),
      state: String(state).trim(),
      university_slug: String(university_slug).trim(),
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_term: utm_term || null,
      utm_content: utm_content || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Leads API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
