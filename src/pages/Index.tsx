
import React from 'react';
import Layout from '../components/Layout';

const Index: React.FC = () => {
  return (
    <Layout currentPage="home">
      <section className="section prose-section">
        <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
          Hi, I'm Alex Miller, a GTM strategist and operator.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          I help B2B tech companies build and execute go-to-market strategies 
          that drive sustainable growth.
        </p>
      </section>
      
      <section className="section mt-16">
        <h2 className="text-xl font-mono mb-6 tracking-tight">Recent Writing</h2>
        <ul className="space-y-0">
          <li className="essay-link">
            <a href="/writing" className="link">The New Enterprise Sales Playbook</a>
          </li>
          <li className="essay-link">
            <a href="/writing" className="link">Product-Led Growth: Beyond the Buzzword</a>
          </li>
          <li className="essay-link">
            <a href="/writing" className="link">Why Marketing-Sales Alignment Still Fails in 2025</a>
          </li>
        </ul>
        <div className="mt-6">
          <a href="/writing" className="inline-block text-sm font-mono hover:underline">
            View all essays →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
