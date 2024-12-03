export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover md:object-contain lg:object-cover"
        poster="/video-poster.jpg"
      >
        <source
          src="/swush-vid.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-6xl font-bold text-yellow-400 drop-shadow-lg">
        </h1>
      </div>
    </div>
  );
}
