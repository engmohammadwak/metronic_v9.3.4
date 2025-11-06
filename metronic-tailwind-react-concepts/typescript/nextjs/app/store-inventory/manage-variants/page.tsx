'use client';

import { useState } from 'react';
import { ManageVariantsSheet } from '../components/manage-variants';
import { ProductListTable } from '../tables/product-list';

export default function ManageVariantsPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(true);

  return (
    <div className="container-fluid">
      <ProductListTable />
      <ManageVariantsSheet open={isSheetOpen} onOpenChange={setIsSheetOpen} />
    </div>
  );
}
