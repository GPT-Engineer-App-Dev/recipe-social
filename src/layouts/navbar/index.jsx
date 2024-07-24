import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="border-t bg-muted py-4 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2024 Recipe Sharing. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;