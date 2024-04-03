import Link from 'next/link';

import { Button } from '@/button/Button';
import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { SupportUs } from './SupportUs';
import { UnderDevelopment } from './UnderDevelopment';

const Transcribe = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <TopNav></TopNav>

    <UnderDevelopment />

    <Section
      title="kiyânaw Transcribe"
      description="Free online collaborative transcription software."
    >
      <div className="text-center">
        <Link target="_blank" href="https://transcribe.kiyanaw.net/">
          <Button>{`Try it out now →`}</Button>
        </Link>
      </div>

      <VerticalFeatureRow
        title="Online collaboration"
        description="The currently tooling for transcribing is limited in its ability to support multiple learners working in tandem. kiyânaw Transcribe allows for multiple users working in the same transcription simultaneously."
        image="/assets/images/transcribe-list.png"
        imageAlt="Collaborative transcribing"
        target="https://transcribe.kiyanaw.net/transcribe-edit/1ead8e60"
        targetText="View transcription"
        blank
      />
      <VerticalFeatureRow
        title="Audio & Video support"
        description="Currently MP3 and MP4 support are available for transcription media formats, with additional formats planned soon."
        image="/assets/images/transcribe-video.png"
        imageAlt="Support for various media formats"
        target="https://transcribe.kiyanaw.net/transcribe-edit/1ead8e60"
        targetText="View transcription"
        reverse
        blank
      />
      <VerticalFeatureRow
        title="Deep linking"
        description="Clicking on a region will result in the URL updating to that region's location, allowing users to share the URL with others to gain support on problem areas easily."
        image="/assets/images/transcribe-deep-linking.png"
        imageAlt="Deep link to specific regions"
        target="https://transcribe.kiyanaw.net/transcribe-edit/1ead8e60/wavesurfer_0pm4l1hk4pg"
        targetText="Transcription deep link"
        blank
      />
      <VerticalFeatureRow
        title="Issue flagging"
        description="As users encounter problem words or areas within a transcription, those words can be flagged as problematic for follow-up later on, and will be visually marked for easy identification."
        image="/assets/images/transcribe-issues.png"
        imageAlt="High frequency words"
        target="https://transcribe.kiyanaw.net/transcribe-edit/73150c90"
        targetText="View transcription"
        reverse
        blank
      />
      <VerticalFeatureRow
        title="Spell checking integration"
        description="When analysis (spell-checking) is available for a language, advanced indexing becomes possible, allowing us to keep a list of high-frequency words. Studying these lists can help to speed the advance our comprehension and fluency."
        image="/assets/images/transcribe-video.png"
        imageAlt="High frequency words"
        target="https://transcribe.kiyanaw.net/transcribe-edit/1ead8e60"
        targetText="View transcription"
        blank
      />
      {/* <VerticalFeatureRow
        title="kiyânaw Theatre"
        description="When analysis (spell-checking) is available for a language, advanced indexing becomes possible, allowing us to keep a list of high-frequency words. Studying these lists can help to speed the advance our comprehension and fluency."
        image="/assets/images/database-high-frequency.png"
        imageAlt="High frequency words"
        comingSoon
        reverse
      /> */}
    </Section>

    <SupportUs />

    <Footer />
  </div>
);

export { Transcribe };
