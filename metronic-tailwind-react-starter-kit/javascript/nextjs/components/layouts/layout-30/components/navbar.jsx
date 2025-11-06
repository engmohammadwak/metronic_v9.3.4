import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Navbar() {
  return (
    <div className="pb-5">
      <Tabs
        defaultValue="overview"
        className="inline-grid text-sm text-muted-foreground lg:[&_[data-slot=tabs-trigger]]:flex-1"
      >
        <TabsList
          size="xs"
          className="inline-flex overflow-auto shrink-0 border border-border/80 bg-muted/80 [&_[data-slot=tabs-trigger]]:text-foreground [&_[data-slot=tabs-trigger]]:font-normal [&_[data-slot=tabs-trigger][data-state=active]]:shadow-lg"
        >
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="keys-&-authentication">
            Keys & Authentication
          </TabsTrigger>
          <TabsTrigger value="rate-limits">Rate Limits</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
