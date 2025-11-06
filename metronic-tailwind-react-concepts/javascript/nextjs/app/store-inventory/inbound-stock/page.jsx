import { StockNavbar } from '../components/stock-navbar';
import { InboundStockTable } from '../tables/inbound-stock';

export default function InboundStockPage() {
  return (
    <>
      <StockNavbar />
      <div className="container-fluid">
        <InboundStockTable />
      </div>
    </>
  );
}
