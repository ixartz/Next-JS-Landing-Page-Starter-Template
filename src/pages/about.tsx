import { Base } from "../templates/Base";

const About = () => (
  <Base>
    <div className="container">
      <div className="contentTube">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">About</h1>
        <section>
          <p>
            Our mission statement is to exceed expectations by delivering
            exceptional quality and value. We want satified customers from start
            to finish
          </p>
          <p>
            <strong>Mike</strong> first started selling some of his travel
            photography at a "yard sale" at Austin Community College downtown.
            From there he eventually got into wedding photography and
            photobooths, and founding a company called SF City Hall Photo. He
            eventually sold the company to shift into a career in tech, where he
            works as a software engineer. He enjoys multiple types of
            photography, from travel, long-exposure, lifestyle, automobile, and
            portraiture. In his spare time Mike is an avid musician and loves
            health, fitness, and travelling.
          </p>
        </section>
      </div>
    </div>
  </Base>
);

export default About;
