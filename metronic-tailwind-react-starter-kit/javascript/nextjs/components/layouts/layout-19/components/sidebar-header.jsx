import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  EllipsisVertical,
  Gem,
  Hexagon,
  Layers2,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
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
      name: 'Thunder AI',
      color: 'bg-black hover:bg-teal-600 text-white',
      members: 8,
      balance: 1245,
      change: 0.9,
    },
    {
      icon: Gem,
      name: 'Clarity AI',
      color: 'bg-fuchsia-600 text-white',
      members: 8,
      balance: 982,
      change: -1.2,
    },
    {
      icon: Hexagon,
      name: 'Lightning AI',
      color: 'bg-yellow-600 text-white',
      members: 8,
      balance: 1530,
      change: 2.5,
    },
    {
      icon: Layers2,
      name: 'Bold AI',
      color: 'bg-blue-600 text-white',
      members: 8,
      balance: 760,
      change: -0.4,
    },
  ];

  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  return (
    <div className="p-5 border-b border-border shrink-0 flex items-center justify-between">
      <Link href="/layout-19" className="flex items-center gap-1.5">
        <Button size="md" mode="icon" className={selectedTeam.color}>
          <selectedTeam.icon className="size-5" />
        </Button>
        <div className="flex flex-col">
          <span className="text-mono text-sm font-medium">
            {selectedTeam.name}
          </span>

          <span className="text-[#676A72] font-inter text-[12px] font-normal leading-[12px]">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(selectedTeam.balance)}{' '}
            <Badge
              variant={selectedTeam.change >= 0 ? 'success' : 'destructive'}
              appearance="ghost"
            >
              {selectedTeam.change > 0 ? '+' : ''}
              {selectedTeam.change}%
            </Badge>
          </span>
        </div>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            mode="icon"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <EllipsisVertical className="opacity-100" />
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
