import React from "react";

interface ExpertProps {
  name: string;
  title: string;
  description: string;
  image?: string;
}

const Expert: React.FC<ExpertProps> = ({ name, title, description, image }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      {image ? (
        <div className="flex flex-col grow justify-center text-stone-900 max-md:mt-5">
          <div className="flex overflow-hidden relative flex-col px-6 pt-20 pb-6 w-full aspect-[0.65] max-md:px-5">
            <img
              loading="lazy"
              src={image}
              alt={`${name} - ${title}`}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col p-8 mt-64 rounded-xl bg-white bg-opacity-90 max-md:px-5 max-md:mt-10">
              <div className="flex flex-col leading-[100%]">
                <p className="text-sm font-medium">{title}</p>
                <h3 className="mt-2 text-2xl font-bold">{name}</h3>
              </div>
              <p className="mt-5 text-base font-semibold leading-6">
                {description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col grow p-8 w-full rounded-3xl border border-solid bg-neutral-50 border-neutral-300 text-stone-900 max-md:px-5 max-md:mt-5">
          <div className="flex flex-col leading-[100%]">
            <p className="text-sm font-medium">{title}</p>
            <h3 className="mt-2 text-2xl font-bold">{name}</h3>
          </div>
          <p className="mt-5 text-base font-semibold leading-6">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

const ExpertSection: React.FC = () => {
  const experts = [
    {
      name: "설채현 수의사",
      title: "강아지 행동 전문가",
      description:
        "현) Knollo 병원장\n'EBS' 세상에 나쁜 개는 없다 출연\n검사 개발 자문",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/10d245caa05cb5c766dc70166e28b8278950c8d9c7394ffe57f0e79200bff808?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8",
    },
    {
      name: "서지형 트레이너",
      title: "클리커 트레이너",
      description:
        "KPA-CTP / CCPDT-KA\n제이클리커아카데미 대표\n검사 개발 자문",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4680902667064b202bd8dfe062befb7091b4f2093dbd6ab2d4f3b1ecbdc870b7?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8",
    },
    {
      name: "신윤주 박사",
      title: "동물행동학 전문가",
      description:
        "서울대학교 수의학박사\n광주동물메디컬 센터 수의사\n검사 개발 자문",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/683c01bac6d82986da96b9ed7be5eecd20811d11900ccb20d67ef9dee6514f42?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8",
    },
    {
      name: "김명철 수의사",
      title: "고양이 행동 전문가",
      description:
        "고양이 행동 전문가, n동물의료센터 원장\nEBS '고양이를 부탁해' 출연\n검사 개발 자문",
    },
    {
      name: "강종일 박사",
      title: "임상수의학 박사",
      description:
        "한국수의학교육학회 자문위원 충현동물종합병원 원장\n검사 개발 자문",
    },
    {
      name: "박성희 박사",
      title: "상담심리학 박사",
      description:
        "한국상담학회 1급 상담사 스트레스 관리, 심리상담 출강\n검사 개발 자문",
    },
  ];

  return (
    <section className="flex flex-col px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-center max-w-full text-center w-[715px]">
        <p className="text-base font-semibold leading-4 text-neutral-500 max-md:max-w-full">
          재미로 보는게 아닌
        </p>
        <h2 className="mt-5 text-7xl font-bold text-black leading-[86px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
          진지한 태도로 반려동물 <br /> 전문가들과 함께 만들었어요
        </h2>
      </div>
      <div className="flex flex-col flex-wrap content-start mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 flex-wrap max-md:flex-col">
            {experts.map((expert, index) => (
              <Expert key={index} {...expert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
