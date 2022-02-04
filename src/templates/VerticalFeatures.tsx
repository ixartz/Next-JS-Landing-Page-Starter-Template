import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="One booth, multiple setups"
    description="With three distinct tower setups and multiple background options including full enclosure or greenscreen, choose the perfect arrangement for your event."
  >
    <VerticalFeatureRow
      title="Tower Booth with enclosure"
      description="This is typically the best options for weddings and parties with mostly adults. Not only is the camera height slightly evelated, the wrap around black curtains provide privacy for special moments inside the booth."
      image="/assets/images/feature.svg"
      imageAlt="Tower photobooth with curtain enclosure"
    />
    <VerticalFeatureRow
      title="Open Booth with backdrop"
      description="Our open booth works great with kids or larger groups where lots of people want to take photos at once. You'll sacrific the privacy, but typically take more photos during a session. Perfect for social groups that want to keep the machine busy. These setups work in a full tower, half tower, and standalone configurations, offering options for children to adults. All open booth configurations can support greenscreens."
      image="/assets/images/feature2.svg"
      imageAlt="Open booth with backdrop"
      reverse
    />
    <VerticalFeatureRow
      title="Standalone booth"
      description="If you'd like to have a photobooth in your house or other tight place, a standalone configuration might be the best option for your booth. In this setup the base of the tower is remove, and the top unit of the booth is placed upon a solid surface such as a table or countertop."
      image="/assets/images/feature3.svg"
      imageAlt="Standalone booth"
    />
  </Section>
);

export { VerticalFeatures };
