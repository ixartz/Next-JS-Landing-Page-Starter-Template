import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

/**
 * Sections:
 *  * tools
 *    - transcribe
 *    - bengodden.com
 *    - stats site
 *    - paradigm driller
 * 
 *  * resources
 *    - PDFs
 *    - videos
 *    - podcasts
 *    - websites
 *      - CLN
 *      - Facebook groups?
 *    - music
 *      - links to youtube music etc
 *    - apps
 *      - syllabics keyboards
 *      - conjugation app?
 *      - other apps
 *    - books
 *      - mâci-nêhiyawêwin
 *      - etc
 *    - events?
 * 
 * 
 *  * books (and where to get them)
 * 
 *  * stories
 *    - collect stories from fluent speakers
 * 
 *  * bloomfield
 *  * elderspeak 
 *  * Online classes
 *  * Places you should go (eg: camps, NLE, kaniyasihk)
 * 
 * Links
 *  - github
 *  - facebook
 *  - YouTube

 */

const VerticalFeatures = () => (
  <Section
    title="Language resources"
    description="Just some stuff we've been working on..."
  >
    <VerticalFeatureRow
      title="Learner library"
      description="A curated list of language and cultural resources including PDFs, videos and audio, categorized by learning level an application. Also a few hard-to-find items, for safe keeping."
      image="/assets/images/library.png"
      imageAlt="Resources for Indigenous language learners"
      comingSoon
    />
    <VerticalFeatureRow
      title="Transcriptions"
      description="As learners we find it valuable to spend time transcribing the language. It's not possible (or polite 😂) to 'pause' a fluent speaker while they're speaking, so we work on transcribing recordings to learn new vocab and train our ears. "
      image="/assets/images/transcription.png"
      imageAlt="Transcriptions in progress"
      reverse
      comingSoon
    />
    <VerticalFeatureRow
      title="Bloomfield online"
      description="Leonard Bloomfield was a linguist who, in the 1920s and 30s recorded three volumes of texts from several reserves in Saskatchewan, two of which were published. Here we offer two of the publications online, Sacred Stories of the Sweetgrass Cree and Plains Cree Texts (in SRO)."
      image="/assets/images/bloomfield.png"
      imageAlt="Bloomfield's texts online"
      target="https://bloomfield.kiyanaw.net"
      targetText="Visit the Bloomfield texts"
    />
    <VerticalFeatureRow
      title="Technology projects"
      description="If you're into technology, and interested in Indigenous language learning, you might find these interesting."
      image="/assets/images/tech.png"
      imageAlt="Indigenous language technology"
      reverse
      comingSoon
    />
  </Section>
);

export { VerticalFeatures };
