import React, { FC, useLayoutEffect } from "react";
import { useLayout } from "../hooks/useLayout";
import { BrandBook } from "../components/namespaces/brandbook/BrandBook";
// @ts-ignore
import animatedLogo from "../static/images/animatedLogo.gif";
import blackLogo from "../static/images/logo/logo-dark.svg";
import whiteLogo from "../static/images/logo/logo.svg";
import { Button } from "../components/ui/button/Button";
import { ArrowIcon } from "../components/icons/Icons";
import RainbowBackground from "../static/images/rainbowBackground.svg";

export const BrandBookPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: "calc(100vh - 333px)" }}>
      <BrandBook.Heading>
        <BrandBook.HeadingColumn>
          <BrandBook.HeadingColumnHeading>
            <BrandBook.HeadingColumnHeadingTitle>
              Как использовать<br /> брендинг Danger Zone
            </BrandBook.HeadingColumnHeadingTitle>
            <BrandBook.HeadingColumnHeadingDescription>
              Вы сотрудничаете с Danger Zone, работаете в Danger Zone или создаете производное
              искусство? В этом кратком руководстве показано, что вы можете и чего не можете делать
              с элементами брендинга Danger Zone.
            </BrandBook.HeadingColumnHeadingDescription>
          </BrandBook.HeadingColumnHeading>
          <Button
            styles={{
              height: "48px",
              backgroundColor: "var(--black100)",
              border: "none",
              color: "var(--white100)",
              paddingLeft: "40px",
              paddingRight: "40px",
              display: "flex",
              flexDirection: "row",
              gap: "var(--space-2)"
            }}>
            <ArrowIcon /> Скачать архив брендбука
          </Button>
        </BrandBook.HeadingColumn>
        <BrandBook.HeadingColumn>
          <img
            src={animatedLogo}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "100%",
              userSelect: "none"
            }}
            alt=""
          />
        </BrandBook.HeadingColumn>
      </BrandBook.Heading>
      <BrandBook.Branding>
        <BrandBook.BrandingItem title={'Наш логотип'} description={'Ебаный в рот это казино, ебааааать....'}>
          <BrandBook.BrandingItemImagesItem image={blackLogo} background={'#fff'} widthImage={42.5} heightImage={50} />
          <BrandBook.BrandingItemImagesItem image={whiteLogo} styles={{ borderColor: '#fff' }} background={RainbowBackground} widthImage={42.5} heightImage={50} />
        </BrandBook.BrandingItem>
      </BrandBook.Branding>
    </div>
  );
};
