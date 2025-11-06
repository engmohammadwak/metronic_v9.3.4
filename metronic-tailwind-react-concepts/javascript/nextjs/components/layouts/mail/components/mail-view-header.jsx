'use client';

import { useState } from 'react';
import {
  Archive,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Copy,
  Download,
  Eye,
  EyeOff,
  FileText,
  Flag,
  Forward,
  MoreHorizontal,
  Plus,
  Printer,
  Reply,
  Star,
  Trash2,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { Alert, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useLayout } from './context';
import {
  emailMessages,
  getCurrentSelectedEmail,
  setCurrentSelectedEmail,
} from './mail-list-messages';

export function MailViewHeader() {
  const { isMobile, hideMailView } = useLayout();

  const [isStarred, setIsStarred] = useState(false);
  const [isFlagged, setIsFlagged] = useState(false);
  const [isRead, setIsRead] = useState(true);

  // Navigation functions
  const goToPreviousEmail = () => {
    const currentId = getCurrentSelectedEmail();
    const currentIndex = emailMessages.findIndex(
      (email) => email.id === currentId,
    );
    if (currentIndex > 0) {
      const previousEmail = emailMessages[currentIndex - 1];
      setCurrentSelectedEmail(previousEmail.id);
    }
  };

  const goToNextEmail = () => {
    const currentId = getCurrentSelectedEmail();
    const currentIndex = emailMessages.findIndex(
      (email) => email.id === currentId,
    );
    if (currentIndex < emailMessages.length - 1) {
      const nextEmail = emailMessages[currentIndex + 1];
      setCurrentSelectedEmail(nextEmail.id);
    }
  };

  return (
    <TooltipProvider>
      <div className="flex items-center flex-wrap justify-between px-2 py-3">
        {/* Left side - Navigation and close */}
        <div className="flex items-center gap-1">
          {isMobile && (
            <>
              <Button variant="ghost" mode="icon" onClick={hideMailView}>
                <X />
              </Button>
              <Separator orientation="vertical" className="mx-0.5 h-4" />
            </>
          )}

          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" mode="icon" onClick={goToPreviousEmail}>
                  <ChevronLeft />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Previous email</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" mode="icon" onClick={goToNextEmail}>
                  <ChevronRight />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Next email</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <Badge
            variant={isFlagged ? 'success' : 'secondary'}
            className="text-xs"
          >
            {isFlagged ? 'High Priority' : 'Normal'}
          </Badge>
          <Button
            variant="ghost"
            mode="icon"
            onClick={() => setIsRead(!isRead)}
            title={isRead ? 'Mark as unread' : 'Mark as read'}
          >
            {isRead ? (
              <Eye className="size-4" />
            ) : (
              <EyeOff className="size-4" />
            )}
          </Button>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => window.dispatchEvent(new Event('openReply'))}
          >
            <Reply />
            Reply all
          </Button>

          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" mode="icon">
                    <FileText />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notes</p>
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end" className="w-80 p-0">
              <Card className="border-0 shadow-none">
                <CardHeader className="pe-3">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4" />
                    <span className="font-medium">Notes</span>
                  </div>
                  <Button variant="dim" mode="icon">
                    <X />
                  </Button>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="size-12 rounded-lg border border-dashed border-muted-foreground/20 flex items-center justify-center mb-3">
                      <FileText className="size-6 text-muted-foreground/40" />
                    </div>

                    <h4 className="font-medium text-foreground mb-1 text-sm">
                      No notes for this email
                    </h4>

                    <p className="text-xs text-muted-foreground mb-4">
                      Add notes to keep track of important information or
                      follow-ups.
                    </p>

                    <Button>
                      <Plus />
                      Add a note
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                mode="icon"
                onClick={() => {
                  setIsFlagged(!isFlagged);
                  toast.custom(
                    (t) => (
                      <Alert
                        variant="mono"
                        icon="success"
                        onClose={() => toast.dismiss(t)}
                      >
                        <AlertIcon>
                          <CircleCheck />
                        </AlertIcon>
                        <AlertTitle>
                          {isFlagged
                            ? 'Priority flag removed'
                            : 'Email marked as high priority'}{' '}
                          successfully!
                        </AlertTitle>
                      </Alert>
                    ),

                    {
                      duration: 5000,
                    },
                  );
                }}
              >
                <Flag className={isFlagged ? 'fill-current' : ''} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {isFlagged ? 'Remove priority flag' : 'Mark as high priority'}
              </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                mode="icon"
                onClick={() => {
                  setIsStarred(!isStarred);
                  toast.custom(
                    (t) => (
                      <Alert
                        variant="mono"
                        icon="success"
                        onClose={() => toast.dismiss(t)}
                      >
                        <AlertIcon>
                          <CircleCheck />
                        </AlertIcon>
                        <AlertTitle>
                          {isStarred ? 'Star removed' : 'Email starred'}{' '}
                          successfully!
                        </AlertTitle>
                      </Alert>
                    ),

                    {
                      duration: 5000,
                    },
                  );
                }}
              >
                <Star
                  className={isStarred ? 'fill-current text-yellow-500' : ''}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isStarred ? 'Remove star' : 'Add star'}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                mode="icon"
                onClick={() => {
                  toast.custom(
                    (t) => (
                      <Alert
                        variant="mono"
                        icon="success"
                        onClose={() => toast.dismiss(t)}
                      >
                        <AlertIcon>
                          <CircleCheck />
                        </AlertIcon>
                        <AlertTitle>Email link copied to clipboard!</AlertTitle>
                      </Alert>
                    ),

                    {
                      duration: 5000,
                    },
                  );
                }}
              >
                <Copy className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>

          <Button
            variant="destructive"
            mode="icon"
            className="bg-red-50 hover:bg-red-100 dark:bg-red-950 dark:hover:bg-red-900"
          >
            <Trash2 className="text-red-600 dark:text-red-400" />
          </Button>

          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" mode="icon">
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Actions</p>
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Forward />
                Forward
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Archive />
                Archive
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bookmark />
                Mark as Important
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Download />
                Download
              </DropdownMenuItem>
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
