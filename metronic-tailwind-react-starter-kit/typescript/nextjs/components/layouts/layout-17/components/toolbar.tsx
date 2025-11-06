import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Coffee, MessageSquareCode, NotebookText, Pin, Plus } from 'lucide-react';
import Link from 'next/link';

function Toolbar() {
  return (
    <div className="py-2.5 lg:py-7.5 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
      <div className="flex flex-col items-start gap-0.5">
        <h1 className="text-base font-semibold">
          Updates
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-xs text-muted-foreground">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Account</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-xs text-muted-foreground">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Updates</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2.5">
        <Button mode="icon" variant="outline"><Coffee /></Button>
        <Button mode="icon" variant="outline"><MessageSquareCode /></Button>
        <Button mode="icon" variant="outline"><Pin /></Button>
        <Button variant="outline"><NotebookText />Reports</Button>
        <Button className="bg-[#0B5C22] hover:bg-[#0B5C22]/90"><Plus /> Add</Button>
      </div>
    </div>
  );
}

export {
  Toolbar
};
