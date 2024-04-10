import { StarIcon } from '@/public/icons/icons';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const FourMainFeatures = () => (
  <Section
    title={
      <>
        <h2>
          Industry-leading Platform Delivering <br /> Best-in-Class Advisory
          Experience
        </h2>
      </>
    }
    // description=""
  >
    <VerticalFeatureRow
      title="Streamlined Deal Management for Enhanced Visibility & Efficiency"
      description={
        <>
          <p className="flex items-start">
            <StarIcon className="mr-2 inline-block aspect-square" size={40} />
            <span>
              <strong>Instant Visibility:</strong> &nbsp;Direct insight into
              your deal&apos;s progress, including timelines, buyer
              interactions, and key deliverables.
            </span>
          </p>
          <p className="flex items-start">
            <StarIcon className="mr-2 inline-block aspect-square" size={40} />
            <span>
              <strong>Elevated Experiences:</strong> &nbsp;Smoothen interaction
              among seller, advisor, and prospective buyers, enhancing deal
              outcomes.
            </span>
          </p>
        </>
      }
      image="/assets/images/SynthesizeKnowledge.png"
      imageAlt="Synthesize Fragmented Data Into One Knowledge Base"
    />
    <VerticalFeatureRow
      reverse
      title="AI-Driven Analytics for Strategic Buyer/Investor Matching"
      description={
        <>
          <p className="flex items-start">
            <StarIcon className="mr-2 inline-block aspect-square" size={40} />
            <span>
              <strong>Extensive Buyer & Investor Network:</strong> &nbsp;Access
              the most relevant, vetted institutional buyers and investors.
            </span>
          </p>
          <p className="flex items-start">
            <StarIcon className="mr-2 inline-block aspect-square" size={40} />
            <span>
              <strong>Synergy Identification:</strong> &nbsp;Data analytics
              spotlights the most synergistic partners based on operational
              compatibility and transaction history.
            </span>
          </p>
        </>
      }
      image="/assets/images/CategorizeInformation.png"
      imageAlt="Categorize Information Into Key Documents"
    />
    <VerticalFeatureRow
      title="Unparalleled Advisor Access for Comprehensive Deal Support"
      description={
        <>
          <p className="flex items-start">
            <StarIcon className="mr-2 inline-block aspect-square" size={40} />
            <span>
              <strong>Sector-focused Expertise:</strong> &nbsp;Represented by
              M&A experts specialized in your industry for negotiation and
              strategic advice on all deal fronts.
            </span>
          </p>
          <p className="flex items-start">
            <StarIcon className="mr-2 inline-block aspect-square" size={40} />
            <span>
              <strong>Strategic Advisory:</strong> &nbsp;Tailored support in
              transition planning, company presentation, and financial
              structuring.
            </span>
          </p>
        </>
      }
      image="/assets/images/TrackDataSource.png"
      imageAlt="Track Data Source Accuracy"
    />
    <VerticalFeatureRow
      reverse
      title="Expert-directed Agentic Processes Empowering Seamless Deal Experience"
      description={
        <>
          <p className="flex items-start">
            <StarIcon className="mr-2 inline-block" size={40} />
            <span>
              <strong>Step-by-Step Guidance:</strong> &nbsp;Navigate material
              preparation, meetings, due diligence, and closing with control and
              transparency.
            </span>
          </p>
          <p className="flex items-start">
            <StarIcon className="mr-2 inline-block" size={40} />
            <span>
              <strong>Interactive Engagement:</strong> &nbsp;Communicate with
              advisors at every step of the process from onboarding to deal
              closing.
            </span>
          </p>
        </>
      }
      image="/assets/images/TrackDataSource.png"
      imageAlt="Track Data Source Accuracy"
    />
  </Section>
);

export { FourMainFeatures };
