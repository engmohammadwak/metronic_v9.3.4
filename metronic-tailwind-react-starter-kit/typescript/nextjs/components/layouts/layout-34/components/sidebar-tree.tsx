'use client';

import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuIndicator,
  AccordionMenuItem,
  AccordionMenuSub,
  AccordionMenuSubContent,
  AccordionMenuSubTrigger,
} from '@/components/ui/accordion-menu';
import { Badge } from '@/components/ui/badge';
import { Pattern } from './pattern';

interface MenuItem {
  value: string;
  label: string;
  badge?: string | number;
  badgeVariant?: 'new' | 'count';
  disabled?: boolean;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    value: 'cards',
    label: 'Cards',
    children: [
      { value: 'static-cards', label: 'Static Cards', badge: 'New', badgeVariant: 'new' },
      { value: 'list-cards', label: 'List Cards', badge: 'New', badgeVariant: 'new' },
      { value: 'table-cards', label: 'Table Cards' },
      { value: 'timeline-cards', label: 'Timeline Cards' },
      { value: 'form-cards', label: 'Form Cards' },
    ],
  },
  {
    value: 'charts',
    label: 'Charts',
    children: [
      { value: 'bar-charts', label: 'Bar Charts' },
      { value: 'line-charts', label: 'Line Charts' },
    ],
  },
  {
    value: 'navigation',
    label: 'Navigation',
    children: [
      { value: 'menu-navigation', label: 'Menu Navigation' },
      { value: 'sidebar-navigation', label: 'Sidebar Navigation' },
    ],
  },
  {
    value: 'lists',
    label: 'Lists',
    children: [
      { value: 'ordered-lists', label: 'Ordered Lists' },
      { value: 'unordered-lists', label: 'Unordered Lists' },
    ],
  },
  {
    value: 'forms',
    label: 'Forms',
    children: [
      { value: 'input-forms', label: 'Input Forms' },
      { value: 'survey-forms', label: 'Survey Forms' },
    ],
  },
  {
    value: 'feedback',
    label: 'Feedback',
    children: [
      { value: 'user-feedback', label: 'User Feedback' },
      { value: 'survey-feedback', label: 'Survey Feedback' },
    ],
  },
  {
    value: 'marketing',
    label: 'Marketing',
    children: [
      { value: 'campaign-marketing', label: 'Campaign Marketing' },
      { value: 'email-marketing', label: 'Email Marketing' },
    ],
  },
  {
    value: 'tables',
    label: 'Tables',
    children: [
      { value: 'data-tables', label: 'Data Tables' },
      { value: 'grid-tables', label: 'Grid Tables' },
    ],
  },
  {
    value: 'reports',
    label: 'Reports',
    children: [
      { value: 'summary-reports', label: 'Summary Reports' },
      { value: 'detailed-reports', label: 'Detailed Reports' },
    ],
  },
  {
    value: 'analytics',
    label: 'Analytics',
    children: [
      { value: 'user-analytics', label: 'User Analytics' },
      { value: 'performance-analytics', label: 'Performance Analytics' },
    ],
  },
];

export default function SidebarTree() {
  const renderBadge = (badge?: string | number, badgeVariant?: 'new' | 'count') => {
    if (!badge) return null;

    if (badgeVariant === 'new') {
      return (
        <Badge variant="success" appearance="light" size="sm">
          {badge}
        </Badge>
      );
    }

    return (
      <Badge variant="secondary" appearance="light" size="sm">
        {badge}
      </Badge>
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    // If item has children, render as submenu
    if (item.children && item.children.length > 0) {
      return (
        <AccordionMenuSub key={item.value} value={item.value}>
          <AccordionMenuSubTrigger>
            <span className="text-foreground font-medium">{item.label}</span>
          </AccordionMenuSubTrigger>
          <AccordionMenuSubContent type="single" collapsible parentValue={item.value}>
            <AccordionMenuGroup>
              {item.children.map((child) => (
                <AccordionMenuItem
                  key={child.value}
                  value={child.value}
                  onClick={() => console.log(`${child.label} clicked`)}
                  disabled={child.disabled}
                >
                  <span className={child.disabled ? 'text-muted-foreground' : ''}>
                    {child.label}
                  </span>
                  {child.badge && (
                    <AccordionMenuIndicator>
                      {renderBadge(child.badge, child.badgeVariant)}
                    </AccordionMenuIndicator>
                  )}
                </AccordionMenuItem>
              ))}
            </AccordionMenuGroup>
          </AccordionMenuSubContent>
        </AccordionMenuSub>
      );
    }

    // Render as single menu item
    return (
      <AccordionMenuSub key={item.value} value={item.value}>
        <AccordionMenuSubTrigger>
          <span className="text-foreground font-medium">{item.label}</span>
        </AccordionMenuSubTrigger>
        <AccordionMenuSubContent type="single" collapsible parentValue={item.value}>
          <AccordionMenuGroup>
            {/* Empty submenu - can be populated later */}
          </AccordionMenuGroup>
        </AccordionMenuSubContent>
      </AccordionMenuSub>
    );
  };

  return (
    <div className="flex flex-col py-3">
      <Pattern className="shrink-0 h-3 text-border border-t border-b border-border" />
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-sm font-medium text-muted-foreground">UI Blocks</span>
        {renderBadge(2462, 'count')}
      </div>
      <AccordionMenu
        type="single"
        collapsible
        defaultValue="cards"
        selectedValue="static-cards"
        classNames={{
          root: 'px-3.5 py-1',
          group: 'gap-0',
          label: 'uppercase text-xs font-medium text-muted-foreground/70 pt-2.25 pb-px',
          separator: '',
          subContent: `
            relative ps-3 gap-0 before:content-[''] before:absolute before:start-2 before:top-0 before:bottom-0 before:w-px before:bg-input
          `,
          item: `
            h-[30px] hover:bg-background border-accent text-muted-foreground hover:text-primary data-[selected=true]:text-primary data-[selected=true]:bg-background data-[selected=true]:font-medium
            [&[data-selected=true]]:before:content-[''] [&[data-selected=true]]:before:absolute [&[data-selected=true]]:before:-start-1 [&[data-selected=true]]:before:top-0 
            [&[data-selected=true]]:before:bottom-0 [&[data-selected=true]]:before:w-px [&[data-selected=true]]:before:bg-zinc-400
          `,
          subTrigger: 'h-8 hover:bg-transparent text-muted-foreground hover:text-primary data-[selected=true]:text-primary data-[selected=true]:bg-transparent data-[selected=true]:font-medium',
        }}
      >
        <AccordionMenuGroup>
          {menuItems.map(renderMenuItem)}
        </AccordionMenuGroup>
      </AccordionMenu>
    </div>
  );
}