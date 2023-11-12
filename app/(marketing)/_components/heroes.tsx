import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl h-full">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]   ">
          <Image
            src="/documents.png"
            alt="document"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            alt="document"
            fill
            className="object-contain dark:block hidden"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block ">
          <Image
            src="/reading.png"
            className="object-contain dark:hidden"
            fill
            alt="reading"
          />
          <Image
            src="/reading-dark.png"
            className="object-contain hidden dark:block"
            fill
            alt="reading"
          />
        </div>
      </div>
    </div>
  );
};
