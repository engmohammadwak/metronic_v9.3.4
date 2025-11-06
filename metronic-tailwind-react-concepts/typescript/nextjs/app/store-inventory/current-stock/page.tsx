import { StockNavbar } from '../components/stock-navbar';
import { CurrentStockTable } from '../tables/current-stock';

export default function CurrentStockPage() {
  return (
    <>
      <StockNavbar />
      <div className="container-fluid">
        <CurrentStockTable />
      </div>
    </>
  );
}
