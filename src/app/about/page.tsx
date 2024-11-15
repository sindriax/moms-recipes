import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-lg shadow-md">
      {/* Left Image */}
      <div className="flex-shrink-0 w-32 md:w-48">
        <Image
          src="/path/to/left-image.jpg"
          alt="Left side image"
          width={192}
          height={256}
          className="rounded-lg"
        />
      </div>

      {/* Biography Text */}
      <div className="flex-grow text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          Hi! My name is Sandra, and I&apos;ve spent 7 years abroad in countries
          such as Germany, Vietnam, Brazil, and Australia, working as an English
          and Spanish teacher. Currently, I&apos;m based in Barcelona, a place I
          chose for its proximity to my family in Tarragona. I love video games,
          board games, skating, cooking, watching documentaries, and painting.
          I’m highly adaptable to new places and care for them as if they were
          my home.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0 w-32 md:w-48">
        <Image
          src="/path/to/right-image.jpg"
          alt="Right side image"
          width={192}
          height={256}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutMe;
