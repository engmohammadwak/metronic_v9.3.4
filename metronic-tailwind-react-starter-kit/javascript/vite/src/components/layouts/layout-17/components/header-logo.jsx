import { useEffect, useState } from 'react';
import { Check, ChevronsUpDown, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useLayout } from './context';
import { SidebarContent } from './sidebar-content';

export function HeaderLogo() {
  const { isMobile } = useLayout();
  const { pathname } = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  const projects = [
    {
      logo: toAbsoluteUrl('/media/app/item.png'),
      name: 'Store Admin',
    },
    {
      logo: toAbsoluteUrl('/media/app/item.png'),
      name: 'Store Retail',
    },
    {
      logo: toAbsoluteUrl('/media/app/item.png'),
      name: 'CRM System',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex items-center gap-5 lg:gap-2.5">
      {/* Brand */}
      <div className="flex items-center justify-between w-full">
        {isMobile && (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="dim" mode="icon" className="-ms-3.5 size-6">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0 gap-0 w-16" side="left" close={false}>
              <SheetHeader className="p-0 space-y-0" />
              <SheetBody className="flex flex-col grow py-5 lg:px-0 lg:py-0 [--sidebar-space-x:calc(var(--spacing)*2.5)]">
                <SidebarContent />
              </SheetBody>
            </SheetContent>
          </Sheet>
        )}

        {/* Logo */}
        <Link
          to="/layout-17"
          className="flex items-center gap-2 -ms-2.5 lg:ms-0"
        >
          <img
            src={toAbsoluteUrl('/media/app/logo-32.svg')}
            className="dark:hidden shrink-0 size-7.5"
            alt="image"
          />

          <img
            src={toAbsoluteUrl('/media/app/mini-logo-gray-dark.svg')}
            className="hidden dark:inline-block shrink-0 size-7.5"
            alt="image"
          />

          <span className="text-mono text-xl font-medium hidden lg:block">
            Metronic
          </span>
        </Link>
      </div>

      {/* Project Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="px-4">
            <img src={toAbsoluteUrl('/media/app/item.png')} alt="image" />

            {!isMobile && 'Store Admin'}
            <ChevronsUpDown className="opacity-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="start"
          className="w-48"
          sideOffset={2}
        >
          {projects.map((project) => (
            <DropdownMenuItem
              key={project.name}
              onClick={() => setSelectedProject(project)}
              data-active={selectedProject.name === project.name}
            >
              <img src={project.logo} alt={project.name} />
              <span>{project.name}</span>
              {selectedProject.name === project.name && (
                <Check className="ms-auto size-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
