
import React from 'react';
import Layout from '../components/Layout';

const Index: React.FC = () => {
  return (
    <Layout currentPage="home">
      <div className="relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -mx-6 -mt-8 rounded-lg opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '60vh',
            zIndex: -1
          }}
        />
        
        <section className="section prose-section relative z-10">
          <h1 className="text-4xl mb-6 leading-tight font-sans md:text-5xl bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent px-[3px] font-normal">Hi there! I'm Caelum Rosenkranz, a London based GTM strategist and operator.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed md:text-xl font-light">I help growing companies with global ambitions create and execute go-to-market strategies to drive long-term growth.</p>
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
