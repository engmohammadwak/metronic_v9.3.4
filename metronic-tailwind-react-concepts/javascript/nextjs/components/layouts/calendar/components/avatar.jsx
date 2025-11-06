import { Ellipsis } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-2">
      <Avatar className="size-7">
        <AvatarImage
          src={toAbsoluteUrl('/media/avatars/300-1.png')}
          alt="@reui"
          className="border-2 border-background hover:z-10"
        />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Avatar className="size-7">
        <AvatarImage
          src={toAbsoluteUrl('/media/avatars/300-2.png')}
          alt="@reui"
          className="border-2 border-background hover:z-10"
        />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Avatar className="size-7">
        <AvatarImage
          src={toAbsoluteUrl('/media/avatars/300-3.png')}
          alt="@reui"
          className="border-2 border-background hover:z-10"
        />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Avatar className="size-7">
        <AvatarImage
          src={toAbsoluteUrl('/media/avatars/300-4.png')}
          alt="@reui"
          className="border-2 border-background hover:z-10"
        />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Button
        variant="secondary"
        className="relative size-7 rounded-full border-2 border-background hover:z-10 flex items-center justify-center"
      >
        <Ellipsis />
      </Button>
    </div>
  );
}
