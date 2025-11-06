import { useState } from 'react';
import {
  Check,
  ChevronsUpDown,
  Gem,
  Hexagon,
  Layers2,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function SidebarHeader() {
  const teams = [
    {
      icon: Zap,
      name: 'Thunder Team',
      color: 'bg-teal-600 text-white',
      members: 8,
    },
    {
      icon: Gem,
      name: 'Clarity Team',
      color: 'bg-fuchsia-600 text-white',
      members: 8,
    },
    {
      icon: Hexagon,
      name: 'Lightning Team',
      color: 'bg-yellow-600 text-white',
      members: 8,
    },
    {
      icon: Layers2,
      name: 'Bold Team',
      color: 'bg-blue-600 text-white',
      members: 8,
    },
  ];

  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  return (
    <div className="flex items-center justify-between w-full px-5 h-(--sidebar-header-height) border-b border-border shrink-0">
      <Link to="/layout-13" className="flex items-center gap-2">
        <Button size="sm" mode="icon" className={selectedTeam.color}>
          <selectedTeam.icon />
        </Button>
        <span className="text-mono text-sm font-medium hidden lg:block">
          {selectedTeam.name}
        </span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            mode="icon"
            variant="ghost"
            className="hidden lg:inline-flex text-muted-foreground hover:text-foreground"
          >
            <ChevronsUpDown className="opacity-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56"
          side="bottom"
          align="end"
          sideOffset={10}
          alignOffset={-10}
        >
          {teams.map((team) => (
            <DropdownMenuItem
              key={team.name}
              onClick={() => setSelectedTeam(team)}
              data-active={selectedTeam.name === team.name}
            >
              <div
                className={cn(
                  'size-6 rounded-md flex items-center justify-center',
                  team.color,
                )}
              >
                <team.icon className="size-4" />
              </div>
              <span className="text-mono text-sm font-medium">{team.name}</span>
              {selectedTeam.name === team.name && (
                <Check className="ms-auto size-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
