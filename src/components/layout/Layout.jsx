import  { Header }  from './Header';
import  { Footer } from './Footer';

export default function Layout({ children, onNavigate }) {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={onNavigate} />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }