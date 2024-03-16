import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Core Offerings"
    description="We break-down complex RFP solicitations and generate comprehensive outlines, checklists, and quality content so you can respond to RFPs in hours, not weeks. 
    "
  >
    <VerticalFeatureRow
      title="Determine Eligibility Instantly"
      description="Kinara extracts eligibility criteria so you can quickly determine if this RFP is for you without having to comb through a 98 page PDF."
      image="/assets/images/questionnaire.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Generate comprehensive checklist"
      description="Kinara compiles a bullet-proof checklist in 5 minutes so your team knows exactly what’s required and splits the work accordingly."
      image="/assets/images/table.png"
      imageAlt="Second feature alt text"
      reverse
      zoom
    />
    <VerticalFeatureRow
      title="Apply with confidence"
      description="Kinara compares your final proposal with the original request and ensures all important points are covered so you can submit a strong bid."
      image="/assets/images/review.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
