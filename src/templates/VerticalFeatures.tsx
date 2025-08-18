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
  <>
    <Section title="Our Projects" id="projects">
      <VerticalFeatureRow
        title="kiyânaw Transcribe"
        description="Transcription is a powerful tool in our language-learning toolkit. kiyânaw Transcribe is free-forever online transcription software with powerful features."
        image="/assets/images/transcribe-video-2.png"
        imageAlt="Online collaborative transcription software"
        reverse
        target="/transcribe"
        targetText="Learn more"
        badge={{ text: 'PUBLIC BETA', color: 'green' }}
      />
      <VerticalFeatureRow
        title="kiyânaw Database"
        description="The kiyânaw Database is a searchable repository of inflected words and phrases gathered from transcriptions and elsewhere online."
        image="/assets/images/kiyanaw-database.png"
        imageAlt="Searchable index of attested language from transcriptions and other sources."
        target="/database"
        targetText="Learn more"
      />
      <VerticalFeatureRow
        title="kiyânaw App"
        description="Currently in development, the kiyânaw App allows any learner to ask language questions and capture phrases & audio for any language or dialect with only their phone, helping build our language bundle for future generations."
        image="/assets/images/kiyanaw-app.png"
        imageAlt="kiyânaw Mobile App"
        reverse
        target="/mobile-app"
        targetText="Learn more"
      />
      <VerticalFeatureRow
        title="Learner library"
        description="A curated list of language and cultural resources including PDFs, videos and audio, categorized by learning level an application. Also a few hard-to-find items, for safe keeping."
        image="/assets/images/library.png"
        imageAlt="Resources for Indigenous language learners"
        target="/library"
        targetText="Visit the Library"
        blank
      />
      <VerticalFeatureRow
        title="Bloomfield online"
        description="In the 1920s a linguist named Leonard Bloomfield visited several reserves in southern Saskatchewan and recorded three volumes of texts, two of which were published. Here we offer two of the publications online, Sacred Stories of the Sweetgrass Cree and Plains Cree Texts (in SRO)."
        image="/assets/images/bloomfield.png"
        imageAlt="Bloomfield's texts online"
        target="https://bloomfield.kiyanaw.net"
        targetText="Visit Bloomfield online"
        blank
        reverse
      />
    </Section>
  </>
);

export { VerticalFeatures };
