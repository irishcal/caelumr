import React from 'react';
import Layout from '../components/Layout';
const Index: React.FC = () => {
  return <Layout currentPage="home">
      <section className="section prose-section">
        <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">Hi, I'm Caelum Rosenkranz, a London based GTM strategist and operator.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">I partner with growing companies that have global ambitions to create and execute go-to-market strategies that drive long-term, sustainable growth</p>
      </section>
      
      <section className="section mt-16">
        <h2 className="text-xl font-mono mb-6 tracking-tight">Recent Writing</h2>
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