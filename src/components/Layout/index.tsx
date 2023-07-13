import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
