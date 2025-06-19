
import React from 'react';
import Layout from '../components/Layout';

const Index: React.FC = () => {
  return (
    <Layout currentPage="home">
      <div className="relative">
        {/* Dramatic Background Image */}
        <div 
          className="absolute inset-0 -mx-6 -mt-8 rounded-lg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '70vh',
            zIndex: -1,
            opacity: 0.4
          }}
        />
        
        {/* Gradient overlay for better text readability */}
        <div 
          className="absolute inset-0 -mx-6 -mt-8 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
            height: '70vh',
            zIndex: -1
          }}
        />
        
        <section className="section prose-section relative z-10 pt-8">
          <h1 className="text-4xl mb-6 leading-tight font-sans md:text-5xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent px-[3px] font-normal drop-shadow-lg">Hi there! I'm Caelum Rosenkranz, a London based GTM strategist and operator.</h1>
          <p className="text-xl text-white/90 leading-relaxed md:text-xl font-light drop-shadow-md">I help growing companies with global ambitions create and execute go-to-market strategies to drive long-term growth.</p>
        </section>
        
        <section className="section mt-16 animate-fade-in relative z-10">
          <h2 className="font-mono mb-6 tracking-tight font-extralight text-base">Recent Writing</h2>
          <ul className="space-y-0">
            <li className="essay-link hover:bg-accent/10 p-2 rounded-md transition-all">
              <a href="https://www.thisweekinfintech.com/when-an-entire-country-turns-to-fintech-irelands-revolut-phenomenon-2/" className="link hover:text-accent-foreground" target="_blank" rel="noopener noreferrer">
                When an Entire Country Turns to Fintech: Ireland's Revolut Phenomenon
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
