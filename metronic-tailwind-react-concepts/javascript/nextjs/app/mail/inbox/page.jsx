import { MailListMessages } from '@/components/layouts/mail/components/mail-list-messages';
import { MailViewMessage } from '@/components/layouts/mail/components/mail-view-message';

export default function InboxPage() {
  return (
    <div className="flex grow gap-1">
      <MailListMessages />
      <MailViewMessage />
    </div>
  );
}
