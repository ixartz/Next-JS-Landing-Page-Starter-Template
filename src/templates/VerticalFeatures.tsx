import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Venez découvrir notre food truck"
    description="À manger et à boire !"
  >
    <VerticalFeatureRow
      title="C'est moi !"
      description="Lulu, le chef cuisinier, vous propose des plats de qualité, préparés avec amour et passion."
      image="/assets/images/jpg/lulu.jpg"
      imageAlt="Photo de Lulu le chef cuisinier du food truck lors d'une présentation de vins."
    />
    <VerticalFeatureRow
      title="La calzone du chef"
      description="Je vous mets au défi de faire mieux !"
      image="/assets/images/jpg/calzone.jpg"
      imageAlt="Photo de la calzone du chef, bien bombée et bien dorée."
      reverse
    />
    <VerticalFeatureRow
      title="Elles sont bonnes mes lasagnes, elles sont bonnes !"
      description="Vous avez déjà mangé des lasagnes aussi bonnes que les miennes ?"
      image="/assets/images/jpg/lasagna.jpg"
      imageAlt="Photo d'un plat de lasagnes pour 8 personnes, les lasagnes sont aux coquilles saint jacques et aux asperges."
    />
    <VerticalFeatureRow
      title="Pizza, pizza, pizza !"
      description="Des pizzas à tomber par terre ! Le secret ? La pâte à pizza maison."
      image="/assets/images/jpg/pizza.jpg"
      imageAlt="Photo d'une pizza au feu de bois dont la pâte est faite maison."
    />
    <VerticalFeatureRow
      title="Un rôti bien farci"
      description="Vous n'avez jamais mangé un rôti aussi bon que celui-là !"
      image="/assets/images/jpg/roti.jpg"
      imageAlt="Photo d'un rôti bien farci."
    />
    <VerticalFeatureRow
      title="L'incontournable de l'italie : les pâtes !"
      description="Vous n'aimez pas les pâtes ? Vous n'aimez pas la vie !"
      image="/assets/images/jpg/pasta.jpg"
      imageAlt="Photo d'une assiette de macaronade de pâtes."
    />
  </Section>
);

export { VerticalFeatures };
