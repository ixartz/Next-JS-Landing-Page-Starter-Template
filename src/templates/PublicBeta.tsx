import Link from 'next/link';

const PublicBeta = () => (
  <div className="w-full bg-blue-50">
    <div className="mx-auto max-w-screen-lg px-3 py-8">
      <div className="text-left">
        <h2
          id="about"
          className="pb-2 text-2xl font-bold"
          style={{ color: 'rgb(48, 88, 128)' }}
        >
          Public Beta
        </h2>
        <div className="text-base text-gray-600">
          This project is currently available for testing. We would love your
          feedback and if you would like to contribute to the direction of this
          project, feel free to{' '}
          <Link className="text-primary-800" href="/#about">
            contact us
          </Link>
          .
        </div>
      </div>
    </div>
  </div>
);

export { PublicBeta };
