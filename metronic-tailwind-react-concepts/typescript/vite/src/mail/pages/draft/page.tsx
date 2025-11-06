import { MailListMessages } from "../../layout/components/mail-list-messages";
import { MailViewEmpty } from "../../layout/components/mail-view-empty";

export function DraftPage() {
  return (
    <div className="flex grow gap-1 relative">
      <MailListMessages />
      <MailViewEmpty />
    </div>
  );
}
