import "@/styles/tailwind.css";
import { type Metadata } from "next";
import { RootLayout } from "@/components/RootLayout";

export const metadata: Metadata = {
  title: {
    template: '%s - IOT Masters',
    default: 'IOT Masters - Award winning group based in SA',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
