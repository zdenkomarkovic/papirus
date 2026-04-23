import { buildMetadata } from "@/lib/metadata";
import { CartPageClient } from "./CartPageClient";

export const metadata = buildMetadata({
  title: "Korpa",
  description: "Vaša korpa – Papirus prodavnica",
});

export default function KorpaPage() {
  return <CartPageClient />;
}
