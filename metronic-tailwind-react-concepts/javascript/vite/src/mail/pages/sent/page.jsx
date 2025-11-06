import { MailListEmpty } from '../../layout/components/mail-list-empty';
import { MailViewEmpty } from '../../layout/components/mail-view-empty';

export function SentPage() {
  return (
    <div className="flex grow gap-1 relative">
      <MailListEmpty />
      <MailViewEmpty />
    </div>
  );
}
