import { redirect } from "next/navigation";

export default function RootRedirect() {
  return redirect("/pt"); // idioma padrão
}
