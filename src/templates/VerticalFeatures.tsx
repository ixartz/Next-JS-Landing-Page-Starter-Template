import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <div id="ProjectWork">
    <Section
      title="Portfolio of Projects"
      description="See my Android, Frontend and Insurtech Projects here"
    >
      <VerticalFeatureRow
        title="Insurtech Project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="React Native App - CRUD APP"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Skillify Personality Quiz"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
  </div>
);

export { VerticalFeatures };
