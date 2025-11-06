import {
  BriefcaseBusiness,
  Building2,
  CheckSquare,
  CircleEllipsis,
  GalleryVerticalEnd,
  Home,
  Users,
} from 'lucide-react';
import { NavConfig } from './types';

export const MAIN_NAV: NavConfig = [
  {
    title: 'Dashboard',
    icon: Home,
    path: '/crm/dashboard',
    id: 'dashboard',
  },
  {
    icon: CheckSquare,
    title: 'Tasks',
    path: '/crm/tasks',
    pinnable: true,
    pinned: true,
    badge: '3',
    id: 'tasks',
    more: true,
    new: {
      tooltip: 'New Task',
      path: '/crm/tasks',
    },
  },
  {
    icon: GalleryVerticalEnd,
    title: 'Notes',
    path: '/crm/notes',
    pinnable: true,
    pinned: true,
    id: 'notes',
    new: {
      tooltip: 'New Notes',
      path: '/crm/notes',
    },
  },
  {
    icon: Users,
    title: 'Contacts',
    path: '/crm/contacts',
    pinnable: true,
    pinned: true,
    id: 'contacts',
    new: {
      tooltip: 'New Contact',
      path: '/crm/contacts',
    },
  },
  {
    icon: Building2,
    title: 'Companies',
    path: '/crm/companies',
    pinnable: true,
    pinned: true,
    id: 'companies',
    new: {
      tooltip: 'New Company',
      path: '/crm/companies',
    },
  },

  {
    icon: BriefcaseBusiness,
    title: 'Company',
    path: '/crm/company',
    pinnable: true,
    pinned: true,
    id: 'company',
  },

  {
    icon: CircleEllipsis,
    title: 'More',
    id: 'more',
    dropdown: true,
  },
];
