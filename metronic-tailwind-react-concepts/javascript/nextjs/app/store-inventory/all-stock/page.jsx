import { AllStockTable } from '../tables/all-stock';
import { Inventory } from './total-asset';

export default function AllStockPage() {
  return (
    <div className="container-fluid">
      <div className="grid gap-5 lg:gap-7.5">
        <Inventory />
        <AllStockTable />
      </div>
    </div>
  );
}
