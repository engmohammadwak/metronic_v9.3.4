'use client';

import { ReactNode } from 'react';
import { StoreClientProvider } from '@/app/(protected)/store-client/components/context';
import { StoreClientWrapper } from '@/app/(protected)/store-client/components/wrapper';

export function ModulesProvider({ children }: { children: ReactNode }) {
  return (
    <StoreClientProvider>
      <StoreClientWrapper>{children}</StoreClientWrapper>
    </StoreClientProvider>
  );
}
