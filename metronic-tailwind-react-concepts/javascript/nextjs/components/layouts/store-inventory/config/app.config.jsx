import {
  Boxes,
  ClipboardList,
  LayoutGrid,
  LayoutList,
  Package,
  Settings2,
  UsersRound,
} from 'lucide-react';

export const MENU_SIDEBAR = [
  {
    title: 'Dashboards',
    icon: LayoutGrid,
    children: [
      { title: 'Default', path: '/store-inventory/dashboard' },
      { title: 'Dark Sidebar', path: '/store-inventory/dark-sidebar' },
    ],
  },
  { heading: 'Store Inventory' },
  {
    title: 'Inventory',
    icon: Boxes,
    children: [
      {
        title: 'All Stock',
        path: '/store-inventory/all-stock',
      },
      {
        title: 'Current Stock',
        path: '/store-inventory/current-stock',
      },
      {
        title: 'Inbound Stock',
        path: '/store-inventory/inbound-stock',
      },
      {
        title: 'Outbound Stock',
        path: '/store-inventory/outbound-stock',
      },
      {
        title: 'Stock Planner',
        path: '/store-inventory/stock-planner',
      },
      {
        title: 'Per Product Stock',
        path: '/store-inventory/per-product-stock',
      },
      {
        title: 'Track Shipping',
        path: '/store-inventory/track-shipping',
      },
      {
        title: 'Create Shipping Label',
        path: '/store-inventory/create-shipping-label',
      },
    ],
  },
  {
    title: 'Products',
    icon: Package,
    children: [
      {
        title: 'Product List',
        path: '/store-inventory/product-list',
      },
      {
        title: 'Product Details',
        path: '/store-inventory/product-details',
      },
      { title: 'Create Product', path: '/store-inventory/create-product' },
      {
        title: 'Manage Variants',
        path: '/store-inventory/manage-variants',
      },
      {
        title: 'Edit Product',
        path: '/store-inventory/edit-product',
      },
    ],
  },
  {
    title: 'Categories',
    icon: LayoutList,
    children: [
      {
        title: 'Category List',
        path: '/store-inventory/category-list',
      },
      {
        title: 'Category Details',
        path: '/store-inventory/category-details',
      },
      {
        title: 'Create Category',
        path: '/store-inventory/create-category',
      },
      {
        title: 'Edit Category',
        path: '/store-inventory/edit-category',
      },
    ],
  },
  {
    title: 'Orders',
    icon: ClipboardList,
    children: [
      {
        title: 'Order List',
        path: '/store-inventory/order-list',
      },
      {
        title: 'Order List - Products',
        path: '/store-inventory/order-list-products',
      },
      {
        title: 'Order Details',
        path: '/store-inventory/order-details',
      },
      {
        title: 'Order Tracking',
        path: '/store-inventory/order-tracking',
      },
    ],
  },
  {
    title: 'Customer',
    icon: UsersRound,
    children: [
      {
        title: 'Customer List',
        path: '/store-inventory/customer-list',
      },
      {
        title: 'Customer Details',
        path: '/store-inventory/customer-list-details',
      },
    ],
  },
  {
    title: 'Settings',
    icon: Settings2,
    children: [
      {
        title: 'Settings(Modal View)',
        path: '/store-inventory/settings-modal',
      },
    ],
  },
];
