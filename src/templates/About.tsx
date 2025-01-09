// import Link from 'next/link';

// import { Button } from '../button/Button';
import { AboutBanner } from '../about/AboutBanner';
import { Section } from '../layout/Section';

const description: string = `
Aaron nitisiyihkâson, asinîwâciy-wâskahikan ohci niya. 👋
`;

const subDescription = `
My name is Aaron, I'm software engineer and language learner of nêhiyawêwin (Plains Cree, Y-dialect). 
I grew up in the Rocky Mountain House area in Treaty 6 territory, my family is Métis of Red River descent (Caplette/Lafournaise) and môniyâw.
I've been learning nêhiyawêwin for about 6 years now, and as a self-study I know how hard it is to acquire an Indigenous second language as an adult. 
For that reason I've tried to put together some resources here in an attempt to aide other language learners in their journey. 
`;

const About = () => (
  <Section>
    <AboutBanner
      title="tânisi?"
      description={description}
      subDescription={subDescription}
      image={<img className="rounded-xl" src="/assets/images/aaron.jpg"></img>}
    />
  </Section>
);

export { About };
