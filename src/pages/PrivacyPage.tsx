import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12" style={{ color: '#2EC4B6' }} />
          </div>
          <h1 style={{ color: '#0D1B2A' }}>Privacy Policy</h1>
          <p style={{ color: '#6B7280' }}>Last updated: December 8, 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>1. Information We Collect</h2>
            <p className="mb-3" style={{ color: '#374151' }}>
              We collect several types of information to provide and improve our service:
            </p>
            
            <div className="space-y-3">
              <div>
                <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Personal Information</h4>
                <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
                  <li>Name, email address, and phone number</li>
                  <li>Company information (for business users)</li>
                  <li>Financial means information (for buyers)</li>
                  <li>Business ownership details (for sellers)</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Business Listing Information</h4>
                <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
                  <li>Public listing details (industry, region, financial metrics)</li>
                  <li>Private business information (legal name, address, owner details)</li>
                  <li>Supporting documentation and financial records</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Usage Data</h4>
                <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
                  <li>IP address, browser type, and device information</li>
                  <li>Pages visited and time spent on the platform</li>
                  <li>Search queries and listing views</li>
                  <li>Communication records with agents</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>2. How We Use Your Information</h2>
            <p className="mb-2" style={{ color: '#374151' }}>We use the collected information for:</p>
            <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
              <li>Facilitating business transactions between buyers and sellers</li>
              <li>Agent assignment and communication management</li>
              <li>Account verification and fraud prevention</li>
              <li>Platform analytics and service improvement</li>
              <li>Sending important updates and notifications</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>3. Privacy Protection Measures</h2>
            <p className="mb-3" style={{ color: '#374151' }}>
              We implement a privacy-first approach with the following measures:
            </p>
            
            <div className="p-4 rounded-lg mb-3" style={{ backgroundColor: '#CFFAFE', border: '1px solid #2EC4B6' }}>
              <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Business Listing Privacy</h4>
              <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
                <li>Business names, addresses, and owner details are kept confidential</li>
                <li>Private information is only shared with qualified buyers through agents</li>
                <li>All enquiries go through our internal agent system</li>
                <li>Buyers must meet financial requirements before accessing private details</li>
              </ul>
            </div>

            <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
              <li>End-to-end encryption for sensitive communications</li>
              <li>Secure data storage with regular backups</li>
              <li>Access controls limiting who can view private information</li>
              <li>Regular security audits and vulnerability assessments</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>4. Information Sharing</h2>
            <p className="mb-2" style={{ color: '#374151' }}>
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
              <li><strong>Assigned Agents:</strong> To facilitate buyer-seller communications</li>
              <li><strong>Service Providers:</strong> Payment processors, hosting services, and analytics tools</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>5. Data Retention</h2>
            <p style={{ color: '#374151' }}>
              We retain your information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2" style={{ color: '#374151' }}>
              <li>Active account data: Retained while your account is active</li>
              <li>Completed transactions: Retained for 7 years for tax and legal purposes</li>
              <li>Expired listings: Retained for 1 year, then anonymized</li>
              <li>Marketing data: Retained until you opt-out</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>6. Your Rights</h2>
            <p className="mb-2" style={{ color: '#374151' }}>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Objection:</strong> Object to certain types of data processing</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for data processing at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>7. Cookies and Tracking</h2>
            <p style={{ color: '#374151' }}>
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences 
              through your browser settings. Note that disabling cookies may limit some platform functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>8. Third-Party Links</h2>
            <p style={{ color: '#374151' }}>
              Our platform may contain links to third-party websites. We are not responsible for the privacy practices of 
              these external sites and encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>9. Children&apos;s Privacy</h2>
            <p style={{ color: '#374151' }}>
              Our service is not intended for users under 18 years of age. We do not knowingly collect personal information 
              from children. If you become aware of any data we have collected from children, please contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>10. International Data Transfers</h2>
            <p style={{ color: '#374151' }}>
              Your information may be transferred to and maintained on servers located outside of the UAE. We ensure 
              appropriate safeguards are in place to protect your data during such transfers.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>11. Changes to This Policy</h2>
            <p style={{ color: '#374151' }}>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes via email 
              or through a prominent notice on our platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>12. Contact Us</h2>
            <p style={{ color: '#374151' }}>
              For privacy-related questions or to exercise your rights, contact us at:
            </p>
            <div className="mt-2 p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <p style={{ color: '#374151' }}>BizTech</p>
              <p style={{ color: '#374151' }}>Data Protection Officer</p>
              <p style={{ color: '#374151' }}>Email: privacy@biztech.ae</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};