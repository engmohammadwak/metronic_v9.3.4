import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';

export function HeaderNew() {
  return (
    <div>
      <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-zinc-800 hover:border-zinc-800">
        <CirclePlus className="size-4 text-white"/>
        New
      </Button>
    </div>
  );
};

