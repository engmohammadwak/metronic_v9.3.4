import {
  ChartLine,
  Cog,
  Download,
  FileChartLine,
  Gauge,
  GlobeLock,
  House,
  LockKeyholeOpen,
  Mailbox,
  Network,
  OctagonAlert,
  Settings,
  Settings2,
  ShieldUser,
  SquareActivity,
  Users,
} from 'lucide-react';

export const MENU_SIDEBAR = [
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
        path: '/layout-23',
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
      },
    ],
  },
  {
    title: 'Security',
    children: [
      {
        title: 'Data Encryption',
        path: '#',
        icon: GlobeLock,
      },
      {
        title: 'Rate Limiting',
        path: '#',
        icon: Gauge,
      },
      {
        title: 'Access Control',
        path: '#',
        icon: LockKeyholeOpen,
      },
      {
        title: 'Incident Response',
        path: '#',
        icon: OctagonAlert,
      },
    ],
  },
  {
    title: 'Analytics',
    children: [
      {
        title: 'Fetching Data',
        path: '#',
        icon: Download,
      },
      {
        title: 'Custom Reports',
        path: '#',
        icon: FileChartLine,
      },
      {
        title: 'Real Time Analytics',
        path: '#',
        icon: SquareActivity,
      },
    ],
  },
];

export const MENU_HEADER = [
  {
    title: 'Dashboards',
    path: '/layout-23',
    icon: House,
  },
  {
    title: 'Public Profile',
    path: '#',
    icon: Users,
  },
  {
    title: 'Account Settings',
    path: '#',
    icon: Settings2,
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
