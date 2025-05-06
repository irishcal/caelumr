
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div className="app min-h-screen">
      <div className="container">
        <header className="py-8 md:py-12">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-mono text-lg font-medium tracking-tight">Caelum Rosenkranz</Link>
            <ThemeToggle />
          </div>
          <nav className="mt-8">
            <ul className="flex space-x-6 font-mono text-sm">
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-primary ${currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`hover:text-primary ${currentPage === 'about' ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/writing" 
                  className={`hover:text-primary ${currentPage === 'writing' ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`hover:text-primary ${currentPage === 'contact' ? 'text-primary' : 'text-muted-foreground'}`}
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
