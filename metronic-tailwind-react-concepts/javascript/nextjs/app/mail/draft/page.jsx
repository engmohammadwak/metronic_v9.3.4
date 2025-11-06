import { MailListMessages } from '@/components/layouts/mail/components/mail-list-messages';
import { MailViewEmpty } from '@/components/layouts/mail/components/mail-view-empty';

export default function DraftPage() {
  return (
    <div className="flex grow gap-1">
      <MailListMessages />
      <MailViewEmpty />
    </div>
  );
}
