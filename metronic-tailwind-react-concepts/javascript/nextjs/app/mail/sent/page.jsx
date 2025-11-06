import { MailListEmpty } from '@/components/layouts/mail/components/mail-list-empty';
import { MailViewEmpty } from '@/components/layouts/mail/components/mail-view-empty';

export default function SentPage() {
  return (
    <div className="flex grow gap-1">
      <MailListEmpty />
      <MailViewEmpty />
    </div>
  );
}
