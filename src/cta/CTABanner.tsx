import { ContactForm } from "../ContactForm";

type ICTABannerProps = {
  title: string;
  subtitle: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex items-center  bg-heliotrope-70 rounded-md mx-auto h-full md:p-20 py-20">
    <div className="items-center mx-auto md:w-1/2">
      <div className="text-[#2A2A2A] text-center font-bold text-[24px] leading-[148%]">
        {props.title}
      </div>
      <div className="text-[16px] text-center leading-[140%] font-lato pt-2 md:pt-4 pb-8 md:pb-12">
        {props.subtitle}
      </div>
      <ContactForm />
    </div>
  </div>
);

export { CTABanner };
