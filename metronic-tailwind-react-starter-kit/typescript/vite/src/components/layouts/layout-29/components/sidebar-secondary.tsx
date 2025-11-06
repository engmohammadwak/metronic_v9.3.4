import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tree, TreeItem, TreeItemLabel } from '@/components/ui/tree';
import { toAbsoluteUrl } from '@/lib/helpers';
import { hotkeysCoreFeature, syncDataLoaderFeature, selectionFeature } from '@headless-tree/core';
import { useTree } from '@headless-tree/react';
import { ReactNode } from 'react';

interface Item {
  name: string | ReactNode;
  children?: string[];
  type?: 'team-member';
  teamMemberData?: {
    name: string;
    avatar: string;
    role: string;
    roleBadgeVariant: string;
  };
}

const items: Record<string, Item> = {
  root: {
    name: 'Root',
    children: ['main', 'pending-requests', 'extra-logs', 'security-healths', 'api-usage', 'beta-access', 'versions'],
  },
  main: {
    name: (
      <div className="grow flex items-center justify-between gap-2">
        <span className="in-aria-[expanded=true]:font-medium">Main</span>
        <Badge variant="primary" appearance="light">Primary</Badge>
      </div>
    ),
    children: ['auth-service', 'endpoints-configs', 'rate-limiting', 'team-settings', 'access-control', 'api-keys', 'integrations', 'audit-logs'],
  },
  'auth-service': {
    name: (
      <div className="grow flex items-center justify-between gap-2">
        <span>Authentication Service</span>
      </div>
    ),
    children: ['oauth-providers', 'saml-config', 'jwt-settings', 'mfa-setup']
  },
  'endpoints-configs': { 
    name: 'Endpoints Configs',
    children: ['api-gateway', 'load-balancer', 'cors-settings', 'timeout-config']
  },
  'rate-limiting': { 
    name: 'Rate Limiting',
    children: ['per-user-limits', 'per-ip-limits', 'burst-control', 'quota-management']
  },
  'team-settings': { 
    name: 'Team Settings',
    children: ['john-doe', 'jane-doe', 'alex-green', 'maria-lopez']
  },
  'access-control': { 
    name: 'Access Control',
    children: ['rbac-policies', 'permission-matrix', 'resource-access', 'ip-whitelist']
  },
  'api-keys': { 
    name: 'API Keys',
    children: ['active-keys', 'key-rotation', 'usage-analytics', 'key-permissions']
  },
  'integrations': { 
    name: 'Integrations',
    children: ['webhook-config', 'third-party-apis', 'data-sync', 'event-triggers']
  },
  'audit-logs': { 
    name: 'Audit Logs',
    children: ['user-actions', 'system-events', 'security-events', 'compliance-reports']
  },
  'pending-requests': {
    name: (
      <div className="grow flex items-center justify-between gap-2">
        <span className="in-aria-[expanded=true]:font-medium">Pending Requests</span>
        <span className="text-xs text-muted-foreground">12 Avg, 2025</span>
      </div>
    ),
    children: ['auth-requests', 'permission-requests', 'feature-requests', 'support-tickets']
  },
  'extra-logs': {
    name: (
      <div className="grow flex items-center justify-between gap-2">
        <span className="in-aria-[expanded=true]:font-medium">Error Logs</span>
        <Badge variant="warning" appearance="light">Good</Badge>
      </div>
    ),
    children: ['api-errors', 'database-errors', 'auth-errors', 'validation-errors']
  },
  'security-healths': {
    name: (
      <div className="grow flex items-center justify-between gap-2">
        <span className="in-aria-[expanded=true]:font-medium">Security Healths</span>
        <Badge variant="success" appearance="light">Good</Badge>
      </div>
    ),
    children: ['firewall-status', 'ssl-certificates', 'vulnerability-scan', 'access-controls']
  },
  'api-usage': {
    name: (
      <div className="grow flex items-center justify-between gap-2">
        <span className="in-aria-[expanded=true]:font-medium">API Usage</span>
        <span className="text-xs text-muted-foreground">12M Calls/mo</span>
      </div>
    ),
    children: ['endpoints', 'rate-limits', 'quota-usage', 'performance-metrics']
  },
  'beta-access': {
    name: (
      <div className="grow flex items-center justify-between gap-2">
        <span className="in-aria-[expanded=true]:font-medium">Beta Access</span>
        <Badge variant="destructive" appearance="light">Closed</Badge>
      </div>
    ),
    children: ['beta-users', 'feature-flags', 'experimental-features', 'feedback-collection']
  },
  'versions': {
    name: (
      <div className="grow flex items-center justify-between gap-2">
        <span className="in-aria-[expanded=true]:font-medium">Versions</span>
        <span className="text-xs text-muted-foreground">v9.8.10</span>
      </div>
    ),
    children: ['current-version', 'release-notes', 'changelog', 'upgrade-path']
  },
  'john-doe': {
    name: 'John Doe',
    type: 'team-member',
    teamMemberData: {
      name: 'John Doe',
      avatar: toAbsoluteUrl('media/avatars/300-2.png'),
      role: 'Admin',
      roleBadgeVariant: 'secondary'
    }
  },
  'jane-doe': {
    name: 'Jane Doe',
    type: 'team-member',
    teamMemberData: {
      name: 'Jane Doe',
      avatar: toAbsoluteUrl('media/avatars/300-7.png'),
      role: 'Editor',
      roleBadgeVariant: 'info'
    }
  },
  'alex-green': {
    name: 'Alex Green',
    type: 'team-member',
    teamMemberData: {
      name: 'Alex Green',
      avatar: toAbsoluteUrl('media/avatars/300-4.png'),
      role: 'Viewer',
      roleBadgeVariant: 'secondary'
    }
  },
  'maria-lopez': {
    name: 'Maria Lopez',
    type: 'team-member',
    teamMemberData: {
      name: 'Maria Lopez',
      avatar: toAbsoluteUrl('media/avatars/300-5.png'),
      role: 'Viewer',
      roleBadgeVariant: 'secondary'
    }
  },
  // Pending Requests children
  'auth-requests': { name: 'Authentication Requests' },
  'permission-requests': { name: 'Permission Requests' },
  'feature-requests': { name: 'Feature Requests' },
  'support-tickets': { name: 'Support Tickets' },
  // Error Logs children
  'api-errors': { name: 'API Errors' },
  'database-errors': { name: 'Database Errors' },
  'auth-errors': { name: 'Authentication Errors' },
  'validation-errors': { name: 'Validation Errors' },
  // Security Healths children
  'firewall-status': { name: 'Firewall Status' },
  'ssl-certificates': { name: 'SSL Certificates' },
  'vulnerability-scan': { name: 'Vulnerability Scan' },
  'access-controls': { name: 'Access Controls' },
  // API Usage children
  'endpoints': { name: 'Endpoints' },
  'rate-limits': { name: 'Rate Limits' },
  'quota-usage': { name: 'Quota Usage' },
  'performance-metrics': { name: 'Performance Metrics' },
  // Beta Access children
  'beta-users': { name: 'Beta Users' },
  'feature-flags': { name: 'Feature Flags' },
  'experimental-features': { name: 'Experimental Features' },
  'feedback-collection': { name: 'Feedback Collection' },
  // Versions children
  'current-version': { name: 'Current Version' },
  'release-notes': { name: 'Release Notes' },
  'changelog': { name: 'Changelog' },
  'upgrade-path': { name: 'Upgrade Path' },
  // Auth Service children
  'oauth-providers': { name: 'OAuth Providers' },
  'saml-config': { name: 'SAML Configuration' },
  'jwt-settings': { name: 'JWT Settings' },
  'mfa-setup': { name: 'MFA Setup' },
  // Endpoints Configs children
  'api-gateway': { name: 'API Gateway' },
  'load-balancer': { name: 'Load Balancer' },
  'cors-settings': { name: 'CORS Settings' },
  'timeout-config': { name: 'Timeout Configuration' },
  // Rate Limiting children
  'per-user-limits': { name: 'Per User Limits' },
  'per-ip-limits': { name: 'Per IP Limits' },
  'burst-control': { name: 'Burst Control' },
  'quota-management': { name: 'Quota Management' },
  // Access Control children
  'rbac-policies': { name: 'RBAC Policies' },
  'permission-matrix': { name: 'Permission Matrix' },
  'resource-access': { name: 'Resource Access' },
  'ip-whitelist': { name: 'IP Whitelist' },
  // API Keys children
  'active-keys': { name: 'Active Keys' },
  'key-rotation': { name: 'Key Rotation' },
  'usage-analytics': { name: 'Usage Analytics' },
  'key-permissions': { name: 'Key Permissions' },
  // Integrations children
  'webhook-config': { name: 'Webhook Configuration' },
  'third-party-apis': { name: 'Third Party APIs' },
  'data-sync': { name: 'Data Sync' },
  'event-triggers': { name: 'Event Triggers' },
  // Audit Logs children
  'user-actions': { name: 'User Actions' },
  'system-events': { name: 'System Events' },
  'security-events': { name: 'Security Events' },
  'compliance-reports': { name: 'Compliance Reports' }
};

