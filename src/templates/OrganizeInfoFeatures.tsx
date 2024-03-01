import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const OrganizeInfoFeatures = () => (
  <Section
    title={
      <>
        <p>
          Focus Where It Counts: On Decisions, <br /> Not Data Gathering
        </p>
      </>
    }
    // description=""
  >
    <VerticalFeatureRow
      title="Synthesize Fragmented Data Into One Knowledge Base"
      description="Organize the latest from emails, files, and meeting notes into an AI-powered, deal knowledge base"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Categorize Information Into Key Documents"
      description="Summarize information snippets into structured data categories within your key documents for immediately actionable insights"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
    />
    <VerticalFeatureRow
      title="Track Data Source Accuracy "
      description="Actively monitors data sources and highlights discrepancies to secure accuracy and reliability of analyses"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { OrganizeInfoFeatures };
