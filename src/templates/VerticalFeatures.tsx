import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="依存症克服SNS"
    description="やめたい習慣や依存していることをやめるのは本当に難しいことです。同じ目標がある仲間を持つことは依存症克服の過程において大きなサポートになるはずです。依存から解放され、新しい自分への成長を一緒に見つけていきましょう。"
  >
    <VerticalFeatureRow
      title="離脱時間トラッキング"
      description="依存習慣からの離脱時間をトラッキングし、モチベーションを高めることができます。"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="投稿機能"
      description="日常の出来事や感じたこと、依存習慣をやめる上での経験を共有し、他のユーザーからのフィードバックやサポートを得ることができます。"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="コミュニティ選択"
      description="アルコール、たばこ、ドラッグ、ギャンブル、カフェインのコミュニティがあります。この中にやめたい習慣がない場合は自分で習慣名を決め、カスタムコミュニティに参加することができます。"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
