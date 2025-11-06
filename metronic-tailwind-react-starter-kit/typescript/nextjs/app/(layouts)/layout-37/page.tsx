'use client';

import { MailListEmpty } from "@/components/layouts/layout-37/components/mail-list-empty";
import { MailViewEmpty } from "@/components/layouts/layout-37/components/mail-view-empty";

export default function Page() {
  return (
    <div className="flex grow gap-1 relative">
      <MailListEmpty />
      <MailViewEmpty />
    </div>
  );
}