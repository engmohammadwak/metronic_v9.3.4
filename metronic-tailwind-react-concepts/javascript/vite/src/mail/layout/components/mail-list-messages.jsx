import { useState } from 'react';
import { AlertCircle, Archive, CircleCheck, Star, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { toAbsoluteUrl } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { Alert, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge, BadgeDot } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLayout } from './context';
import { MailListHeader } from './mail-list-header';
import { MailListWrapper } from './mail-list-wrapper';

export const emailMessages = [
  {
    id: '1',
    sender: 'Figma',
    senderInitial: 'F',
    subject: 'Remote access for Figma MCP server',
    date: 'Sep 23',
    isUnread: true,
    hasLogo: true,
    logo: toAbsoluteUrl('/media/brand-logos/figma.svg'),
  },
  {
    id: '2',
    sender: 'Attio',
    senderInitial: 'A',
    subject: '[Keenthemes] 23 Sep → 2 tasks overdue',
    date: 'Sep 23',
    isUnread: false,
  },
  {
    id: '3',
    sender: 'Pepper Potts',
    senderInitial: 'P',
    subject: 'Meeting about the new project',
    date: 'Sep 22',
    isUnread: true,
    avatar: toAbsoluteUrl('/media/avatars/300-14.png'),
  },
  {
    id: '4',
    sender: 'GitHub',
    senderInitial: 'G',
    subject: 'Pull request #1234 has been merged',
    date: 'Sep 21',
    isUnread: false,
    hasLogo: true,
    logo: toAbsoluteUrl('/media/brand-logos/github-light.svg'),
    logoDark: toAbsoluteUrl('/media/brand-logos/github-dark.svg'),
  },
  {
    id: '5',
    sender: 'Slack',
    senderInitial: 'S',
    subject: 'New message in #general channel',
    date: 'Sep 21',
    isUnread: true,
    hasLogo: true,
    logo: toAbsoluteUrl('/media/brand-logos/slack.svg'),
  },
  {
    id: '6',
    sender: 'Notion',
    senderInitial: 'N',
    subject: 'Document shared: Project Planning',
    date: 'Sep 20',
    isUnread: false,
    hasLogo: true,
    logo: toAbsoluteUrl('/media/brand-logos/notion.svg'),
  },
  {
    id: '7',
    sender: 'Discord',
    senderInitial: 'D',
    subject: 'Server update: New features available',
    date: 'Sep 20',
    isUnread: true,
    hasLogo: true,
    logo: toAbsoluteUrl('/media/brand-logos/discord.svg'),
  },
  {
    id: '8',
    sender: 'Tony Stark',
    senderInitial: 'T',
    subject: 'Iron Man suit maintenance schedule',
    date: 'Sep 19',
    isUnread: false,
    avatar: toAbsoluteUrl('/media/avatars/300-1.png'),
  },
  {
    id: '9',
    sender: 'Stripe',
    senderInitial: 'S',
    subject: 'Payment processed successfully',
    date: 'Sep 19',
    isUnread: true,
    hasLogo: true,
    logo: toAbsoluteUrl('/media/brand-logos/stripe.svg'),
  },
  {
    id: '10',
    sender: 'Google',
    senderInitial: 'V',
    subject: 'Deployment completed: v2.1.0',
    date: 'Sep 18',
    isUnread: false,
    hasLogo: true,
    logo: toAbsoluteUrl('/media/brand-logos/google.svg'),
  },
];

// Function to get selected email data
export function getSelectedEmailData(selectedId) {
  return emailMessages.find((email) => email.id === selectedId);
}

// Export a function to get current selected email ID
let currentSelectedEmail = '1';
export function getCurrentSelectedEmail() {
  return currentSelectedEmail;
}

export function setCurrentSelectedEmail(id) {
  currentSelectedEmail = id;
  // Dispatch custom event to notify other components
  window.dispatchEvent(
    new CustomEvent('emailSelected', { detail: { emailId: id } }),
  );
}

