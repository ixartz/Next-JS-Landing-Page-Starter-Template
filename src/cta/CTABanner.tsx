import { ContactForm } from "../ContactForm";

type ICTABannerProps = {
  title: string;
  subtitle: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex items-center  bg-primary-100 rounded-md mx-auto">
    <div className="text-2xl font-semibold text-center items-center mx-auto">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
      <ContactForm />
    </div>
  </div>
);

export { CTABanner };
