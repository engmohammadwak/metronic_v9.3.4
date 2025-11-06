import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function HeaderToolbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center justify-end gap-2.5">
      <div className="flex items-center gap-1">
        <Button variant="ghost" mode="icon">
          <img
            src={toAbsoluteUrl('/media/app/github.svg')}
            className={`shrink-0 size-4 ${theme === 'dark' ? 'invert' : ''}`}
            alt="image"
          />
        </Button>
        <Button variant="ghost" mode="icon">
          <img
            src={toAbsoluteUrl('/media/app/x-dark.svg')}
            className={`shrink-0 size-4 ${theme === 'dark' ? 'invert' : ''}`}
            alt="image"
          />
        </Button>
        <Button variant="dim" mode="icon" onClick={toggleTheme}>
          {theme === 'light' ? (
            <Moon className="size-4" />
          ) : (
            <Sun className="size-4" />
          )}
          <span>{theme === 'light' ? '' : ''}</span>
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      <Button variant="ghost">Log in</Button>
      <Button variant="mono">Buy Now</Button>
    </div>
  );
}
