import { ComposeMessage } from './compose-message';
import { UserPanel } from './user-panel';

export function SidebarHeader() {
  return (
    <div className="space-y-3 py-4 in-data-[sidebar-collapsed=true]:w-15 px-2">
      <div className="flex flex-col gap-2.5 in-data-[sidebar-collapsed=true]:items-center">
        <UserPanel />
      </div>

      <div className="in-data-[sidebar-collapsed=true]:px-0 in-data-[sidebar-collapsed=true]:w-8.5 in-data-[sidebar-collapsed=true]:mx-auto">
        <ComposeMessage />
      </div>
    </div>
  );
}
