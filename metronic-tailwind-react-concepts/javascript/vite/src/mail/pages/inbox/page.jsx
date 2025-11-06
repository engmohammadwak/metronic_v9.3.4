import { MailListMessages } from '../../layout/components/mail-list-messages';
import { MailViewMessage } from '../../layout/components/mail-view-message';

export function InboxPage() {
  return (
    <div className="flex grow gap-1 relative">
      <MailListMessages />
      <MailViewMessage />
    </div>
  );
}
