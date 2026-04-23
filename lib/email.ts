import Mailjet from "node-mailjet";
import type { Order } from "@/types";
import { COMPANY } from "./constants";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_SECRET_KEY!
);

export async function sendOrderEmail(order: Order) {
  const itemsHtml = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #eee;">${item.product.name}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">${(item.product.price * item.quantity).toLocaleString("sr-RS")} RSD</td>
      </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1e3a5f;">Nova narudžbina – ${COMPANY.name}</h2>
      <hr/>
      <h3>Podaci kupca:</h3>
      <p><strong>Ime i prezime:</strong> ${order.customer.name}</p>
      <p><strong>Telefon:</strong> ${order.customer.phone}</p>
      <p><strong>Adresa:</strong> ${order.customer.address}</p>
      ${order.customer.note ? `<p><strong>Napomena:</strong> ${order.customer.note}</p>` : ""}
      <h3>Naručeni artikli:</h3>
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="background:#1e3a5f;color:white;">
            <th style="padding:8px;text-align:left;">Artikal</th>
            <th style="padding:8px;text-align:center;">Kom.</th>
            <th style="padding:8px;text-align:right;">Cena</th>
          </tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding:8px;font-weight:bold;text-align:right;">UKUPNO:</td>
            <td style="padding:8px;font-weight:bold;text-align:right;color:#1e3a5f;">
              ${order.total.toLocaleString("sr-RS")} RSD
            </td>
          </tr>
        </tfoot>
      </table>
      <p style="color:#666;font-size:12px;margin-top:24px;">
        Narudžbina primljena: ${new Date(order.createdAt).toLocaleString("sr-RS")}
      </p>
    </div>
  `;

  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SITE_MAIL_SENDER!,
          Name: COMPANY.name,
        },
        To: [
          {
            Email: process.env.SITE_MAIL_RECEIVER!,
            Name: COMPANY.name,
          },
        ],
        Subject: `Nova narudžbina od: ${order.customer.name}`,
        HTMLPart: html,
      },
    ],
  });
}
