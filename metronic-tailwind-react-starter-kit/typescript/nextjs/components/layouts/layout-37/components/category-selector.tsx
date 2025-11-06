'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';

type Checked = DropdownMenuCheckboxItemProps['checked'];

type Category = {
  id: string;
  label: string;
  defaultChecked?: boolean;
};

const MAIL_CATEGORIES: Category[] = [
  { id: 'primary', label: 'Primary', defaultChecked: true },
  { id: 'social', label: 'Social' },
  { id: 'promotions', label: 'Promotions' },
  { id: 'updates', label: 'Updates', defaultChecked: true },
  { id: 'forums', label: 'Forums' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'travel', label: 'Travel' },
  { id: 'finance', label: 'Finance' },
  { id: 'newsletters', label: 'Newsletters' },
  { id: 'spam', label: 'Spam' },
];

export function CategorySelector() {
  const [checkedMap, setCheckedMap] = React.useState<Record<string, Checked>>(
    () => MAIL_CATEGORIES.reduce<Record<string, Checked>>((acc, c) => {
      acc[c.id] = Boolean(c.defaultChecked);
      return acc;
    }, {})
  );

  const handleCheckedChange = (id: string) => (value: Checked) => {
    setCheckedMap((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-muted-foreground">
					Categories
					<ChevronDown className="size-3.5" />
				</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {MAIL_CATEGORIES.map((cat) => (
          <DropdownMenuCheckboxItem
            key={cat.id}
            checked={checkedMap[cat.id]}
            onSelect={(event) => event.preventDefault()}
            onCheckedChange={handleCheckedChange(cat.id)}
          >
            {cat.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


