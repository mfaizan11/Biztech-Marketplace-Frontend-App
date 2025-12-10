import React from 'react';
import { UserPlus, Search, MessageSquare, FileCheck, Handshake, TrendingUp } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const sellerSteps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Register as a seller and get admin approval within 24-48 hours'
    },
    {
      icon: FileCheck,
      title: 'List Your Business',
      description: 'Fill in your business details. Private information stays confidential.'
    },
    {
      icon: TrendingUp,
      title: 'Get Featured',
      description: 'Choose premium listing for better visibility and dedicated agent support'
    },
    {
      icon: MessageSquare,
      title: 'Receive Enquiries',
      description: 'Qualified buyers submit enquiries through our agents'
    },
    {
      icon: Handshake,
      title: 'Close the Deal',
      description: 'Work with your agent to negotiate and complete the sale. Pay 1% commission on success.'
    }
  ];

  const buyerSteps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your buyer account and specify your financial means'
    },
    {
      icon: Search,
      title: 'Browse Listings',
      description: 'Explore businesses for sale with full financial transparency'
    },
    {
      icon: MessageSquare,
      title: 'Submit Enquiry',
      description: 'Express interest and an agent will contact you with private details'
    },
    {
      icon: FileCheck,
      title: 'Due Diligence',
      description: 'Review confidential documents and visit the business with agent support'
    },
    {
      icon: Handshake,
      title: 'Complete Purchase',
      description: 'Negotiate terms and finalize the acquisition with legal support'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Hero Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4" style={{ color: 'white' }}>How BizTech Works</h1>
          <p className="text-lg" style={{ color: '#E5E7EB' }}>
            A secure, agent-managed global marketplace for business partnerships and collaboration opportunities
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* For Sellers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
              For Sellers
            </span>
            <h2 className="mt-4 mb-2" style={{ color: '#0D1B2A' }}>Sell Your Business with Confidence</h2>
            <p style={{ color: '#6B7280' }}>
              Our privacy-first approach protects your business identity while connecting you with qualified buyers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {sellerSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#CFFAFE' }}>
                      <Icon className="w-6 h-6" style={{ color: '#2EC4B6' }} />
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm" style={{ backgroundColor: '#0D1B2A', color: 'white' }}>
                      {index + 1}
                    </div>
                    <h3 className="mb-2" style={{ color: '#0D1B2A' }}>{step.title}</h3>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{step.description}</p>
                  </div>
                  {index < sellerSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 z-10" style={{ backgroundColor: '#2EC4B6' }}></div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* For Buyers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>
              For Buyers
            </span>
            <h2 className="mt-4 mb-2" style={{ color: '#0D1B2A' }}>Find Your Next Business Opportunity</h2>
            <p style={{ color: '#6B7280' }}>
              Access verified business listings and get agent support throughout your acquisition journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {buyerSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                      <Icon className="w-6 h-6" style={{ color: '#1E40AF' }} />
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm" style={{ backgroundColor: '#0D1B2A', color: 'white' }}>
                      {index + 1}
                    </div>
                    <h3 className="mb-2" style={{ color: '#0D1B2A' }}>{step.title}</h3>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{step.description}</p>
                  </div>
                  {index < buyerSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 z-10" style={{ backgroundColor: '#1E40AF' }}></div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="mb-2" style={{ color: '#0D1B2A' }}>Why Choose BizTech?</h2>
            <p style={{ color: '#6B7280' }}>
              Built for the global business community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#CFFAFE' }}>
                <FileCheck className="w-8 h-8" style={{ color: '#2EC4B6' }} />
              </div>
              <h3 className="mb-2" style={{ color: '#0D1B2A' }}>Privacy Protected</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Business identities remain confidential until serious buyers are qualified by our agents
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <MessageSquare className="w-8 h-8" style={{ color: '#1E40AF' }} />
              </div>
              <h3 className="mb-2" style={{ color: '#0D1B2A' }}>Agent Managed</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Professional agents facilitate all communications and guide you through the entire process
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FEF3C7' }}>
                <Handshake className="w-8 h-8" style={{ color: '#F59E0B' }} />
              </div>
              <h3 className="mb-2" style={{ color: '#0D1B2A' }}>Success-Based Fees</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Sellers only pay 1% commission when their business successfully sells
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0D1B2A] to-[#1E3A5F] rounded-xl p-12 text-center">
          <h2 className="mb-4" style={{ color: 'white' }}>Ready to Get Started?</h2>
          <p className="mb-8 text-lg" style={{ color: '#E5E7EB' }}>
            Join the global business marketplace today
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/register">
              <button className="px-8 py-3 rounded-lg" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                Register Now
              </button>
            </a>
            <a href="/search">
              <button className="px-8 py-3 rounded-lg border-2" style={{ borderColor: 'white', color: 'white' }}>
                Browse Listings
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};