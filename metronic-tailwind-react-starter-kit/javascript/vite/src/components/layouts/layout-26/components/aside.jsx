import { Minimize2, MoveDiagonal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';

export function Aside() {
  const { asideExpandedToggle } = useLayout();

  return (
    <div
      className={cn(
        'lg:fixed lg:z-10 lg:top-2.5 lg:bottom-2.5 lg:end-(--aside-toolbar-width) flex flex-col p-5 items-stretch shrink-0 w-full lg:bg-background lg:border lg:border-input lg:rounded-xl lg:shadow-xs lg:w-(--aside-width) transition-[width] duration-300 overflow-hidden',
        'in-data-[aside-expanded=true]:start-2.5! in-data-[aside-expanded=true]:end-2.5! in-data-[aside-expanded=true]:z-50! in-data-[aside-expanded=true]:w-auto! transition-[left,right,margin,width] duration-300',
      )}
    >
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-base font-medium">Extended Aside</h1>
        <Button
          variant="outline"
          mode="icon"
          onClick={() => asideExpandedToggle()}
        >
          <MoveDiagonal className="hidden in-data-[aside-expanded=false]:block" />
          <Minimize2 className="block in-data-[aside-expanded=false]:hidden" />
        </Button>
      </div>
      <div
        className="grow w-full rounded-lg border border-dashed border-input min-h-96 bg-background text-subtle-stroke relative text-border"
        style={{
          backgroundImage:
            'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)',
        }}
      ></div>
    </div>
  );
}
