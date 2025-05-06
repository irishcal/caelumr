
import React from 'react';
import Layout from '../components/Layout';

interface Essay {
  id: number;
  title: string;
  date: string;
  link: string;
}

const essays: Essay[] = [
  {
    id: 1,
    title: "The New Enterprise Sales Playbook",
    date: "May 1, 2025",
    link: "#"
  },
  {
    id: 2,
    title: "Product-Led Growth: Beyond the Buzzword",
    date: "April 15, 2025",
    link: "#"
  },
  {
    id: 3,
    title: "Why Marketing-Sales Alignment Still Fails in 2025",
    date: "March 22, 2025",
    link: "#"
  },
  {
    id: 4,
    title: "Building a Metrics-Driven GTM Organization",
    date: "February 10, 2025",
    link: "#"
  },
  {
    id: 5,
    title: "The Evolving Role of the CRO",
    date: "January 28, 2025",
    link: "#"
  },
  {
    id: 6,
    title: "Channel Strategy for Complex B2B Products",
    date: "December 12, 2024",
    link: "#"
  },
  {
    id: 7,
    title: "Customer Acquisition Economics in a Down Market",
    date: "November 5, 2024",
    link: "#"
  },
  {
    id: 8,
    title: "Account-Based Marketing: A Tactical Guide",
    date: "October 18, 2024",
    link: "#"
  }
];

const Writing: React.FC = () => {
  return (
    <Layout currentPage="writing">
      <h1 className="text-3xl md:text-4xl font-medium mb-8">Writing</h1>
      
      <div className="space-y-8">
        <p className="text-lg">
          Essays on go-to-market strategy, B2B sales, and growth.
        </p>
        
        <ul className="space-y-0 mt-8">
          {essays.map((essay) => (
            <li key={essay.id} className="essay-link py-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <a href={essay.link} className="link text-lg">
                  {essay.title}
                </a>
                <span className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">
                  {essay.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Writing;
