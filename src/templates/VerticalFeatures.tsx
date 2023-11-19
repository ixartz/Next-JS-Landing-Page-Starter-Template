import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Aumente suas vendas."
    description="Landing pages aumentam as vendas ao converter visitantes em clientes.."
  >
    <VerticalFeatureRow
      title="Uma ferramenta poderosa para exibir produtos e serviços"
      description="Páginas Web projetadas especificamente para converter visitantes em clientes. Elas são uma ferramenta eficaz para exibir produtos e serviços."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Aumente seu faturamento"
      description="Landing pages bem projetadas podem aumentar a taxa de conversão de uma campanha de marketing. Isso significa que mais visitantes estarão tomando a ação desejada, como comprar um produto ou assinar um serviço."
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
