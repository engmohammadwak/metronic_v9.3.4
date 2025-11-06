import { Link } from 'react-router';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MailListHeader } from './mail-list-header';
import { MailListWrapper } from './mail-list-wrapper';

export function MailListEmpty() {
  return (
    <MailListWrapper>
      <MailListHeader />

      {/* Mail List Content */}
      <div className="p-4 h-full">
        <ScrollArea className="h-[calc(100vh-7rem)] grid content-center">
          <div className="flex flex-col items-center justify-center">
            {/* Empty State Icon */}
            <div className="relative mb-6">
              <div className="size-50 rounded-full border border-dashed flex items-center justify-center bg-accent/40">
                <div className="relative">
                  {/* Front document */}
                  <div className="w-20 h-30 bg-background rounded border border-muted-foreground/20 transform rotate-12 relative z-10">
                    <div className="p-2">
                      <div className="w-6 h-4 bg-muted-foreground/30 rounded mb-2 mx-auto"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-muted-foreground/20 rounded w-full"></div>
                        <div className="h-1 bg-muted-foreground/20 rounded w-3/4"></div>
                        <div className="h-1 bg-muted-foreground/20 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  {/* Back document */}
                  <div className="w-20 h-27 bg-muted-foreground/5 rounded border border-muted-foreground/10 absolute -left-2 -bottom-2 transform -rotate-6"></div>
                </div>
              </div>
            </div>

            {/* Empty State Text */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-foreground mb-1">
                It's empty here
              </h2>
              <p className="text-muted-foreground text-2sm">
                Search for another email or{' '}
                <Link
                  to="#"
                  className="hover:text-primary text-muted-foreground underline"
                >
                  clear filters
                </Link>
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>
    </MailListWrapper>
  );
}
