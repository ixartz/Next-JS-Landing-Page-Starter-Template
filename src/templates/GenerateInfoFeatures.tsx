import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const GenerateInfoFeatures = () => (
  <Section
    title={
      <>
        <p>
          Elevates Team Communication and <br /> Minimizes Delays
        </p>
      </>
    }
    // description=""
  >
    <VerticalFeatureRow
      title="Real-time Answers by AI"
      description="Access real-time, deal-based AI insights to keep your team in sync, bypassing the wait for updates in formal meetings"
      image="/assets/images/AIAnswers.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Generate Deliverables under Time Crunch"
      description="Generate detailed deliverables within seconds, even during back-to-back meetings"
      image="/assets/images/GenerateDeliverables.png"
      imageAlt="Second feature alt text"
    />
    <VerticalFeatureRow
      title="Stay Ahead of Due Diligence across Deals"
      description="Navigate due diligence emails and checklists with efficiency and style, automating follow-ups and progress tracking"
      image="/assets/images/DDFollowups.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { GenerateInfoFeatures };
