import React from "react";

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="flex flex-col justify-between w-full bg-yellow-50 max-md:max-w-full">
      <div className="flex gap-5 justify-between p-10 w-full text-base font-bold leading-6 text-black whitespace-nowrap max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={logo}
          alt="Company logo"
          className="shrink-0 my-auto aspect-[3.03] w-[92px]"
        />
        <nav className="flex gap-5 pl-20 max-md:flex-wrap">
          <button className="px-5 py-2.5 border border-solid border-neutral-900 rounded-[99px] max-md:px-5">
            로그인
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/332a7321e2444389219db833a47fa25d4ab59e6ab2ca00877463a51d6c28e2a7?apiKey=91998ea75a1643428fb73495d3983bc8&&apiKey=91998ea75a1643428fb73495d3983bc8"
            alt=""
            className="shrink-0 my-auto w-10 aspect-square"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
