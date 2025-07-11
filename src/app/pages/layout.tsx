import "../../app/globals.css";
import Sidbar from "@/components/SidBar/Sidbar";
import Navbar from "@/components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SidebarProvider } from "@/context/SidebarContext";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="h-screen overflow-hidden flex flex-col justify-center w-full">
                <nav>
                    <Navbar />
                </nav>
                <main className="flex-1 flex flex-row px-5 md:px-12 xl:px-20">
                    {/* sidebar */}
                    <aside className="hidden lg:block">
                        <Sidbar />
                    </aside>
                    <div className="flex-1 flex justify-center">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>

    );
}
