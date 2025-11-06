import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from "@/components/layouts/layout-28/components/toolbar";
import { Button } from "@/components/ui/button";
import { Input, InputWrapper } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Coffee, Pin, MessageSquareCode, VectorSquare, Search } from "lucide-react";

export function Layout28Page() {
  const handleInputChange = () => {};

  return (
    <div className="container-fluid">
      <Toolbar>
        <div className="flex items-center gap-3">
          <ToolbarHeading>
            <ToolbarPageTitle>Code Snippet</ToolbarPageTitle>
            <ToolbarDescription>Add prebuilt code blocks to projects</ToolbarDescription>
          </ToolbarHeading>
        </div>
        <ToolbarActions>
          <InputWrapper className="w-full lg:w-45 rounded-4xl">
            <Search />
            <Input type="search" placeholder="Search" onChange={handleInputChange} />
          </InputWrapper>
          <Button mode="icon" shape="circle" variant="outline"><Coffee /></Button>
          <Button mode="icon" shape="circle" variant="outline"><MessageSquareCode /></Button>
          <Button mode="icon" shape="circle" variant="outline"><Pin /></Button>
          <Button variant="mono" shape="circle"><VectorSquare />Share</Button>
        </ToolbarActions>
      </Toolbar>
      <Skeleton className="rounded-lg grow h-screen bg-0"></Skeleton>
    </div>
  );
}
