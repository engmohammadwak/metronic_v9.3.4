import { Search } from "lucide-react";
import { Input, InputWrapper } from "@/components/ui/input";

export function HeaderSearch() {
  const handleInputChange = () => {};

  return (
    <div className="flex items-center shrink-0 p-3.5 lg:p-0 w-full lg:w-[400px]">
      <InputWrapper>
        <Search />
        <Input type="search" placeholder="Search across teams" onChange={handleInputChange} />
      </InputWrapper>
    </div>
  );
}
