'use client';

import { DetailsInvoiceTable } from '../../tables/details-invoice';
import { Statistics4 } from './components/statistics4';

export function CustomerDetailsInvoice() {
  return (
    <div className="space-y-5">
      <Statistics4 />
      <DetailsInvoiceTable />
    </div>
  );
}
