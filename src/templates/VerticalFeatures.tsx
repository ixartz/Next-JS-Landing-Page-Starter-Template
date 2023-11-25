import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Aumente suas vendas."
    description="Landing pages aumentam as vendas ao converter visitantes em clientes."
  >
    <VerticalFeatureRow
      title="Uma ferramenta poderosa para exibir produtos e serviços"
      description="Páginas Web projetadas especificamente para converter visitantes em clientes. Elas são uma ferramenta eficaz para exibir produtos e serviços."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Faça seu faturamento crescer"
      description="Landing pages bem projetadas podem aumentar a taxa de conversão de uma campanha de marketing. Isso significa que mais visitantes realizam a ação desejada, como comprar um produto ou assinar um serviço."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Lance Seu Negócio Rumo ao Sucesso com Nossos Serviços"
      description="Como desenvolvedor freelancer, estou aqui para ajudar você a lançar seu negócio com confiança. Vamos começar sua jornada para o sucesso hoje."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
