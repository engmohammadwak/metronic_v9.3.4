import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HeaderMenu() {
  return (
    <div className="grid">
      <div className="overflow-auto">
        <Tabs defaultValue="dashboards" className="flex text-sm text-muted-foreground">
          <TabsList size="xs" className="w-full border border-border/80 bg-muted/80 [&_[data-slot=tabs-trigger]]:text-foreground [&_[data-slot=tabs-trigger]]:font-normal [&_[data-slot=tabs-trigger][data-state=active]]:shadow-lg">
            <TabsTrigger value="dashboards">
              Dashboards
            </TabsTrigger>
            <TabsTrigger value="public-profiles">
              Public Profiles
            </TabsTrigger>
            <TabsTrigger value="account-settings">
              Account Settings
            </TabsTrigger>
            <TabsTrigger value="network">
              Network
            </TabsTrigger>
            <TabsTrigger value="authentication">
              Authentication
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
