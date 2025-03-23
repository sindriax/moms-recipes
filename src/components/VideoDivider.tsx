"use client";

export default function ChoppingVideo() {
  return (
    <section className="w-full overflow-hidden my-20 flex justify-center pt-30">
      <div className="relative w-[80%] md:w-[80%] rounded-2xl overflow-hidden">
        <video
          src="/videos/chopping1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[220px] object-cover"
        />
      </div>
    </section>
  );
}
