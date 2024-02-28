import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="bg-slate-100 antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex relative w-screen">
          <Sidebar />
          <div id="content" className="h-screen w-screen ml-64 p-6 text-black">
            {children}
          </div>
      </div>
  </div>
)}
