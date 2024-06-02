import DashboardNavbar from "@/app/dashboard/_components/DashboardNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
    <DashboardNavbar/>
        {children}
    </main>
  );
}
