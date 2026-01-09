import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
const About: React.FC = () => {
  return <Layout currentPage="about">
      <h1 className="text-3xl md:text-4xl font-medium mb-8">About</h1>
      
      <div className="prose max-w-none space-y-6">
        <p>Thanks for stopping by! I originally built this site many years ago to document some of the exciting projects I've been fortunate to work on. From launching startups to scaling global fintechs, it's been a great ride across London, Dublin, Berlin, Vancouver, and New York City.</p>
        
        <p className="font-medium mt-8 mb-4">
          Here's a snapshot of that journey, starting with where I am today:
        </p>
        
        <div className="space-y-8 mt-6">
          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2025</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Joined the team at Google Cloud in London, helping pioneering organisations in DeepTech, Life Sciences, 
                  and Quantum harness the power of Gemini and GCP.
                </li>
                <li>
                  Became the Europe Lead at This Week in Fintech, managing our events, writers and relationships 
                  across the continent.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2024</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Returned to Plaid as a Strategic Account Executive, managing relationships with some of the company's 
                  largest and most complex customers.
                </li>
                <li>
                  Appointed EMEA Partnerships Lead at This Week in Fintech, the global fintech newsletter and platform 
                  with over 150,000 subscribers.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2023</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Joined GoCardless as an Account Executive, managing key strategic accounts at one of London's 
                  leading fintech firms.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2022</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Promoted to Account Executive at Plaid, representing the company around the world in Amsterdam, Helsinki, San Francisco, New York, Munich, and Lisbon.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2021</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Recruited by Plaid to help drive its European expansion.
                </li>
                <li>Became Plaid's first New Business hire in Europe, and set a company-wide record for new customer acquisition.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2020</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Graduated from the University of Edinburgh with Merit.</li>
                <li>
                  Moved to London and joined Showpad as a Business Development Representative.
                </li>
                <li>
                  Promoted within two months to manage accounts in the Financial Services sector.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2019</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Won the President's Award at UCD - the university's highest student honour.</li>
                <li>
                  Received an £8,000 High Potential Applicant Scholarship to the University of Edinburgh.
                </li>
                <li>
                  Interned with Korn Ferry, the global organisational consulting firm.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2018</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Worked for a summer in Marketing at Elsewhere, one of New York City's most forward thinking venues. </li>
                <li>
                  Became N26's first Market Partner in Ireland, supporting the bank's market entry and early growth.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2017</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Elected the 105th President & Auditor of the UCD Commerce & Economics Society, Ireland's largest 
                  student-run business organisation.
                </li>
                <li>
                  Relocated to Vancouver to join Yelp's new Canadian team.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2016</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Scaled a small university society, The Food Society, to over 3,000 members, making it one of Ireland's largest within six months.</li>
                <li>
                  Pitched my second startup, Taskee, at Google HQ to a live audience of investors and journalists.
                </li>
                <li>
                  Won European Startup Weekend at Google Dublin.
                </li>
                <li>Helped launch Tilt in Ireland, later acquired by Airbnb.</li>
                <li>
                  Joined Yelp in Dublin as a Brand Manager, leading student-focused marketing campaigns.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-medium mb-4">2015</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Entered Startup Weekend Dublin with my first startup, Entify.</li>
                <li>
                  Became Lead Designer for the Vipsy app, which went on to surpass 100,000 downloads across iOS and Android.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>;
};
export default About;
