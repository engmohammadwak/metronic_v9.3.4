import { Search } from 'lucide-react';
import { Input, InputWrapper } from '@/components/ui/input';

export function HeaderSearch() {
  const handleInputChange = () => {};

  return (
    <nav className="flex items-center gap-2.5">
      <InputWrapper className="w-full lg:w-55">
        <Search />
        <Input
          type="search"
          placeholder="Search Metronic"
          onChange={handleInputChange}
        />
      </InputWrapper>
    </nav>
  );
}
