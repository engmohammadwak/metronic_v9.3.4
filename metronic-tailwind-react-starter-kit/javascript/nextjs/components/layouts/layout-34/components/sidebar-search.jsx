import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input, InputWrapper } from '@/components/ui/input';

export function SidebarSearch() {
  const handleInputChange = () => {};

  return (
    <div className="flex px-5 pt-2.5 shrink-0">
      <InputWrapper>
        <Search />
        <Input
          type="search"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <Badge variant="outline" className="whitespace-nowrap" size="sm">
          ⌘ K
        </Badge>
      </InputWrapper>
    </div>
  );
}
