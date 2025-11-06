import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout';
import { CalendarPage } from './pages/page';

export default function CalendarModule() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Navigate to="page" replace />} />
        <Route path="page" element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}
