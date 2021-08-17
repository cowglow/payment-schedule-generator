import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
