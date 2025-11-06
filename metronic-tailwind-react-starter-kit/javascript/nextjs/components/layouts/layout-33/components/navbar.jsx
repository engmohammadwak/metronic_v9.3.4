import {
  Coffee,
  MessageSquareCode,
  NotebookText,
  Pin,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';

export function Navbar() {
  const { isMobile } = useLayout();

  return (
    <>
      <Button mode="icon" variant="outline">
        <Coffee />
      </Button>
      <Button mode="icon" variant="outline">
        <MessageSquareCode />
      </Button>
      <Button mode="icon" variant="outline">
        <Pin />
      </Button>
      {!isMobile ? (
        <Button variant="outline">
          <NotebookText />
          Reports
        </Button>
      ) : (
        <Button variant="outline" mode="icon">
          <NotebookText />
        </Button>
      )}
      <Button variant="mono">
        <Plus /> Add
      </Button>
    </>
  );
}
