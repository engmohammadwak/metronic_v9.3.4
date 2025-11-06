'use client';

import Link from 'next/link';
import { UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TimelineItem } from './timeline-item';

const ActivitiesNewArticle = () => {
  return (
    <TimelineItem icon={UsersRound} className="text-primary" line={true}>
      <div className="flex flex-col">
        <div className="text-sm text-foreground font-normal">
          Posted a new article{' '}
          <Button mode="link" asChild>
            <Link href="/public-profile/profiles/blogger">
              Top 10 Tech Trends
            </Link>
          </Button>
        </div>
        <span className="text-xs text-muted-foreground/80 font-normal">
          Today, 9:00 AM
        </span>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesNewArticle };
