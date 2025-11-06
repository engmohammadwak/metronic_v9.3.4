import { Rows3, Search, Filter, SortAsc, SortDesc, Grid3X3, List, Settings, Download, RefreshCw } from "lucide-react";
import { Input, InputWrapper } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";

export function SidebarSearch() {
  const handleInputChange = () => {};

  return (
    <div className="p-5 border-b border-border shrink-0 flex items-center justify-between gap-2.5">
      <InputWrapper>
        <Search />
        <Input type="search" placeholder="Search Billing" onChange={handleInputChange} />
      </InputWrapper>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" mode="icon">
            <Rows3 />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>View Options</DropdownMenuLabel>
          <DropdownMenuItem>
            <Grid3X3 />
            Grid View
          </DropdownMenuItem>
          <DropdownMenuItem>
            <List />
            List View
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel>Sort & Filter</DropdownMenuLabel>
          <DropdownMenuItem>
            <SortAsc/>
            Sort Ascending
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SortDesc />
            Sort Descending
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Filter />
            Advanced Filters
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Download />
            Export Data
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RefreshCw />
            Refresh
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
