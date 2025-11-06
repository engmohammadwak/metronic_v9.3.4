import { useEffect, useState } from 'react';

type UseViewport = [number, number];

export function useViewport(): UseViewport {
  const [dimensions, setDimensions] = useState<UseViewport>([0, 0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setDimensions([window.innerHeight, window.innerWidth]);

    const handleResize = (): void => {
      setDimensions([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Return safe defaults during SSR
  if (!isClient) {
    return [0, 0];
  }

  return dimensions;
}
