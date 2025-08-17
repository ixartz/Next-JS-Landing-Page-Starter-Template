import Link from 'next/link';

const UnderDevelopment = () => (
  <div className="w-full bg-amber-50">
    <div className="mx-auto max-w-screen-lg px-3 py-8">
      <div className="text-left">
        <h2 id="about" className="pb-2 text-2xl font-bold text-amber-800">
          Currently under development
        </h2>
        <div className="text-base text-gray-600">
          This project is currently under active development. We are open to
          commmunity feedback and will be seeking testers in the near future. If
          you would like to contribute to the direction of this project, feel
          free to{' '}
          <Link className="text-primary-800" href="/#about">
            contact me
          </Link>
          .
        </div>
      </div>
    </div>
  </div>
);

export { UnderDevelopment };
