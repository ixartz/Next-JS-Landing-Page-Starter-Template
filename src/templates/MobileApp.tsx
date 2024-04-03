import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { SupportUs } from './SupportUs';
import { UnderDevelopment } from './UnderDevelopment';

const MobileApp = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <TopNav></TopNav>

    <UnderDevelopment />

    <Section
      title="kiyânaw App"
      description="kiyânaw is a platform for building community-driven language bundles. Any learner with a phone can now collect words and phrases and contribute them to the community-moderated pool. New languages or dialects can added easily."
    >
      <VerticalFeatureRow
        title="Phrase oriented"
        description="The kiyânaw App seeks to fill that 'intermediate' gap by focusing on the collection of phrases with audio. Phrase-based learning, especially self-directed, allows learners to incorporate useful language into their day-to-day, slowly building up towards fluency."
        image="/assets/images/app-phrase-oriented.png"
        imageAlt="Phrase-oriented learning"
      />
      <VerticalFeatureRow
        title="Learner driven"
        description="Learners can request answers from language keepers, contributing to the overall pool of phrases. Learner questions initially go into a question pool, hidden from the general list of responses, and can be elevated into the public pool of responses if they do not exist. Questions that have already been answered will be linked to existing answers to reduce duplication."
        image="/assets/images/app-questions.png"
        imageAlt="Learners can submit questions"
        reverse
      />
      <VerticalFeatureRow
        title="Your custom playlist"
        description="At the heart of the kiyânaw app is your playlist. Add audio from phrases that have been contributed to the app to your playlist, and rotate in new phrases to fit your learning curve. Missing a phrase? Submit a new question for the specific sentence you are looking for."
        image="/assets/images/app-playlist.png"
        imageAlt="Build a personal playlist of phrases"
      />
      <VerticalFeatureRow
        title="Searchable"
        description="Learners can request answers from language keepers, contributing to the overall pool of phrases. Learner questions initially go into a question pool, hidden from the general list of responses, and can be elevated into the public pool of responses if they do not exist. Questions that have already been answered will be linked to existing answers to reduce duplication."
        image="/assets/images/app-searchable.png"
        imageAlt="Search the phrase pool"
        reverse
      />
      <VerticalFeatureRow
        title="Multi-language, multi-dialect"
        description="The kiyânaw App platform is designed to support any language or dialect. Received funding for a new app? Download the list of published phrases from a nearby dialect or language and spend 100% of your funding on recording audio from fluent speakers for your language or dialect."
        image="/assets/images/app-multi-dialect.png"
        imageAlt="Platform designed for any language or dialect"
      />
    </Section>
    <Section title="Roadmap" description="Coming soon...">
      <p></p>
    </Section>

    <SupportUs />

    <Footer />
  </div>
);

export { MobileApp };
