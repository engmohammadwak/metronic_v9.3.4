import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Download, Folder, Forward, Mail, Reply, ReplyAll } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Reply as ReplyDialog } from './reply';

export function MailViewMessageFooter() {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [composeMode, setComposeMode] = useState('reply');
  const attachments = [
    { name: 'Invoice-JBXADX8F-2025-10.pdf', size: '0.03 MB' },
    { name: 'Receipt-2595-6889.pdf', size: '0.03 MB' },
  ];

  // Listen for global events to open compose from other components (e.g., header)
  useEffect(() => {
    const handleOpenReply = () => {
      setComposeMode('reply');
      setIsReplyOpen(true);
    };
    const handleOpenForward = () => {
      setComposeMode('forward');
      setIsReplyOpen(true);
    };
    window.addEventListener('openReply', handleOpenReply);
    window.addEventListener('openForward', handleOpenForward);
    return () => {
      window.removeEventListener('openReply', handleOpenReply);
      window.removeEventListener('openForward', handleOpenForward);
    };
  }, []);
  return (
    <TooltipProvider>
      <div className="flex flex-col mt-auto">
        {/* Attachments row */}
        {!isReplyOpen && attachments.length > 0 && (
          <Link
            href={`#`}
            className="px-4 pb-2 flex items-center gap-3 flex-wrap"
          >
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
          </Link>
        )}

        {!isReplyOpen && (
          <div className="px-4 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-1"
                    onClick={() => {
                      setComposeMode('reply');
                      setIsReplyOpen(true);
                    }}
                  >
                    <Reply />
                    Reply
                    <Badge
                      variant="outline"
                      size="sm"
                      className="ml-1 bg-background"
                    >
                      r
                    </Badge>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reply</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-1"
                    onClick={() => {
                      setComposeMode('reply');
                      setIsReplyOpen(true);
                    }}
                  >
                    <ReplyAll />
                    Reply All
                    <Badge
                      variant="outline"
                      size="sm"
                      className="ml-1 bg-background"
                    >
                      a
                    </Badge>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reply All</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-1"
                    onClick={() => {
                      setComposeMode('forward');
                      setIsReplyOpen(true);
                    }}
                  >
                    <Forward />
                    Forward
                    <Badge
                      variant="outline"
                      size="sm"
                      className="ml-1 bg-background"
                    >
                      f
                    </Badge>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Forward</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" mode="icon">
                  <Mail />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coming soon</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}

        {/* Reply Form - Inline */}
        {isReplyOpen && (
          <ReplyDialog onOpenChange={setIsReplyOpen} mode={composeMode} />
        )}
      </div>
    </TooltipProvider>
  );
}
