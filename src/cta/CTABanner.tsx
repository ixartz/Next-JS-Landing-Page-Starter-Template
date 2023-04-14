import { ContactForm } from "../ContactForm";

type ICTABannerProps = {
  title: string;
  subtitle: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex items-center  bg-heliotrope-70 rounded-md mx-auto h-full">
    <div className="px-6 text-center items-center mx-auto">
      <div className="text-[#2A2A2A] pt-20 font-bold text-[24px] leading-[148%]">
        {props.title}
      </div>
      <div className="text-[16px] leading-[140%] font-lato pt-2 md:pt-4 pb-8 md:pb-12">
        {props.subtitle}
      </div>
      <ContactForm />
    </div>
  </div>
);

export { CTABanner };
