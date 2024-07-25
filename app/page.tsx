import React from "react";
import Layout from "./layout";
import Hero from "./hero";
import FeatureSection from "./feature-section";
import TestimonialSection from "./testimonial-section";
import ExpertSection from "./expert-section";
import CallToAction from "./call-to-action";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero
        title="성격 유형 검사로 종합 양육 솔루션 제공"
        subtitle="성격을 알면 더 오래, 건강하게 잘 키울 수 있어요"
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/c7ab72d74137e829c4fe68054b1dd7a1c688a22a5475d07d04c8809e28635f7d?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
      />
      <FeatureSection />
      <TestimonialSection />
      <ExpertSection />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;
