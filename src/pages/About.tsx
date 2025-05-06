
import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout currentPage="about">
      <h1 className="text-3xl md:text-4xl font-medium mb-8">About</h1>
      
      <div className="prose max-w-none space-y-6">
        <p>
          I'm a GTM strategist and operator with over a decade of experience helping B2B tech companies 
          scale from early-stage to market leadership.
        </p>
        
        <p>
          My approach to go-to-market is built on three core principles:
        </p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Product-market alignment</strong>: GTM strategy must be derived from deep understanding of 
            both product capabilities and market needs.
          </li>
          <li>
            <strong>Customer-centric messaging</strong>: Effective positioning speaks directly to customer pain points 
            rather than product features.
          </li>
          <li>
            <strong>Cross-functional orchestration</strong>: Breaking down silos between product, marketing, 
            sales, and customer success creates a unified customer experience.
          </li>
        </ul>
        
        <p>
          Previously, I led go-to-market strategy at <span className="font-medium">TechCorp</span> where we grew ARR 
          from $5M to $50M in three years and executed a successful Series C fundraise. Before that, I was 
          an early GTM hire at <span className="font-medium">SaaS Ventures</span>, helping them navigate their 
          expansion into enterprise accounts.
        </p>
        
        <p>
          I write regularly about GTM strategy, B2B marketing trends, and the evolving enterprise sales landscape. 
          My work has been featured in publications like <span className="font-medium">TechCrunch</span>, 
          <span className="font-medium"> SaaStr</span>, and <span className="font-medium">First Round Review</span>.
        </p>
        
        <p>
          Based in San Francisco, I'm always interested in connecting with founders and GTM leaders who are 
          tackling interesting challenges in the B2B tech space.
        </p>
      </div>
    </Layout>
  );
};

export default About;
