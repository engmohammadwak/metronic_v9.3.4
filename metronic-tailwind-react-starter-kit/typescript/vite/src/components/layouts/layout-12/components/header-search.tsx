import { Search } from "lucide-react";
import { Input, InputWrapper } from "@/components/ui/input";

export function HeaderSearch() {
  const handleInputChange = () => {};

  return (
    <div className="flex items-center shrink-0 w-full lg:w-80">
      <InputWrapper>
        <Search />
        <Input
          type="search"
          placeholder="Search Metronic"
          onChange={handleInputChange}
        />
      </InputWrapper>
    </div>
  );
}
