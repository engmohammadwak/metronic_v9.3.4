import {
  Coffee,
  MessageSquareCode,
  PanelRightOpen,
  Pin,
  Search,
} from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input, InputWrapper } from '@/components/ui/input';
import { useLayout } from './context';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { SidebarSecondary } from './sidebar-secondary';
import { SidebarSecondaryMobile } from './sidebar-secondary-mobile';
import { Toolbar, ToolbarActions, ToolbarHeading } from './toolbar';

export function Wrapper() {
  const { isMobile } = useLayout();
  const handleInputChange = () => {};
  const { isSidebarSecondaryOpen, sidebarSecondaryToggle } = useLayout();

  return (
    <>
      <Header />

      <div className="flex flex-col lg:flex-row grow pt-(--header-height)">
        <div className="flex grow rounded-xl bg-background border border-input m-2.5 mt-0">
          {!isMobile && <Sidebar />}

          <div className="flex flex-col grow">
            <Toolbar>
              <ToolbarHeading />
              <ToolbarActions>
                <Button mode="icon" variant="outline">
                  <Coffee />
                </Button>
                <Button mode="icon" variant="outline">
                  <MessageSquareCode />
                </Button>
                <Button mode="icon" variant="outline">
                  <Pin />
                </Button>
                <InputWrapper className="w-full lg:w-50">
                  <Search />
                  <Input
                    type="search"
                    placeholder="Search Team"
                    onChange={handleInputChange}
                  />
                </InputWrapper>
                {!isMobile && !isSidebarSecondaryOpen && (
                  <Button
                    mode="icon"
                    variant="outline"
                    onClick={sidebarSecondaryToggle}
                  >
                    <PanelRightOpen />
                  </Button>
                )}
                {isMobile && <SidebarSecondaryMobile />}
              </ToolbarActions>
            </Toolbar>

            <div className="flex grow overflow-hidden">
              <div className="grow overflow-y-auto p-5 pe-3">
                <main className="grow" role="content">
                  <Outlet />
                </main>
              </div>
              {!isMobile && isSidebarSecondaryOpen && <SidebarSecondary />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
