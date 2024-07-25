import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="justify-between p-20 mt-32 w-full bg-yellow-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4c02af87cd6783cc162051b5f932afd4c557bfc53de401520d9181ca63b2760?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                alt=""
                className="aspect-square w-[72px]"
              />
              <div className="flex flex-col mt-10 max-md:max-w-full">
                <p className="text-xl font-semibold leading-5 text-neutral-500 max-md:max-w-full">
                  반려동물과 반려인이
                </p>
                <h2 className="mt-2.5 text-5xl font-bold text-black leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                  행복한 생활에만 더 집중할 수 있도록 카미가 도와줄게요!
                </h2>
              </div>
            </div>
            <div className="mt-12 rounded-3xl max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/237f9363a8b3a523db6dfa30628ba5c94b287ea7e89563fd48dfc5cbb54f6320?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                    alt=""
                    className="shrink-0 max-w-full aspect-square w-[131px] max-md:mt-8"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
                  <a
                    href="#"
                    className="grow px-6 py-4 mt-20 text-sm font-semibold leading-4 border border-solid border-neutral-900 rounded-[99px] text-neutral-900 max-md:px-5 max-md:mt-10"
                  >
                    성격분석 바로가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="mt-2.5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a8fb37bbae43d89a1ce58a9a662c57158d68875890f99813acfc6fbcbd25bc?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                  alt="Pet image 1"
                  className="grow w-full aspect-[0.45] max-md:mt-4"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf4e5bc73893ad1d4ea13ab8421c1b222732693c138799e8c7e4a5c63fbefc7?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                  alt="Pet image 2"
                  className="grow w-full aspect-[0.45] max-md:mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
