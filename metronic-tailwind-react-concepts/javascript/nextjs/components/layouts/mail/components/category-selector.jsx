'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const MAIL_CATEGORIES = [
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
  const [checkedMap, setCheckedMap] = React.useState(() =>
    MAIL_CATEGORIES.reduce((acc, c) => {
      acc[c.id] = Boolean(c.defaultChecked);
      return acc;
    }, {}),
  );

  const handleCheckedChange = (id) => (value) => {
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
