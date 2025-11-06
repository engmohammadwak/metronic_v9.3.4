'use client';

import { AIFeatures } from './components/general-settings/ai-features';
import { Basics } from './components/general-settings/basics';
import { ContactChannels } from './components/general-settings/contact-cannels';
import { Preferences } from './components/general-settings/preferences';

export function GeneralSettings() {
  return (
    <div className="space-y-5">
      <Basics />
      <Preferences />
      <AIFeatures />
      <ContactChannels />
    </div>
  );
}
