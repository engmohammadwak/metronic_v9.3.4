'use client';

import { Pattern } from "@/components/layouts/layout-34/components/pattern";

export default function Page() {
  return (
    <div className="container-fluid py-5 bg-muted/30 dark:bg-zinc-900 ">
      <Pattern className="rounded-lg grow h-screen border border-dashed border-input bg-background text-subtle-stroke relative text-border" />
    </div>
  );
}