import { StockNavbar } from '../components/stock-navbar';
import { OutboundStockTable } from '../tables/outbound-stock';

export default function OutboundStockPage() {
  return (
    <>
      <StockNavbar />
      <div className="container-fluid">
        <OutboundStockTable />
      </div>
    </>
  );
}
