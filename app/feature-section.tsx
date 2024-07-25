import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  image,
  reverse = false,
}) => {
  return (
    <div
      className={`flex gap-5 ${reverse ? "flex-row-reverse" : ""} max-md:flex-col`}
    >
      <div
        className={`flex flex-col ${reverse ? "w-[65%]" : "w-[70%]"} max-md:ml-0 max-md:w-full`}
      >
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="grow w-full aspect-auto max-md:mt-10 max-md:max-w-full"
        />
      </div>
      <div
        className={`flex flex-col ${reverse ? "w-[35%]" : "w-[30%]"} max-md:ml-0 max-md:w-full`}
      >
        <div className="self-stretch my-auto text-2xl font-bold leading-10 text-black max-md:mt-10">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "성격을 알고나면 아이들의 행동이 쉽게 이해돼요",
      description:
        "말을 하지 못하는 반려동물을 이해하기 위해서는 평소 행동과 주변 환경을 잘 관찰해야 합니다",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c083bbecfe0ab46c8771e80690461601c6f15e556a6edb214c76ac0cb8d6ab4c?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8",
    },
    {
      title: "전문가들과 함께",
      description:
        "카미는 그런 반려동물을 더 잘 이해하기 위해 다양한 연구과정을 통해 전문성 있는 반려동물 성격 유형 검사를 개발했어요",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/29fab7f1c9ea8580a84c4cf44c1cf37498bd6ef95303f8977feb510a27141716?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8",
      reverse: true,
    },
    {
      title: "성격 유형 검사를 통해",
      description:
        "반려동물의 성격에 맞는 놀이법과 교육법 내가 잘 키우고 있는가에 대한 반려인의 태도 분석까지 종합적인 반려동물 양육 솔루션을 받아보세요",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/52b1e226c7be4c62010844b8052441174afa2e9f72c2ab881e1e997d04392665?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8",
    },
  ];

  return (
    <section className="flex flex-col px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-7xl font-bold text-center text-black leading-[91px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
        성격을 알고나면 <br /> 아이들의 행동이 쉽게 이해돼요
      </h2>
      <div className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
