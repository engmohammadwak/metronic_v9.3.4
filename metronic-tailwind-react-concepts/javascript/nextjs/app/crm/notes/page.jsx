import { CalendarCheck, CalendarDays, CalendarRange } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Content } from '@/components/layouts/crm/components/content';
import { NotesFavorite } from './notes-favorite';
import { NoteList } from './notes-list';
import { PageHeader } from './page-header';

export default function NotesPage() {
  return (
    <>
      <PageHeader />
      <Content className="flex flex-col pt-4 pb-0">
        <h1 className="text-sm font-semibold ps-5 mb-2">Favorites</h1>
        <NotesFavorite className="mb-6 px-3" />

        <div className="flex grow">
          <Tabs defaultValue="today" className="grow text-sm">
            <TabsList
              variant="line"
              className="px-5 gap-6 bg-transparent [&_button]:border-b [&_button_svg]:size-4 [&_button]:text-secondary-foreground"
            >
              <TabsTrigger value="today">
                <CalendarCheck /> Today
              </TabsTrigger>
              <TabsTrigger value="week">
                <CalendarRange /> Week
              </TabsTrigger>
              <TabsTrigger value="completed">
                <CalendarDays />
                Archive
              </TabsTrigger>
            </TabsList>
            <TabsContent value="today">
              <NoteList filter="today" />
            </TabsContent>
            <TabsContent value="week">
              <NoteList filter="week" />
            </TabsContent>
            <TabsContent value="completed">
              <NoteList filter="completed" />
            </TabsContent>
          </Tabs>
        </div>
      </Content>
    </>
  );
}
