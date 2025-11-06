import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Check, Grip, Menu } from 'lucide-react';
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
import { HeaderSearch } from './header-search';
import { SidebarMenu } from './sidebar-menu';

export function HeaderLogo() {
  const pathname = usePathname();
  const { isMobile } = useLayout();

  const projects = [
    {
      logo: toAbsoluteUrl('/media/app/item1.png'),
      name: 'Browse App',
    },
    {
      logo: toAbsoluteUrl('/media/app/item1.png'),
      name: 'Analytics',
    },
    {
      logo: toAbsoluteUrl('/media/app/item1.png'),
      name: 'Dashboard',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-1">
        {isMobile && (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="dim" mode="icon" className="-ms-2.5">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="p-0 gap-0 w-[225px] lg:w-(--sidebar-width)"
              side="right"
              close={false}
            >
              <SheetHeader className="p-0 space-y-0" />
              <SheetBody className="flex flex-col grow p-0">
                <HeaderSearch />
                <SidebarMenu />
              </SheetBody>
            </SheetContent>
          </Sheet>
        )}
        {/* Brand */}
        <Link href="/layout-32" className="flex items-center gap-2">
          <div
            className="
              flex items-center p-[5px]
              rounded-[6px] border border-white/30
              bg-[#000]
              bg-[radial-gradient(97.49%_97.49%_at_50%_2.51%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
              shadow-[0_0_0_1px_#000]
            "
          >
            <img
              src={toAbsoluteUrl('/media/app/logo-35.svg')}
              alt="image"
              className="min-w-[18px]"
            />
          </div>
        </Link>
      </div>

      {/* Project Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ps-1.5 pe-2.5">
            <img src={toAbsoluteUrl('/media/app/item1.png')} alt="image" />

            {!isMobile && <span>{selectedProject.name}</span>}
            <Grip className="size-3.5" />
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

      {!isMobile && <HeaderSearch />}
    </div>
  );
}