export function MailListMessages() {
  const [selectedEmail, setSelectedEmail] = useState('1');
  const [starredEmails, setStarredEmails] = useState(new Set());
  const { isMobile, showMailView } = useLayout();

  const toggleStar = (emailId) => {
    const wasStarred = starredEmails.has(emailId);

    setStarredEmails((prev) => {
      const newSet = new Set(prev);

      if (wasStarred) {
        newSet.delete(emailId);
      } else {
        newSet.add(emailId);
      }

      return newSet;
    });

    return wasStarred;
  };

  return (
    <MailListWrapper>
      <MailListHeader />

      {/* Mail List Content */}
      <div className="px-4 py-1">
        <ScrollArea className="lg:h-[calc(100vh-5.5rem)]">
          <div className="space-y-1">
            {emailMessages.map((email) => (
              <div
                key={email.id}
                className={cn(
                  'group flex items-center gap-2.5 p-2 rounded-lg cursor-pointer transition-colors relative',
                  'hover:bg-secondary',
                  selectedEmail === email.id ? 'bg-secondary' : '',
                )}
                onClick={() => {
                  console.log('Email clicked:', email.id, email.sender);
                  setSelectedEmail(email.id);
                  setCurrentSelectedEmail(email.id);

                  if (isMobile) {
                    showMailView();
                  }
                }}
              >
                {/* Avatar/Logo */}
                <div className="shrink-0 flex items-center justify-center border rounded-full size-[30px] bg-background">
                  <Avatar
                    className={`${email.logo ? 'size-[20px]' : 'size-[30px]'}`}
                  >
                    {email.avatar ? (
                      <AvatarImage src={email.avatar} alt={email.sender} />
                    ) : (
                      <>
                        {email.logo && (
                          <AvatarImage
                            src={email.logo}
                            alt={email.sender}
                            className={
                              email.logoDark ? 'block dark:hidden' : ''
                            }
                          />
                        )}
                        {email.logoDark && (
                          <AvatarImage
                            src={email.logoDark}
                            alt={email.sender}
                            className="hidden dark:block"
                          />
                        )}
                      </>
                    )}
                    <AvatarFallback className="bg-background">
                      {email.senderInitial}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Email Content */}
                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center">
                    <Link
                      to={`#`}
                      className={`font-medium text-sm text-foreground hover:text-primary ${email.isUnread ? 'font-medium' : ''}`}
                    >
                      {email.sender}
                    </Link>
                    {email.isUnread && (
                      <Badge appearance="ghost">
                        <BadgeDot className="size-2" />
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground font-normal">
                    {email.subject}
                  </p>
                </div>

                {/* Date */}
                <span className="text-xs text-secondary-foreground mb-5">
                  {email.date}
                </span>

                {/* Tooltip Content */}
                <div className="border border-border flex items-center gap-0.5 p-0.5 absolute top-1 end-1 opacity-0 group-hover:opacity-100 transition-opacity bg-background rounded-md shadow-xs shadow-black/5">
                  <Button
                    variant="ghost"
                    mode="icon"
                    size="sm"
                    className="size-6"
                  >
                    <Star
                      className={cn(
                        'size-3.5',
                        starredEmails.has(email.id)
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-muted-foreground',
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        const wasStarred = toggleStar(email.id);
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
                                {wasStarred ? 'Star removed' : 'Email starred'}
                              </AlertTitle>
                            </Alert>
                          ),

                          {
                            duration: 5000,
                          },
                        );
                      }}
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    mode="icon"
                    size="sm"
                    className="size-6"
                  >
                    <AlertCircle className="size-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    mode="icon"
                    size="sm"
                    className="size-6"
                  >
                    <Archive className="size-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    mode="icon"
                    size="sm"
                    className="size-6"
                  >
                    <Trash2 className="text-destructive size-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </MailListWrapper>
  );
}
