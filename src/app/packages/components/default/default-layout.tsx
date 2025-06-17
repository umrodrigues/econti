import { BackToTopButton } from "../back-to-top/back-to-top-button";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { footerMock } from "../footer/__mocks__/footer-mock";
import { GoToWhatsapp } from "../go-to-whatsapp/go-to-whatsapp";
import { CookiesModal } from "../cookies-modal/cookies-modal";
import Newsletter from "../newsletter/newsletter";
import ExitPopUp from "../exit-pop-up/exit-pop-up";

interface DefaultLayoutProps extends React.PropsWithChildren {}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <ExitPopUp />
      <Newsletter />
      <Footer {...footerMock} />
      <BackToTopButton />
      <GoToWhatsapp />
      <CookiesModal />
    </>
  );
};
