import { Search } from "lucide-react";
import { Input, InputWrapper } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function HeaderSearch() {
  const handleInputChange = () => {};

  return (
    <div className="flex items-center shrink-0 w-full lg:w-80">
      <InputWrapper className="relative">
        <Search />
        <Input type="search" placeholder="Search section" onChange={handleInputChange} />
        <Badge className="absolute end-3 gap-1" variant="outline" size="sm">⌘ K</Badge>
      </InputWrapper>
    </div>
  );
}
