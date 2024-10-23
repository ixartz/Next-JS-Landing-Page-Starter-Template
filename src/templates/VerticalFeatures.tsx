import { Background } from '@/background/Background';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-offwhite-100">
    <Section
      id="about-us"
      title="Valet Trash Services"
      description="At Platinum Waste Concierge Collectors, we address challenges with our premier valet trash services. Here's how we can add value to your property:"
    >
      <VerticalFeatureRow
        title="Unmatched Reliability"
        description="Are you worried about waste piling up? Our team works tirelessly 365 days a year, seven days a week. Rain or shine, holidays or weekends, we've got you covered. If we miss a single day of service, that entire month is free."
        image="/assets/images/sandClock.jpg"
        imageAlt="Unmatched Reliability"
      />
      <VerticalFeatureRow
        title="Superior Odor Control"
        description="Do unpleasant smells linger around your property? Say goodbye to unpleasant odors with our state-of-the-art odor control solutions. We keep your surroundings fresh and inviting, enhancing your living or working space."
        image="/assets/images/hotelHallway.jpg"
        imageAlt="Superior Odor Control"
        reverse
      />
      <VerticalFeatureRow
        title="Local Expertise and Care"
        description="Are you looking for personalized service from a local business? As a locally owned business, we take pride in serving our community with personalized, attentive service. We understand your needs and tailor our solutions to fit them perfectly."
        image="/assets/images/PWLogo.png"
        imageAlt="Local Expertise and Care"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
