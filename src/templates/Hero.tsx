import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <HeroOneButton
          title={
            <>
              {'QuitMate\n'}
              <span className="text-4xl text-green-700">
                共になら、やめられる
              </span>
            </>
          }
          description="QuitMate(クイットメイト)は、依存症を克服するための匿名SNSアプリです。習慣からの離脱時間をトラッキングし、カテゴリ別のコミュニティで感じたことや経験を共有することができます。"
          button={
            <div className="flex flex-row items-center justify-center space-x-4 md:flex-row md:justify-start">
              <Link href="https://apps.apple.com/jp/app/%E4%BE%9D%E5%AD%98%E7%97%87%E5%85%8B%E6%9C%8Dsns-quitmate/id6462843097">
                <img
                  src="/assets/images/apple-store-badge.png"
                  alt="Download on the App Store"
                  className="h-16 md:h-20"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.quitmate.quitmate">
                <img
                  src="/assets/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="h-16 md:h-20"
                />
              </Link>
            </div>
          }
        />
        <img
          src="/assets/images/screenshot-stories.png"
          alt="Description of Image"
          className="w-29 mt-8 md:mt-0 md:w-1/3"
        />
      </div>
    </Section>
  </Background>
);

export { Hero };
