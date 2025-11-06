'use client';

import { LoyaltyTier } from './components/loyalty-tier';
import { RecentOrders } from './components/resent-order';
import { Statistics1 } from './components/statistics1';

export function CustomerDetailsOverviews() {
  return (
    <div className="space-y-5">
      <Statistics1 />
      <div className="grid lg:grid-cols-2 gap-5 items-stretch">
        <RecentOrders />
        <LoyaltyTier />
      </div>
    </div>
  );
}
