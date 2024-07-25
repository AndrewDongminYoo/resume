import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section className="self-center w-full max-w-[1120px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col px-5 text-black max-md:max-w-full">
              <h1 className="text-5xl font-bold leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                {title}
              </h1>
              <p className="mt-6 text-2xl font-medium leading-8 max-md:max-w-full">
                {subtitle}
              </p>
            </div>
            <div className="flex gap-2.5 justify-between self-start mt-16 text-sm font-semibold leading-4 text-black capitalize max-md:mt-10">
              <a
                href="#"
                className="flex gap-1.5 justify-between px-3 py-2.5 bg-yellow-300 rounded-lg"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b80ea9db677435d87f7a9ff60a1c072c16b580a98d2df1cd4ea985080bba3260?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                  alt=""
                  className="shrink-0 w-4 aspect-square"
                />
                <span>Google Play</span>
              </a>
              <a
                href="#"
                className="flex gap-1.5 justify-center px-3 py-2.5 bg-yellow-300 rounded-lg max-md:px-5"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/99fd4e8dfa0e8c92c3b2857e7a7297bb4ad315b81aa080aec143e77a24ebeba6?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                  alt=""
                  className="shrink-0 w-4 aspect-square"
                />
                <span>app store</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            alt="Hero image"
            className="grow w-full aspect-[0.56] max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
