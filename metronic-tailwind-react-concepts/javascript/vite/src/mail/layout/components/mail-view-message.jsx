import { ScrollArea } from '@/components/ui/scroll-area';
import { MailViewHeader } from './mail-view-header';
import { MailViewMessageBody } from './mail-view-message-body';
import { MailViewMessageFooter } from './mail-view-message-footer';
import { MailViewMessageHeader } from './mail-view-message-header';
import { MailViewWrapper } from './mail-view-wrapper';

export function MailViewMessage() {
  return (
    <MailViewWrapper>
      <MailViewHeader />

      {/* Mail List Content */}
      <ScrollArea className="lg:h-[calc(100vh-6rem)] me-1">
        <div className="flex flex-col items-stretch min-h-[calc(100vh-6rem)]">
          <MailViewMessageHeader />
          <MailViewMessageBody />
          <MailViewMessageFooter />
        </div>
      </ScrollArea>
    </MailViewWrapper>
  );
}
