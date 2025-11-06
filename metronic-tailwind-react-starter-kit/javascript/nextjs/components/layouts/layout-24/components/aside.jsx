import {
  Coffee,
  MessageSquareCode,
  Pin,
  Search,
  VectorSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input, InputWrapper } from '@/components/ui/input';

export function Aside() {
  const handleInputChange = () => {};

  return (
    <div className="lg:fixed lg:z-50 lg:top-2.5 lg:end-7.5 lg:bottom-7.5 flex flex-col items-center shrink-0 w-full lg:w-(--aside-width)">
      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row items-center justify-center shrink-0 p-5 lg:pt-5 lg:pb-7.5 gap-3.5 lg:gap-2.5">
        <InputWrapper className="w-full lg:w-45 rounded-4xl">
          <Search />
          <Input
            type="search"
            placeholder="Search"
            onChange={handleInputChange}
          />
        </InputWrapper>

        <div className="flex items-center gap-2.5">
          <Button mode="icon" shape="circle" variant="outline">
            <Coffee />
          </Button>
          <Button mode="icon" shape="circle" variant="outline">
            <MessageSquareCode />
          </Button>
          <Button mode="icon" shape="circle" variant="outline">
            <Pin />
          </Button>
          <Button variant="mono" shape="circle">
            <VectorSquare />
            Share
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div
        className="grow w-full rounded-lg border border-dashed border-input min-h-96 bg-background text-subtle-stroke relative text-border"
        style={{
          backgroundImage:
            'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)',
        }}
      ></div>
    </div>
  );
}
