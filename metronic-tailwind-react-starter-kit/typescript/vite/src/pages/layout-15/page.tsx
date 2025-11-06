import { Content } from "@/components/layouts/layout-15/components/content";
import { ContentHeader } from "@/components/layouts/layout-15/components/content-header";
import { Skeleton } from "@/components/ui/skeleton";
import { Home } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FileCheck2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { BarChart2, CalendarClock, History, Download, Share, FileText, Info } from "lucide-react";

export function Layout15Page() {
  return (
    <>
      <ContentHeader className="space-x-2">
        <h1 className="inline-flex items-center gap-2.5 text-sm font-semibold">
          <Home className="size-4 text-primary"/> 
          Dashboard
        </h1>

        <div className="flex items-center gap-2.5">          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <FileCheck2 /> 
                Reports
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[230px]">
              {/* Notifications Toggle */}
              <DropdownMenuItem className="justify-between text-muted-foreground" onClick={(e) => {e.preventDefault()}}>
                <span>Enable Notifications</span>
                <Switch defaultChecked size="sm" />
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Add New User */}
              <DropdownMenuItem className="gap-2">
                <BarChart2 />
                <span>Generate Report</span>
              </DropdownMenuItem>

              {/* Send Invite Email */}
              <DropdownMenuItem className="gap-2">
                <CalendarClock />
                <span>Schedule Report</span>
              </DropdownMenuItem>

              {/* Set Roles */}
              <DropdownMenuItem className="gap-2">
                <History />
                <span>View Report History</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Export CSV */}
              <DropdownMenuItem className="gap-2">
                <Download />
                <span>Export view as CSV</span>
              </DropdownMenuItem>

              {/* Export Excel */}
              <DropdownMenuItem className="gap-2">
                <Share />
                <span>Export view as Excel</span>
              </DropdownMenuItem>

              {/* Import CSV */}
              <DropdownMenuItem className="gap-2">
                <FileText />
                <span>Import CSV</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Learn */}
              <DropdownMenuItem className="text-muted-foreground">
                <Info />
                <span className="text-sm">Learn more about Reports</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ContentHeader>
      
      <div className="container-fluid">
        <Content className="block space-y-6 py-5">
          <Skeleton className="rounded-lg grow h-[calc(100vh-135px)]"></Skeleton>
        </Content>
      </div>
    </>
  );
}
