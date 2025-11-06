import { ScrollArea } from '@/components/ui/scroll-area';

export function SidebarSecondaryContent() {
  return (
    <ScrollArea className="grow my-1.5 h-[calc(100vh-5rem)]">
      <div className="text-sm space-y-6">
        <p>
          Focus: Enhancing the Metronic dashboard with smart UI improvements
        </p>

        <div>
          <p>Suggested features:</p>
          <ul className="list-disc list-outside ps-5 space-y-1">
            <li>Auto-suggestion of layout components</li>
            <li>Theme-aware widget generation</li>
            <li>Smart layout alignment based on grid settings</li>
            <li>AI-generated changelog summaries</li>
          </ul>
        </div>

        <p>
          Next step: Explore feasibility of auto-applying new Metronic updates
        </p>
      </div>
    </ScrollArea>
  );
}