const indent = 20;

export default function SidebarSecondary() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ['main', 'team-settings'],
      selectedItems: ['jane-doe'],
    },
    indent,
    rootItemId: 'root',
    getItemName: (item) => {
      const data = item.getItemData();
      return typeof data.name === 'string' ? data.name : data.name?.toString() || '';
    },
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId]?.children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature, selectionFeature],
  });

  return (
    <div className="self-start p-3.5">
      <Tree indent={indent} tree={tree}>
        {tree.getItems().map((item) => {
          const itemData = item.getItemData();
          
          return (
            itemData.type === 'team-member' && itemData.teamMemberData ? (
              <TreeItem key={item.getId()} item={item} className="ms-10 ps-0!">
                <TreeItemLabel className="h-[38px] grow flex items-center rounded-lg gap-2.5 mx-0! px-2! justify-between border border-transparent hover:border-border hover:bg-muted/50 in-data-[selected=true]:bg-muted/50 in-data-[selected=true]:border-border">
                  {itemData.type === 'team-member' && itemData.teamMemberData ? (
                    <> 
                      <div className="flex items-center gap-2">
                        <Avatar className="size-5.5">
                          <AvatarImage src={itemData.teamMemberData.avatar} />
                          <AvatarFallback>{itemData.teamMemberData.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-normal">{itemData.teamMemberData.name}</span> 
                      </div>
                      <Badge size="sm" variant={itemData.teamMemberData.roleBadgeVariant as 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline'}>
                        {itemData.teamMemberData.role}
                      </Badge>
                    </>
                  ) : (
                    itemData.name
                  )}
                </TreeItemLabel>
              </TreeItem>
            ) : (
              <TreeItem key={item.getId()} item={item}>
                <TreeItemLabel className="h-[38px] rounded-lg px-2!">
                  {itemData.name}
                </TreeItemLabel>
              </TreeItem>
            )
          );
        })}
      </Tree>
    </div>
  );
}