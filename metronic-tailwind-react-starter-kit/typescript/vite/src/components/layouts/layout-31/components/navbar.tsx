import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { AlertOctagon, Archive, FileText, Mail, Plus, Send, Star, Trash2 } from "lucide-react";

export function Navbar() {
  return (
		<Tabs defaultValue="overview" className="inline-grid">
			<TabsList size="xs" className={cn(
				'border border-input text-sm text-muted-foreground bg-background rounded-lg p-1.5 gap-2.5 overflow-auto',
				'[&_[data-slot=tabs-trigger]]:text-foreground [&_[data-slot=tabs-trigger]]:font-normal [&_[data-slot=tabs-trigger]]:rounded-lg [&_[data-slot=tabs-trigger]]:h-[34px]',
				'[&_[data-slot=tabs-trigger]]:border [&_[data-slot=tabs-trigger]]:border-transparent',
				'[&_[data-slot=tabs-trigger][data-state=active]]:bg-primary [&_[data-slot=tabs-trigger][data-state=active]]:text-primary-foreground [&_[data-slot=tabs-trigger][data-state=active]]:border-primary',
				'[&_[data-slot=tabs-trigger]:hover]:bg-muted/60 [&_[data-slot=tabs-trigger]:hover]:text-foreground [&_[data-slot=tabs-trigger]:hover]:border-border',
				'[&_[data-slot=tabs-trigger][data-state=active]_svg]:text-primary-foreground'
			)}>
				<TabsTrigger value="overview">
					<Plus />Compose
				</TabsTrigger>
				<Separator orientation="vertical" className="h-5.5" />
				<TabsTrigger value="permissions">
					<Mail />Inbox <Badge variant="outline" className="bg-background">4,245</Badge>
				</TabsTrigger>
				<TabsTrigger value="billing">
					<Send />Sent
				</TabsTrigger>
				<TabsTrigger value="drafts">
					<FileText />Drafts
				</TabsTrigger>
				<TabsTrigger value="favorites">
					<Star />Favorites
				</TabsTrigger>
				<Separator orientation="vertical" className="h-5.5" />
				<TabsTrigger value="archive">
					<Archive />Archive
				</TabsTrigger>
				<TabsTrigger value="deleted">
					<Trash2 />Deleted
				</TabsTrigger>
				<TabsTrigger value="spam">
					<AlertOctagon />Spam
				</TabsTrigger>
			</TabsList>
		</Tabs>
  );
}