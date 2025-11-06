import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLayout } from './context';

export function HeaderLogo() {
  const { isMobile } = useLayout();

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
    <div className="flex items-center gap-7.5 lg:w-[225px]">
      {/* Brand */}
      <Link to="/layout-22" className="flex items-center gap-2">
        <div
          className="
            flex items-center p-[6px]
            rounded-[60px] border border-[rgba(255,255,255,0.3)]
            bg-[#000]
            bg-[radial-gradient(97.49%_97.49%_at_50%_2.51%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
            shadow-[0_0_0_1px_#000]
          "
        >
          <img
            src={toAbsoluteUrl('/media/app/logo-35.svg')}
            alt="image"
            className="min-w-[16px]"
          />
        </div>
      </Link>

      {/* Project Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="px-1.5">
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
