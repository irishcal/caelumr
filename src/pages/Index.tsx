import React from 'react';
import Layout from '../components/Layout';
const Index: React.FC = () => {
  return <Layout currentPage="home">
      <section className="section prose-section">
        <h1 className="text-4xl mb-6 leading-tight font-medium md:text-4xl">Hi, I'm Caelum Rosenkranz, a London based GTM strategist and operator.</h1>
        <p className="text-xl text-muted-foreground leading-relaxed md:text-xl font-medium">I help growing companies with global ambitions create and execute go-to-market strategies to drive long-term growth.</p>
      </section>
      
      <section className="section mt-16">
        <h2 className="text-xl font-mono mb-6 tracking-tight font-extralight">Recent Writing</h2>
        <ul className="space-y-0">
          <li className="essay-link">
            <a href="https://www.thisweekinfintech.com/when-an-entire-country-turns-to-fintech-irelands-revolut-phenomenon-2/" className="link" target="_blank" rel="noopener noreferrer">
              When an Entire Country Turns to Fintech: Ireland's Revolut Phenomenon
            </a>
          </li>
        </ul>
        <div className="mt-6">
          <a href="/writing" className="inline-block text-sm font-mono hover:underline">
            View all essays →
          </a>
        </div>
      </section>
    </Layout>;
};
export default Index;