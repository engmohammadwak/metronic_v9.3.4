'use client';

import { ActivitiesInterview } from './interview';
import { ActivitiesNewArticle } from './new-article';
import { ActivitiesPhotographyWorkshop } from './photography-workshop';
import { ActivitiesProductWebinar } from './product-webinar';
import { ActivitiesProjectStatus } from './project-status';
import { ActivitiesUpcomingContent } from './upcoming-content';

export function ActivityPage() {
  return (
    <div className="space-y-4">
      <ActivitiesNewArticle />
      <ActivitiesInterview />
      <ActivitiesPhotographyWorkshop />
      <ActivitiesUpcomingContent />
      <ActivitiesProductWebinar />
      <ActivitiesProjectStatus />
    </div>
  );
}
