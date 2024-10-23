import { Background } from '@/background/Background';
import { VerticalFeatureText } from '@/feature/VerticalFeatureText';
import { Section } from '@/layout/Section';

const Work = () => (
  <Background color="bg-offwhite-100">
    <Section
      id="our-work"
      title="How Does Our Service Work?"
      description="PWCC doorstep trash service is simple for residents and property managers alike"
    >
      <VerticalFeatureText
        title="Step 1"
        description="Residents will bag and tie their trash and place it into the provided 13-gallon RWS bin. Residents should not place loose items in the bin"
      />
      <VerticalFeatureText
        title="Step 2"
        description="Residents shall place their bins outside of their doors between the hours of 6:00 - 8:00 PM on the scheduled service days"
      />
      <VerticalFeatureText
        title="Step 3"
        description="Waste collection will begin at 8:00 PM. After removing the residents’ trash, the uniformed courier will photograph each doorstep, keeping an organized record of the service. If you ever have any questions or concerns about our service, feel free to contact us directly"
      />
      <VerticalFeatureText
        title="Step 4"
        description="Residents retrieve their bins by 9:00 AM the next morning and place them back inside their residence"
      />
    </Section>
  </Background>
);

export { Work };
