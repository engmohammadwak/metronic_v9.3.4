import { Content } from '@/components/layouts/crm/components/content';
import { Company } from './company';
import { PageHeader } from './page-header';

export default function CompanyPage() {
  return (
    <>
      <PageHeader />
      <Content className="grid py-0">
        <Company />
      </Content>
    </>
  );
}
