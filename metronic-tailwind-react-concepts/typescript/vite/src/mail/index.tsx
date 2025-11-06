import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { DefaultLayout } from './layout';
import { InboxPage } from './pages/inbox/page';
import { SentPage } from './pages/sent/page';
import { DraftPage } from './pages/draft/page';

export default function MailModule() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Navigate to="inbox" replace />} />
        <Route path="inbox" element={<InboxPage />} />
        <Route path="sent" element={<SentPage />} />
        <Route path="draft" element={<DraftPage />} />
      </Route>
    </Routes>
  );
}
