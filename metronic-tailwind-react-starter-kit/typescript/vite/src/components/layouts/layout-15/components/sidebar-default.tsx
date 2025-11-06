import { SidebarDefaultContent } from "./sidebar-default-content";
import { SidebarDefaultHeader } from "./sidebar-default-header";
import { SidebarDefaultFooter } from "./sidebar-default-footer";

export function SidebarDefault() {
  return (
    <>
			<SidebarDefaultHeader />
			<SidebarDefaultContent/>
			<SidebarDefaultFooter/>
		</>
  );
}
