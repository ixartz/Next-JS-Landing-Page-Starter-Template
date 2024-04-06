import Image from 'next/image';

const Logo = () => {
  // const fontStyle = props.xl
  //   ? 'font-semibold text-3xl' // Apply larger size for xl prop
  //   : 'font-semibold text-xl'; // Default size when xl is not specified

  return (
    <span className="inline-flex items-center text-gray-900">
      <Image
        src="/assets/images/syncap_logo.png"
        alt="Logo"
        width={130}
        height={50}
      />
    </span>
  );
};

export { Logo };
