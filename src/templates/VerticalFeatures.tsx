import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Kimiz biz?"
    description="Bizler Yazılım Çukurova olarak, sadece Çukurova Üniversitesi ve Alparslan Türkeş Bilim ve Teknoloji Üniversitesi içersinde değil, aynı zamanda Adana ve çevresinde de yazılımın izini sürmeye, projeler üretmeye, etkinlikler düzenlemeye ve daha birçok yeniliğe ✨ imza atmaya hazır bir ekibiz."
  >
    {/* <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    /> */}
    <VerticalFeatureRow
      title="Sevgili Yazılım Tutkunu!"
      description="Toplulukta bulunman için üniversite öğrencisi olmana ya da Adana'da bulunmana ya da bilişimle ilgili bölümlerde okumana gerek yok 📚 Hatta yazılımla tamamen ilgilenmen bile gerekmiyor!
      Örneğin Sosyal Medya ve İçerik ekibimizde yer alalarak bizlere harika içerikler üretebilirsin 😊 Ayrıca herhangi bir ekipte bulunman da şart değil. Sadece topluluk üyesi olarak yapacağımız etkinliklerden ve eğitimlerden de faydalanabilirsin.
      Ayrıca sohbet grubu üzerinden bilgi paylaşımında bulabilirsin, soruların hakkında yardım isteyebilirsin! 🚀"
      image="/assets/images/feature3-green.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
