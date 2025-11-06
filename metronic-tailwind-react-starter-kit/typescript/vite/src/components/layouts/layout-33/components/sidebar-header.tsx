import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Link } from 'react-router';

export function SidebarHeader() {
  const { sidebarToggle } = useLayout();

  return (
    <div className="flex items-center justify-between shrink-0 px-5 py-2.5 border-b border-border">
      <Link to="/layout-33" className="flex items-center gap-2">
        <img
          src={toAbsoluteUrl('/media/app/mini-logo-gray.svg')}
          className="dark:hidden shrink-0 size-6"
          alt="image"
        />
        <img
          src={toAbsoluteUrl('/media/app/mini-logo-gray-dark.svg')}
          className="hidden dark:inline-block shrink-0 size-6"
          alt="image"
        />
        <span className="text-xl font-medium">
          Metronic
        </span>
      </Link>

      <Button mode="icon" variant="ghost" onClick={() => sidebarToggle()}  className="hidden lg:inline-flex">
        <PanelLeft />
      </Button>
    </div>
  );
}
