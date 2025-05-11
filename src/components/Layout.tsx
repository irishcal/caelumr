
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="app min-h-screen">
      <div className="container">
        <header className="py-8 md:py-12">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-sans font-bold text-lg tracking-tight hover:text-accent-foreground transition-colors" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Caelum Rosenkranz</Link>
          </div>
          <nav className="mt-8">
            <ul className={`flex ${isMobile ? 'overflow-x-auto pb-2 -mx-4 px-4' : ''} font-mono text-sm`}>
              {!isMobile && (
                <li className="mr-4 md:mr-6 whitespace-nowrap">
                  <Link 
                    to="/" 
                    className={`hover:text-primary relative px-1 ${currentPage === 'home' ? 'text-primary after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary/30 after:bottom-0 after:left-0' : 'text-muted-foreground'}`}
                  >
                    Home
                  </Link>
                </li>
              )}
              <li className="mr-4 md:mr-6 whitespace-nowrap">
                <Link 
                  to="/about" 
                  className={`hover:text-primary relative px-1 ${currentPage === 'about' ? 'text-primary after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary/30 after:bottom-0 after:left-0' : 'text-muted-foreground'}`}
                >
                  About
                </Link>
              </li>
              <li className="mr-4 md:mr-6 whitespace-nowrap">
                <Link 
                  to="/writing" 
                  className={`hover:text-primary relative px-1 ${currentPage === 'writing' ? 'text-primary after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary/30 after:bottom-0 after:left-0' : 'text-muted-foreground'}`}
                >
                  Writing
                </Link>
              </li>
              <li className="mr-4 md:mr-6 whitespace-nowrap">
                <Link 
                  to="/testimonials" 
                  className={`hover:text-primary relative px-1 ${currentPage === 'testimonials' ? 'text-primary after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary/30 after:bottom-0 after:left-0' : 'text-muted-foreground'}`}
                >
                  Testimonials
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link 
                  to="/contact" 
                  className={`hover:text-primary relative px-1 ${currentPage === 'contact' ? 'text-primary after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary/30 after:bottom-0 after:left-0' : 'text-muted-foreground'}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="py-8">
          {children}
        </main>
        <footer className="py-8 mt-16 border-t border-border text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p>© {new Date().getFullYear()} Caelum Rosenkranz</p>
            <p className="mt-2 md:mt-0">Built with simplicity in mind</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
