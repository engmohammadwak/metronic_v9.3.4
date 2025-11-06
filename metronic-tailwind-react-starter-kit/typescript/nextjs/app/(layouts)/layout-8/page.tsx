'use client';

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"
import { Toolbar, ToolbarActions, ToolbarHeading } from "@/components/layouts/layout-8/components/toolbar";
import { SearchDialog } from "@/components/layouts/layout-1/shared/dialogs/search/search-dialog";
import { ChatSheet } from "@/components/layouts/layout-1/shared/topbar/chat-sheet";
import { Download, MessageCircleMore, Search } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Toolbar>
        <ToolbarHeading />
        <ToolbarActions>
          <SearchDialog
            trigger={
              <Button
                variant="ghost"
                mode="icon"
                className="hover:[&_svg]:text-primary"
              >
                <Search className="size-4.5!" />
              </Button>
            }
          />
          <ChatSheet
            trigger={
              <Button
                variant="ghost"
                mode="icon"
                className="hover:[&_svg]:text-primary"
              >
                <MessageCircleMore className="size-4.5!" />
              </Button>
            }
          />
          <Button
            variant="outline"
            asChild
            className="ms-2.5 hover:text-primary hover:[&_svg]:text-primary"
          >
            <Link href={'#'}>
              <Download />
              Export
            </Link>
          </Button>
        </ToolbarActions>
      </Toolbar>
      <div className="container">
        <Skeleton className="rounded-lg grow h-screen"></Skeleton>
      </div>
    </>
  );
}