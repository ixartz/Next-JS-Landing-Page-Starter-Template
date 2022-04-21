import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Diamon Mitra Cipta " description="">
    <VerticalFeatureRow
      title="Kenapa Proteksi 8"
      description="Tabungan hanya memberi bunga/bonus sekitar 0.1 hingga 0.15% per tahun, dibandingkan proteksi 8, yaitu 8%. Proteksi 8 tidak dikenakan pajak."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="8 Tahun Investasi"
      description="Dengan Premi Rp 11.835.000 per tahun di umur 40, anda bisa bonus Tambahan 8%. Total Pengembalian Premi Rp 102.254.400."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Komisi Dasar"
      description="8 Tahun investasi, agent hanya mendapatkan komisi, 15% di Tahun pertama, dan 10% di Tahun Kedua."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
