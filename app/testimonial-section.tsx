import React from "react";

interface TestimonialProps {
  name: string;
  content: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, content, image }) => {
  return (
    <div className="flex flex-col justify-center py-8 max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col px-8 pt-20 pb-8 w-full min-h-[610px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={`${name}'s testimonial background`}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-60 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-4 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a38927b11646a1ad2099452921990ef2dd1b9bb81354e39f1f280c2b74229afc?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
              alt=""
              className="shrink-0 aspect-square w-[60px]"
            />
            <div className="flex flex-col my-auto">
              <h3 className="text-2xl font-bold leading-6 text-white">
                {name} 후기
              </h3>
              <div className="flex gap-0.5 pr-14 mt-2 max-md:pr-5">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a40dfe2e2cad0807bccda47037f07bf75d33d645290782398bc906a9b40f507b?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                    alt=""
                    className="shrink-0 aspect-square w-[22px]"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 text-lg font-bold leading-7 text-yellow-300 max-md:max-w-full">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "수지 보호자님",
      content:
        "제가 집에서 일을 할 때마다 책상에 올라와 애용애용 거려서 계속 왜 이러는걸까? 했지만 그저 모든 것은 주인님 마음대로이니 .. 해결할 수 없는 문제라고 생각했어요. 그런데 고양이 성격유형 검사를 하고나니 우리 수지의 원래 성격도 알게되었고, 수지 성격에 딱 맞는 양육팁을 보고, 해결방법을 따라 해보니 문제 행동이 잘 해결되서 신기했어요!",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45702220ebb6e0af5e401ae120bdf88f9099424100956a624be3b09faea9e98f?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8",
    },
    {
      name: "대박이 보호자님",
      content:
        "대박이는 남다른 에너지와 성격을 갖고있어 가끔 산책할때, 놀아줄때, 감당하기 힘들어서 두려울때도 많았어요.. 저희집에서 항상 사고뭉치에 철없는 강아지 였는데 성격유형 검사를 한 이후로 대박이의 성격에 맞추어 내가 어떤 행동을 취해야 하는지도 알 수 있고 대박이에게 맞는 놀이와 훈련법을 알고나니 사고뭉치가 아닌 똑똑하고 어떤 훈련이든 열정적으로 참여하고 즐기는 대박이가 되었어요!!",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b0cde56634d1a308e5a3ed249e01ee9bcf1698c5fc7119334ef82966c0ec37c8?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8",
    },
  ];

  return (
    <section className="flex flex-col justify-center py-20 mt-32 w-full bg-slate-50 max-md:mt-10 max-md:max-w-full">
      <h2 className="w-full text-7xl font-bold text-center text-black leading-[91px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
        성격을 알게되면 <br /> 문제행동 없이 행복할 수 있어요!
      </h2>
      <p className="mt-10 w-full text-xl font-medium leading-5 text-center text-neutral-400 max-md:max-w-full">
        *카미의 검사를 이용해주신 보호자님들의 소중한 후기를 일부 가공하였습니다
      </p>
      <div className="flex gap-5 justify-center px-5 mt-16 max-md:flex-wrap max-md:mt-10">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
      <button className="self-center px-6 py-5 mt-16 text-sm font-semibold leading-4 border border-solid border-neutral-200 rounded-[99px] text-neutral-900 max-md:px-5 max-md:mt-10">
        더 많은 후기 보러가기
      </button>
    </section>
  );
};

export default TestimonialSection;
