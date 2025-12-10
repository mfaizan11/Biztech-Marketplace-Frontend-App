import React from 'react';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <FileText className="w-12 h-12" style={{ color: '#2EC4B6' }} />
          </div>
          <h1 style={{ color: '#0D1B2A' }}>Terms of Service</h1>
          <p style={{ color: '#6B7280' }}>Last updated: December 8, 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>1. Acceptance of Terms</h2>
            <p style={{ color: '#374151' }}>
              By accessing and using BizTech (&quot;the Platform&quot;), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>2. User Roles and Responsibilities</h2>
            <div className="space-y-3" style={{ color: '#374151' }}>
              <div>
                <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Sellers</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Must provide accurate and truthful information about their business</li>
                  <li>Agree to pay a 1% brokerage commission upon successful sale completion</li>
                  <li>Must maintain confidentiality of buyer information shared by agents</li>
                  <li>Are responsible for all legal documentation and due diligence materials</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Buyers</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Must specify accurate financial means during registration</li>
                  <li>Should conduct proper due diligence before making purchase decisions</li>
                  <li>Must respect confidentiality of business information shared</li>
                  <li>Agree to work through designated agents for all enquiries</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Agents</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Act as intermediaries between buyers and sellers</li>
                  <li>Must maintain strict confidentiality of all private information</li>
                  <li>Facilitate communications and manage the transaction process</li>
                  <li>Provide professional service to all parties involved</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>3. Commission and Fees</h2>
            <p className="mb-2" style={{ color: '#374151' }}>
              All sellers agree to pay a 1% brokerage commission calculated on the final sale price. This commission is:
            </p>
            <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
              <li>Only charged upon successful completion of a sale</li>
              <li>Non-refundable once the transaction is completed</li>
              <li>Payable within 7 days of transaction completion</li>
              <li>In addition to any premium listing fees that may apply</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>4. Privacy and Confidentiality</h2>
            <p style={{ color: '#374151' }}>
              We implement a privacy-first approach where business names, exact addresses, and owner details are kept confidential until 
              a qualified buyer submits an enquiry through our agents. All users must respect this confidentiality and not attempt to 
              bypass the system to contact sellers or buyers directly.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>5. Listing Guidelines</h2>
            <ul className="list-disc pl-6 space-y-1" style={{ color: '#374151' }}>
              <li>All listings must be legitimate registered businesses</li>
              <li>Financial information must be accurate and verifiable</li>
              <li>Listings expire after the designated period (30 days for basic, 90 days for premium)</li>
              <li>We reserve the right to remove listings that violate our guidelines</li>
              <li>Premium listings receive featured placement and priority support</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>6. Limitation of Liability</h2>
            <p style={{ color: '#374151' }}>
              BizTech operates this platform as a marketplace facilitator. We do not guarantee the 
              accuracy of listing information, business valuations, or the success of any transaction. Users are responsible for 
              conducting their own due diligence and seeking professional advice before entering into any business transaction.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>7. Termination</h2>
            <p style={{ color: '#374151' }}>
              We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>8. Governing Law</h2>
            <p style={{ color: '#374151' }}>
              These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, without regard 
              to its conflict of law provisions. Any disputes arising from these terms will be subject to the exclusive jurisdiction 
              of the courts of Dubai, UAE.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>9. Changes to Terms</h2>
            <p style={{ color: '#374151' }}>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at 
              least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={{ color: '#0D1B2A' }}>10. Contact Us</h2>
            <p style={{ color: '#374151' }}>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-2 p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <p style={{ color: '#374151' }}>BizTech</p>
              <p style={{ color: '#374151' }}>Email: legal@biztech.ae</p>
              <p style={{ color: '#374151' }}>Phone: +971 4 XXX XXXX</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};