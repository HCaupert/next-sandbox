import { ReactNode } from "react";

export default function HomeLayout({
  rate,
  impression,
}: {
  rate: ReactNode;
  impression: ReactNode;
}) {
  return (
    <main className="h-dvh w-full flex flex-col items-center justify-center">
      {rate}
      {impression}
    </main>
  );
}
