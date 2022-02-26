import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="One booth, multiple setups"
    description="With three distinct tower setups and multiple background options including full enclosure or greenscreen, choose the perfect arrangement for your event."
  >
    <VerticalFeatureRow
      title="Tower Booth with enclosure"
      description="This is typically the best options for weddings and parties with mostly adults. Camera height is optimized for taller individuals and wrap around black curtains provide privacy for special moments inside the booth."
      image="https://imagedelivery.net/DkWRuOXLqG7yv3ocO1mt8w/80606aa4-7e39-482c-d29f-4a9093f3bf00/public"
      imageAlt="Tower photobooth with curtain enclosure"
      useUrl
    />
    <VerticalFeatureRow
      title="Open Booth with backdrop"
      description="Our open booth works great with kids or larger groups where lots of people want to take photos at once. You'll sacrific the privacy, but typically take more photos during a session. Perfect for social groups that want to keep the machine busy. These setups work in a full tower, half tower, and standalone configurations, offering options for children to adults. All open booth configurations can support greenscreens."
      image={
        'https://imagedelivery.net/DkWRuOXLqG7yv3ocO1mt8w/d53432df-cfe1-4aac-e590-40364b6f0b00/public'
      }
      imageAlt="Open booth with backdrop"
      height={330}
      width={300}
      reverse
      useUrl
    />
    <VerticalFeatureRow
      title="Open Booth Lowered"
      description="If you'd like to lower the camera height, the booth can be configured to set the lower box on its side. Alternatively, the base can be omitted entirely, in which case top unit is placed upon a solid surface near power."
      image={
        'https://imagedelivery.net/DkWRuOXLqG7yv3ocO1mt8w/68d34aa2-c78c-40b3-64ce-586f90a7fa00/public'
      }
      imageAlt="Standalone booth"
      useUrl
    />
  </Section>
);

export { VerticalFeatures };
