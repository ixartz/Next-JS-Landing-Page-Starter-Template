import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Projects"
    description="Just some stuff we've been working on..."
  >
    <VerticalFeatureRow
      title="Transcriptions"
      description="As learners we find it valuable to spend time transcribing the language. It's not possible (or polite 😂) to 'pause' a fluent speaker while they're speaking, so we work on transcribing recordings to learn new vocab and train our ears. "
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
      target="/some-target"
      targetText="View transcriptions"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
