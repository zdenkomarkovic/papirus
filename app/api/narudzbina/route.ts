import { NextRequest, NextResponse } from "next/server";
import { sendOrderEmail } from "@/lib/email";
import type { Order } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Order;

    if (!body.items || body.items.length === 0) {
      return NextResponse.json({ error: "Korpa je prazna." }, { status: 400 });
    }
    if (!body.customer?.name || !body.customer?.phone || !body.customer?.address) {
      return NextResponse.json({ error: "Nedostaju podaci kupca." }, { status: 400 });
    }

    await sendOrderEmail(body);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Greška pri slanju narudžbine:", err);
    return NextResponse.json({ error: "Interna greška servera." }, { status: 500 });
  }
}
