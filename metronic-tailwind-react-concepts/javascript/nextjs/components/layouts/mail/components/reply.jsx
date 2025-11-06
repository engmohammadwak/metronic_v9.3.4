import { useEffect, useRef, useState } from 'react';
import {
  AlignLeft,
  Bold,
  CircleCheck,
  CircleX,
  Italic,
  List,
  Loader2,
  Plus,
  Redo,
  Send,
  Sparkles,
  Strikethrough,
  Type,
  Underline,
  Undo,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Alert, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Generate } from './generate';
import {
  emailMessages,
  getCurrentSelectedEmail,
  getSelectedEmailData,
} from './mail-list-messages';

export function Reply({ onOpenChange, mode = 'reply' }) {
  const [selectedHeading, setSelectedHeading] = useState('P');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [ccEmail, setCcEmail] = useState('');
  const [bccEmail, setBccEmail] = useState('');
  const [emailChips, setEmailChips] = useState([]);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [subject, setSubject] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const textareaRef = useRef(null);
  const [selectedEmailId, setSelectedEmailId] = useState(
    getCurrentSelectedEmail(),
  );

  // Keep in sync with selected email in the list
  useEffect(() => {
    // Set initial chip based on current selected email (only for reply mode)
    if (mode === 'reply') {
      const currentEmail = getCurrentSelectedEmail();
      const emailData = getSelectedEmailData(currentEmail);
      if (emailData && emailData.sender) {
        const domain = emailData.sender.toLowerCase();
        const logoData = getLogoForDomain(domain);
        setEmailChips([
          {
            id: '1',
            email: `noreply@${domain}.com`,
            logo: logoData.name,
            logoUrl: logoData.url,
            avatarUrl: emailData.avatar,
          },
        ]);
      }
    } else {
      // Forward mode - no initial chip
      setEmailChips([]);
    }

    const handleEmailSelected = (event) => {
      setSelectedEmailId(event.detail.emailId);

      // Auto-add email chip when email is selected (only in reply mode)
      if (mode === 'reply') {
        const emailData = getSelectedEmailData(event.detail.emailId);
        if (emailData && emailData.sender) {
          const domain = emailData.sender.toLowerCase();
          const logoData = getLogoForDomain(domain);

          // Clear existing chips and add new one
          setEmailChips([
            {
              id: Date.now().toString(),
              email: `noreply@${domain}.com`,
              logo: logoData.name,
              logoUrl: logoData.url,
              avatarUrl: emailData.avatar,
            },
          ]);
        }
      }
    };

    window.addEventListener('emailSelected', handleEmailSelected);
    return () => {
      window.removeEventListener('emailSelected', handleEmailSelected);
    };
  }, []);

  // Auto-resize textarea as content grows, up to 600px
  const handleTextareaInput = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      // Reset height to get accurate scrollHeight
      textarea.style.height = 'auto';
      // Set new height, max 600px
      const newHeight = Math.min(textarea.scrollHeight, 600);
      textarea.style.height = `${newHeight}px`;
    }
  };

  const selectedEmailData =
    getSelectedEmailData(selectedEmailId) || emailMessages[0];
  const replyPlaceholder =
    mode === 'forward'
      ? 'Enter email'
      : selectedEmailData?.sender
        ? `@${selectedEmailData.sender.toLowerCase()}.com`
        : 'Enter email';

  // Add email chip when Enter is pressed
  const handleEmailInputKeyPress = (e) => {
    if (e.key === 'Enter' && emailAddress.trim()) {
      const email = emailAddress.trim();
      const domain = email.split('@')[1]?.split('.')[0];
      const logoData = getLogoForDomain(domain);

      const newChip = {
        id: Date.now().toString(),
        email: email,
        logo: logoData.name,
        logoUrl: logoData.url,
      };
      setEmailChips((prev) => [...prev, newChip]);
      setEmailAddress('');
    }
  };

  // Get logo based on email domain
  const getLogoForDomain = (domain) => {
    const domainLogos = {
      figma: {
        name: 'Figma',
        url: toAbsoluteUrl('/media/brand-logos/figma.svg'),
      },
      slack: {
        name: 'Slack',
        url: toAbsoluteUrl('/media/brand-logos/slack.svg'),
      },
      github: {
        name: 'GitHub',
        url: toAbsoluteUrl('/media/brand-logos/github-light.svg'),
      },
      google: {
        name: 'Google',
        url: toAbsoluteUrl('/media/brand-logos/google.svg'),
      },
      microsoft: {
        name: 'Microsoft',
        url: toAbsoluteUrl('/media/brand-logos/microsoft.svg'),
      },
      apple: {
        name: 'Apple',
        url: toAbsoluteUrl('/media/brand-logos/apple.svg'),
      },
      meta: { name: 'Meta', url: toAbsoluteUrl('/media/brand-logos/meta.svg') },
      twitter: {
        name: 'Twitter',
        url: toAbsoluteUrl('/media/brand-logos/twitter.svg'),
      },
      linkedin: {
        name: 'LinkedIn',
        url: toAbsoluteUrl('/media/brand-logos/linkedin.svg'),
      },
      attio: { name: 'A', url: '' },
      notion: {
        name: 'N',
        url: toAbsoluteUrl('/media/brand-logos/notion.svg'),
      },
      discord: {
        name: 'Discord',
        url: toAbsoluteUrl('/media/brand-logos/discord.svg'),
      },
      stripe: {
        name: 'Stripe',
        url: toAbsoluteUrl('/media/brand-logos/stripe.svg'),
      },
    };

    return (
      domainLogos[domain] || { name: domain.charAt(0).toUpperCase(), url: '' }
    );
  };

  // Remove email chip
  const removeEmailChip = (id) => {
    setEmailChips((prev) => prev.filter((chip) => chip.id !== id));
  };

  // Generate email content
  const generateEmailContent = async () => {
    setIsGenerating(true);

    const emailTemplates = [
      {
        subject: 'Update',
        content:
          "Hi,\n\nHope you're well.\nJust wanted to share an important update.\n\nThanks!\nAzim",
      },
      {
        subject: 'Follow-up',
        content:
          "Hello,\n\nFollowing up on our discussion.\nHere's the info you requested.\n\nBest,\nAzim",
      },
      {
        subject: 'Project',
        content:
          "Hi [Name],\n\nHope you're doing well.\nQuick update on our project.\n\nBest,\nAzim",
      },
    ];

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const randomTemplate =
      emailTemplates[Math.floor(Math.random() * emailTemplates.length)];
    setGeneratedContent(randomTemplate.content);
    setSubject(randomTemplate.subject);
    setIsGenerating(false);
    setShowGenerateModal(true);
  };

  // Accept generated content
  const acceptGeneratedContent = () => {
    if (textareaRef.current) {
      textareaRef.current.value = generatedContent;
      handleTextareaInput();
    }
    setShowGenerateModal(false);
  };

  // Reject generated content
  const rejectGeneratedContent = () => {
    setShowGenerateModal(false);
  };

  const formatHeading = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <>
      <div className="border bg-background mx-4 rounded-lg">
        {/* Combined To field with Cc, Bcc, X */}
        <div className="p-2 border-b">
          <div className="relative">
            <div
              className={`flex items-center gap-2 flex-wrap min-h-[40px] ${mode === 'forward' ? 'ps-4' : 'ps-8'}`}
            >
              {/* Email chips */}
              {emailChips.map((chip) => (
                <div
                  key={chip.id}
                  className="flex items-center gap-1 bg-background border border-border rounded-full px-2 py-1"
                >
                  <Avatar className="size-4">
                    <AvatarImage
                      src={chip.avatarUrl || chip.logoUrl}
                      alt={chip.logo}
                    />
                    <AvatarFallback>{chip.logo}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-foreground">{chip.email}</span>
                  <Button
                    variant="dim"
                    size="sm"
                    mode="icon"
                    className="size-3 p-0"
                    onClick={() => removeEmailChip(chip.id)}
                  >
                    <X className="size-2" />
                  </Button>
                </div>
              ))}
              {/* Input field */}
              <Input
                placeholder={emailChips.length === 0 ? replyPlaceholder : ''}
                className="flex-1 bg-background border-none shadow-none outline-none focus-visible:ring-0 min-w-[200px]"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                onKeyPress={handleEmailInputKeyPress}
              />
            </div>
            <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-sm font-medium text-muted-foreground">
              To:
            </span>
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <span
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground font-medium"
                onClick={() => setShowCc(!showCc)}
              >
                Cc
              </span>
              <span
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground font-medium"
                onClick={() => setShowBcc(!showBcc)}
              >
                Bcc
              </span>
              <Button
                className="-me-2"
                variant="dim"
                mode="icon"
                onClick={() => onOpenChange?.(false)}
              >
                <X />
              </Button>
            </div>
          </div>
        </div>

        {/* Cc field - conditional */}
        {showCc && (
          <div className="p-2 border-b">
            <div className="relative">
              <Input
                placeholder="Enter CC email"
                className="w-full bg-background border-none shadow-none ps-8 border-0 outline-none focus-visible:ring-0"
                value={ccEmail}
                onChange={(e) => setCcEmail(e.target.value)}
              />

              <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-sm font-medium text-muted-foreground">
                Cc:
              </span>
            </div>
          </div>
        )}

        {/* Bcc field - conditional */}
        {showBcc && (
          <div className="p-2 border-b">
            <div className="relative">
              <Input
                placeholder="Enter BCC email"
                className="w-full bg-background border-none shadow-none ps-10 outline-none focus-visible:ring-0 border-0"
                value={bccEmail}
                onChange={(e) => setBccEmail(e.target.value)}
              />

              <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-sm font-medium text-muted-foreground">
                Bcc:
              </span>
            </div>
          </div>
        )}

        {/* Subject field */}
        <div className="p-2 border-b">
          <div className="relative">
            <Input
              placeholder="Enter subject"
              className="w-full bg-background border-none shadow-none ps-16 outline-none focus-visible:ring-0 border-0"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-sm font-medium text-muted-foreground">
              Subject:
            </span>
          </div>
        </div>

        {/* Message body */}
        <div
          className="bg-background border-none shadow-none overflow-y-auto"
          style={{ maxHeight: '600px' }}
        >
          <Textarea
            ref={textareaRef}
            placeholder="Type your message here."
            className="w-full resize-none border-0 focus-visible:ring-0 text-sm placeholder:text-sm placeholder:font-normal placeholder:not-italic placeholder:no-underline overflow-y-auto"
            style={{
              minHeight: '128px',
              maxHeight: '600px',
              fontSize:
                selectedHeading === 'H1'
                  ? '2rem'
                  : selectedHeading === 'H2'
                    ? '1.5rem'
                    : selectedHeading === 'H3'
                      ? '1.25rem'
                      : selectedHeading === 'P'
                        ? '1rem'
                        : '1rem',
              fontWeight: isBold ? 'bold' : 'normal',
              fontStyle: isItalic ? 'italic' : 'normal',
              textDecoration: isUnderline
                ? 'underline'
                : isStrikethrough
                  ? 'line-through'
                  : 'none',
            }}
            onInput={handleTextareaInput}
          />
        </div>

        {/* Bottom toolbar */}
        <div className="flex items-center justify-between p-4 bg-background rounded-b-lg">
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              onClick={() => {
                const textarea = textareaRef.current;
                const message = textarea?.value || '';

                if (message.trim()) {
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
                          Email sent to {emailAddress || ''}
                        </AlertTitle>
                      </Alert>
                    ),

                    {
                      duration: 3000,
                    },
                  );

                  // Clear textarea, input and reset states
                  if (textarea) {
                    textarea.value = '';
                  }
                  setEmailAddress('');
                  setSelectedHeading('P');
                  setIsBold(false);
                  setIsItalic(false);
                  setIsUnderline(false);
                  setIsStrikethrough(false);
                } else {
                  toast.custom(
                    (t) => (
                      <Alert
                        variant="mono"
                        icon="success"
                        onClose={() => toast.dismiss(t)}
                      >
                        <AlertIcon>
                          <CircleX />
                        </AlertIcon>
                        <AlertTitle>
                          Please write a message before sending
                        </AlertTitle>
                      </Alert>
                    ),

                    {
                      duration: 3000,
                    },
                  );
                }
              }}
            >
              <Send /> Send
            </Button>

            <Button variant="outline">
              <Plus />
              Add
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Templates</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save</p>
              </TooltipContent>
            </Tooltip>
            <DropdownMenu>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" mode="icon">
                        <Type />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Formatting options</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <DropdownMenuContent
                align="start"
                side="top"
                className="w-auto p-2"
              >
                <div className="flex items-center gap-0.5">
                  {/* Undo/Redo */}
                  <Button variant="ghost" size="sm" mode="icon">
                    <Undo />
                  </Button>
                  <Button variant="ghost" size="sm" mode="icon">
                    <Redo />
                  </Button>

                  {/* Headings */}
                  <div className="flex gap-1 ml-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      mode="icon"
                      className={selectedHeading === 'H1' ? '' : ''}
                      onClick={() => formatHeading('H1')}
                    >
                      H1
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      mode="icon"
                      className={selectedHeading === 'H2' ? '' : ''}
                      onClick={() => formatHeading('H2')}
                    >
                      H2
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      mode="icon"
                      className={selectedHeading === 'H3' ? '' : ''}
                      onClick={() => formatHeading('H3')}
                    >
                      H3
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      mode="icon"
                      className={selectedHeading === 'P' ? '' : ''}
                      onClick={() => formatHeading('P')}
                    >
                      P
                    </Button>
                  </div>

                  {/* Separator */}
                  <Separator className="h-6 mx-2" orientation="vertical" />

                  {/* Text Formatting */}
                  <div className="flex gap-0.5">
                    <Button
                      variant="ghost"
                      size="sm"
                      mode="icon"
                      onClick={() => setIsBold(!isBold)}
                    >
                      <Bold />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      mode="icon"
                      onClick={() => setIsItalic(!isItalic)}
                    >
                      <Italic />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      mode="icon"
                      onClick={() => setIsStrikethrough(!isStrikethrough)}
                    >
                      <Strikethrough />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      mode="icon"
                      onClick={() => setIsUnderline(!isUnderline)}
                    >
                      <Underline />
                    </Button>
                  </div>

                  {/* Separator */}
                  <Separator className="h-6 mx-2" orientation="vertical" />

                  {/* Lists and Alignment */}
                  <div className="flex gap-0.5">
                    <Button variant="ghost" size="sm" mode="icon">
                      <List />
                    </Button>
                    <Button variant="ghost" size="sm" mode="icon">
                      <AlignLeft />
                    </Button>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button
            variant="outline"
            onClick={generateEmailContent}
            disabled={isGenerating}
          >
            {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles />}
            {isGenerating ? 'Generating...' : 'Generate'}
          </Button>
        </div>
      </div>

      {/* Generate Modal */}
      <Generate
        generatedContent={generatedContent}
        onAccept={acceptGeneratedContent}
        onReject={rejectGeneratedContent}
        open={showGenerateModal}
        onOpenChange={setShowGenerateModal}
        isGenerating={isGenerating}
      />
    </>
  );
}
