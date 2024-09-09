import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";
export default function LayoutDashboard({
  children,
  count,
}: Readonly<{
  children: React.ReactNode;
  count: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-red-100">
      <Header />
      <div className="flex flex-row items-center">
        <Sidebar />
        {children}
        {count}
      </div>
    </div>
  );
}
