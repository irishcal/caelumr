
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
    title: "When an Entire Country Turns to Fintech: Ireland's Revolut Phenomenon",
    date: "May 6, 2025",
    link: "https://www.thisweekinfintech.com/when-an-entire-country-turns-to-fintech-irelands-revolut-phenomenon-2/"
  }
];

const Writing: React.FC = () => {
  return (
    <Layout currentPage="writing">
      <h1 className="text-3xl md:text-4xl font-medium mb-8">Writing</h1>
      
      <div className="space-y-8">
        <ul className="space-y-0 mt-8">
          {essays.map((essay) => (
            <li key={essay.id} className="essay-link py-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <a 
                  href={essay.link} 
                  className="link text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
