
import React from 'react';
import Layout from '../components/Layout';
import { Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Layout currentPage="contact">
      <h1 className="text-3xl md:text-4xl font-medium mb-8">Contact</h1>
      
      <div className="space-y-6">
        <p className="text-lg">
          The best way to reach me is via email.
        </p>
        
        <div className="font-mono text-xl mt-6">
          <a href="mailto:alex@example.com" className="link">
            alex@example.com
          </a>
        </div>
        
        <div className="mt-8">
          <p className="text-lg">You can also find me on:</p>
          
          <ul className="space-y-2 mt-4">
            <li>
              <a href="https://linkedin.com/in/caelumrose" className="link font-mono flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/alexmiller" className="link font-mono">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
