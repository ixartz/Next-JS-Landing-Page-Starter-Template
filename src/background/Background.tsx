import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  videoSrc?: string; // Optional prop for video source
  height?: string; // new height prop
};

const Background = (props: IBackgroundProps) => {
  // Set the height based on the presence of the video
  const heightClass = props.videoSrc ? 'min-h-[75vh]' : 'h-auto';

  return (
    <div className={`${props.color} relative ${heightClass} overflow-hidden`}>
      {props.videoSrc && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="pointer-events-none absolute inset-0 size-full object-cover"
          >
            <source src={props.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay applied only if there is a video */}
          <div className="absolute inset-0 z-10 bg-black opacity-40"></div>
        </>
      )}

      {/* Content will always be displayed, even without a video */}
      <div className="relative z-20">{props.children}</div>
    </div>
  );
};

export { Background };
