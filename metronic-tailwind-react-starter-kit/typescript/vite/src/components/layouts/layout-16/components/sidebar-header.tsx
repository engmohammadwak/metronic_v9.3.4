import { Link } from 'react-router-dom';
import { Check, ChevronsUpDown, Gem, Hexagon, Layers2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Team {
  icon: React.ElementType;
  name: string;
  color: string;
  members: number;
}

export function SidebarHeader() {
  const teams: Team[] = [
    {
      icon: Zap,
      name: "Thunder AI",
      color: "bg-[#00998F] text-white hover:bg-teal-600/90",
      members: 8
    },
    {
      icon: Gem,
      name: "Clarity AI",
      color: "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
      members: 6
    },
    {
      icon: Hexagon,
      name: "Lightning AI",
      color: "bg-yellow-600 text-white hover:bg-yellow-700",
      members: 12
    },
    {
      icon: Layers2,
      name: "Bold AI",
      color: "bg-blue-600 text-white hover:bg-blue-700",
      members: 4
    }
  ];

  const [selectedTeam, setSelectedTeam] = useState<Team>(teams[0]);

  return (
    <div className="flex items-center justify-between shrink-0 px-2.5 pt-5">
      <Link to="/layout-16" className="flex items-center gap-2">
        <Button size="sm" mode="icon" className={selectedTeam.color}>
          <selectedTeam.icon className="text-white" />
        </Button>
        <span className="text-mono text-sm font-medium">
          {selectedTeam.name}
        </span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            mode="icon"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <ChevronsUpDown className="opacity-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56"
          side="bottom"
          align="end"
          sideOffset={10}
          alignOffset={30}
        >
          {teams.map((team) => (
            <DropdownMenuItem key={team.name} onClick={() => setSelectedTeam(team)} data-active={selectedTeam.name === team.name}>
              <div className={cn("size-6 rounded-md flex items-center justify-center", team.color)}>
                <team.icon className="size-3.5" />
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
