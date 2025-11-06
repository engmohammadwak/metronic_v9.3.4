'use client';

import { DetailsOrdersTable } from '../../tables/details-orders';
import { Statistics2 } from './components/statistics2';

export function CustomerDetailsOrders() {
  return (
    <div className="space-y-5">
      <Statistics2 />
      <DetailsOrdersTable />
    </div>
  );
}
