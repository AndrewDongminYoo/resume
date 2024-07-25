import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center px-10 py-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center pr-20 max-md:pr-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/211aac0f4db6fd0e7605f97b062ac7d1d5e17a0e886e38a62d3034e49ae8adde?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
          alt="Company logo"
          className="aspect-[3.03] w-[92px]"
        />
        <div className="mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col flex-wrap grow content-start self-stretch pb-7 text-sm font-medium leading-4 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                  <p>주식회사 카미랩</p>
                  <p>대표 : 조윤수</p>
                  <p>사업자등록번호 : 539-81-02640</p>
                </div>
                <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap">
                  <p>통신판매업 신고번호 : 2023-서울금천-0819</p>
                  <p>주소 : 서울시 관악구 낙성대로 2, 4층</p>
                </div>
                <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap">
                  <p>전화번호 : 02-861-6628</p>
                  <p>이메일 : business@cami.kr</p>
                </div>
                <p className="mt-4 max-md:max-w-full">
                  Copyright ⓒ 2023 CAMI Labs. All rights reserved.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <nav className="flex gap-5 justify-between text-sm font-medium leading-4 text-neutral-400">
                  <div className="flex flex-col justify-center">
                    <a href="#">공지사항</a>
                    <a href="#" className="mt-4">
                      자주 묻는 질문
                    </a>
                    <a href="#" className="mt-4">
                      이벤트
                    </a>
                  </div>
                  <div className="flex flex-col justify-center">
                    <a href="#">이용약관</a>
                    <a href="#" className="mt-4">
                      개인정보취급방침
                    </a>
                    <a href="#" className="mt-4">
                      기관 제휴 및 구매 문의
                    </a>
                  </div>
                </nav>
                <div className="flex gap-3 self-start">
                  <a href="#" aria-label="Facebook">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dff6ce2ae2b76e005f96872d505200d7c83416e7ed54a023c334ae2f65b1e552?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                      alt=""
                      className="shrink-0 w-9 aspect-square"
                    />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19bb066efb8c43dc78c4419c74bae8582f73e6773992eb20b1d1785f843eb146?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
                      alt=""
                      className="shrink-0 w-9 aspect-square"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
