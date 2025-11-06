'use client';

import { Toolbar, ToolbarHeading, ToolbarPageTitle, ToolbarWrapper } from "@/components/layouts/layout-31/components/toolbar";
import { ToolbarSearch } from "@/components/layouts/layout-31/components/toolbar-search";
import { Skeleton } from "@/components/ui/skeleton";
import { Navbar } from "@/components/layouts/layout-31/components/navbar";

export default function Page() {
  return (
    <div className="container-fluid py-5"> 
      <Toolbar >
        <ToolbarHeading>
          <ToolbarPageTitle>
            <ToolbarSearch />
          </ToolbarPageTitle>
        </ToolbarHeading>
        <ToolbarWrapper>
          <Navbar />
        </ToolbarWrapper>        
      </Toolbar>

      <div className="flex gap-5">
        <Skeleton
          className="flex-1 rounded-lg grow h-screen border border-dashed border-input bg-background text-subtle-stroke relative text-border"
          style={{
            backgroundImage: 'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)'
          }}
        >

        </Skeleton>

        <Skeleton
          className="w-1/3 rounded-lg grow h-screen border border-dashed border-input bg-background text-subtle-stroke relative text-border"
          style={{
            backgroundImage: 'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)'
          }}
        >

        </Skeleton>
      </div>
    </div>
  );
}