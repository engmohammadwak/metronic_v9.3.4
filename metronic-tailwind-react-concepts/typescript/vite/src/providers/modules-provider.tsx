import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ScreenLoader } from '@/components/screen-loader';

const LazyCrmModule = lazy(() => import('@/crm'));
const LazyStoreInventoryModule = lazy(() => import('@/store-inventory'));
const LazyMailModule = lazy(() => import('@/mail'));
const LazyCalendarModule = lazy(() => import('@/calendar'));

export function ModulesProvider() {
  const location = useLocation();
  const path = location.pathname;

  // Detect if current path is for CRM or Store
  const isCrm = path.startsWith('/crm');
  const isMail = path.startsWith('/mail');
  const isStoreInventory = path.startsWith('/store-inventory');
  const isCalendar = path.startsWith('/calendar');

  if (isCrm) {
    return (
      <Routes>
        <Route
          path="/crm/*"
          element={
            <Suspense fallback={<ScreenLoader />}>
              <LazyCrmModule />
            </Suspense>
          }
        />
      </Routes>
    );
  } else if (isStoreInventory) {
    return (
      <Routes>
        <Route
          path="/store-inventory/*"
          element={
            <Suspense fallback={<ScreenLoader />}>
              <LazyStoreInventoryModule />
            </Suspense>
          }
        />
      </Routes>
    );
  } else if (isMail) {
    return (
      <Routes>
        <Route path="/mail/*" element={ 
          <Suspense fallback={<ScreenLoader />}> 
            <LazyMailModule /> 
          </Suspense> 
        } />
      </Routes>
    );
  } else if (isCalendar) {
    return (
      <Routes>
        <Route
          path="/calendar/*"
          element={
            <Suspense fallback={<ScreenLoader />}>
              <LazyCalendarModule />
            </Suspense>
          }
        />
      </Routes>
    );
  }
}
