import { redirect } from "next/navigation";

// Redirect bare / to /en — the locale layout handles everything from there
export default function RootPage() {
  redirect("/en");
}
