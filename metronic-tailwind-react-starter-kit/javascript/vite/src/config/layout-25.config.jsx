import {
  Briefcase,
  ChartLine,
  Cog,
  Download,
  FileChartLine,
  House,
  Mailbox,
  Megaphone,
  Network,
  Newspaper,
  Settings,
  Settings2,
  ShieldUser,
  SquareActivity,
  Users,
} from 'lucide-react';

export const MENU_SIDEBAR_MAIN = [
  {
    title: 'Configuration',
    children: [
      {
        title: 'API Setup',
        path: '#',
        icon: Settings,
      },
      {
        title: 'Team Settings',
        path: '/layout-25',
        icon: Users,
      },
      {
        title: 'Authentication',
        path: '#',
        icon: Mailbox,
      },
      {
        title: 'Endpoints Configs',
        path: '#',
        icon: Cog,
      },
      {
        title: 'Rate Limiting',
        path: '#',
        icon: ChartLine,
        badge: 'New',
      },
    ],
  },
];

export const MENU_SIDEBAR_RESOURCES = [
  {
    title: 'Resources',
    children: [
      {
        title: 'About Metronic',
        path: '#',
        icon: Download,
      },
      {
        title: 'Advertise',
        path: '#',
        icon: FileChartLine,
      },
      {
        title: 'Advanced',
        path: '#',
        icon: Settings,
        badge: 'Pro',
      },
      {
        title: 'Help',
        path: '#',
        icon: SquareActivity,
      },
      {
        title: 'Blog',
        path: '#',
        icon: Newspaper,
      },
      {
        title: 'Careers',
        path: '#',
        icon: Briefcase,
      },
      {
        title: 'Press',
        path: '#',
        icon: Megaphone,
      },
    ],
  },
];

export const MENU_HEADER = [
  {
    title: 'Dashboards',
    path: '#',
    icon: House,
  },
  {
    title: 'My Account',
    path: '/layout-25',
    icon: Settings2,
  },
  {
    title: 'Public Profile',
    path: '#',
    icon: Users,
  },
  {
    title: 'Network',
    path: '#',
    icon: Network,
  },
  {
    title: 'Authentication',
    path: '#',
    icon: ShieldUser,
  },
];
