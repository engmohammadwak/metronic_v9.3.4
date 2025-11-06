'use client';

import { BillingDetails } from './components/billing-details';
import { PaymentMethods } from './components/payment-methods';
import { Statistics3 } from './components/statistics3';

export function CustomerDetailsBilling() {
  return (
    <div className="space-y-5">
      <Statistics3 />
      <div className="grid lg:grid-cols-2 gap-5 items-stretch">
        <BillingDetails />
        <PaymentMethods />
      </div>
    </div>
  );
}
