import {
  BellDot,
  Download,
  Folder,
  MoreHorizontal,
  Printer,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function MailViewMessageHeader() {
  return (
    <TooltipProvider>
      <div className="px-4 mb-2">
        <span className="text-lg text-foreground text-semibold">Subject</span>

        <div className="flex items-center gap-2 mt-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge
                variant="primary"
                size="sm"
                className="size-5 cursor-pointer"
              >
                <BellDot />
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Updates</p>
            </TooltipContent>
          </Tooltip>

          <Separator orientation="vertical" className="h-5" />

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="group cursor-pointer flex items-center gap-1 px-1 border border-border rounded-full bg-accent/50 w-fit">
                <Avatar className="size-4 my-1">
                  <AvatarImage
                    src={toAbsoluteUrl('/media/avatars/300-1.png')}
                    alt="@reui"
                  />

                  <AvatarFallback className="border-0 text-xs font-medium">
                    CH
                  </AvatarFallback>
                </Avatar>

                <Separator orientation="vertical" className="h-6" />

                <span className="truncate max-w-[100px] text-xs group-hover:text-primary">
                  John Doe
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>John Doe - Project Manager</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Attachment */}
      <Link to={`#`} className="px-4 mt-3">
        {(() => {
          const attachments = [
            { name: 'Cover-Letter-2025-10.pdf', size: '0.05 MB' },
            { name: 'Resume-2025-10.pdf', size: '0.06 MB' },
          ];

          return (
            <div className="flex flex-col gap-2">
              <span className="text-sm text-foreground font-medium">
                Thread Attachments{' '}
                <span className="text-muted-foreground">
                  [{attachments.length}]
                </span>
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                {attachments.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center gap-2 rounded-lg border ps-2 p-0.5"
                  >
                    <Folder className="size-4 text-pink-500" />
                    <span className="text-xs max-w-[160px] truncate">
                      {file.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {file.size}
                    </span>
                    <div className="flex items-center pl-1 border-l border-border">
                      <Button variant="dim" mode="icon" size="sm">
                        <Download />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </Link>

      <Separator className="mt-4 mb-3" />

      <div className="flex items-center gap-2 px-4">
        {/* Avatar/Logo */}
        <div className="shrink-0 flex items-center justify-center border rounded-full size-[30px] bg-background">
          <Avatar className="size-[30px]">
            <AvatarImage
              src={toAbsoluteUrl('/media/avatars/300-1.png')}
              alt="@reui"
            />
            <AvatarFallback className="bg-background">CH</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-1 flex flex-col space-y-0.5">
          <div className="flex items-center gap-2">
            <Link
              to={`#`}
              className="font-medium text-2sm text-foreground hover:text-primary"
            >
              John Doe
            </Link>

            <HoverCard>
              <HoverCardTrigger className="text-sm cursor-pointer">
                <span className="text-2sm text-muted-foreground font-normal underline cursor-pointer">
                  Details
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit min-w-82 max-w-96">
                <div className="flex items-center gap-2.5">
                  <div className="flex-1 flex flex-col gap-2 text-right">
                    <span className="text-2sm font-normal  text-foreground">
                      From:
                    </span>
                    <span className="text-2sm font-normal text-foreground">
                      To:
                    </span>
                    <span className="text-2sm font-normal text-foreground">
                      Reply To:
                    </span>
                    <span className="text-2sm font-normal text-foreground">
                      Date:
                    </span>
                    <span className="text-2sm font-normal text-foreground">
                      Mailed-By:
                    </span>
                    <span className="text-2sm font-normal text-foreground">
                      Signed-By:
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-2sm text-muted-foreground">
                      <span className="font-medium text-secondary-foreground">
                        John Doe
                      </span>{' '}
                      no-reply@{'john.doe@gmail.com'}
                    </span>
                    <span className="text-2sm">dr.creator@gmail.com</span>
                    <span className="text-2sm text-muted-foreground">
                      John Doe &lt;no-reply@{'john.doe@gmail.com'}
                    </span>
                    <span className="text-2sm text-muted-foreground">
                      Oct 8, 2025, 10:20:24 PM
                    </span>
                    <span className="text-2sm text-muted-foreground">
                      no-reply@{'john.doe@gmail.com'}
                    </span>
                    <span className="text-2sm text-muted-foreground">
                      no-reply@{'john.doe@gmail.com'}
                    </span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <p className="text-xs text-muted-foreground font-normal">To: You</p>
        </div>

        {/* Date */}
        <div className="flex items-center">
          <span className="text-2sm text-secondary-foreground">11:20 PM</span>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="dim" mode="icon">
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Print</p>
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Printer />
                Print
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </TooltipProvider>
  );
}
