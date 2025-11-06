import { Input, InputWrapper } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function ToolbarSearch() {
  const handleInputChange = () => {};

  return (
    <div className="flex shrink-0 w-80">
      <InputWrapper>
        <Input type="search" placeholder="Search inbox" onChange={handleInputChange} />
        <Badge variant="outline" className="whitespace-nowrap" size="sm">⌘ K</Badge>
      </InputWrapper>
    </div>
  );
}
