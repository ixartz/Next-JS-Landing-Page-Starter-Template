const VideoAnnouncement = () => (
  <div className="w-full" style={{ backgroundColor: '#305880' }}>
    <div className="flex min-h-[500px] items-center justify-center py-16">
      <div className="text-center">
        {/* Title above video */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            Announcing kiyânaw Transcribe Launch
          </h3>
          <p className="mt-2 text-lg text-blue-100">
            Watch our announcement video
          </p>
        </div>

        <div className="relative">
          {/* Faux video player */}
          <div className="relative h-80 w-[600px] overflow-hidden rounded-lg bg-gray-900 shadow-2xl md:h-[400px] md:w-[800px] lg:h-[450px] lg:w-[900px]">
            {/* Video placeholder background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-90 shadow-lg transition-all hover:scale-110 hover:bg-opacity-100">
                <svg
                  className="ml-1 h-8 w-8 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 rounded bg-black bg-opacity-75 px-2 py-1 text-xs text-white">
              2:34
            </div>
          </div>

          {/* Optional: Coming soon badge */}
          <div className="absolute -top-3 left-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-yellow-900">
            Coming Today
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { VideoAnnouncement };
