import React from 'react';
import { Check, Star } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Basic Listing',
      price: 'Free',
      period: '',
      description: 'Perfect for testing the waters',
      features: [
        '30-day listing visibility',
        'Basic listing placement',
        'Standard support',
        'Basic analytics dashboard',
        'Email notifications',
        'Search visibility'
      ],
      highlighted: false,
      cta: 'Start for Free'
    },
    {
      name: 'Premium Listing',
      price: 'AED 499',
      period: '/month',
      description: 'Most popular for serious sellers',
      features: [
        'Everything in Basic',
        '90-day listing visibility',
        'Featured placement on homepage',
        'Priority in search results',
        'Dedicated agent support',
        'Advanced analytics & insights',
        'Priority customer support',
        'Social media promotion',
        'Email marketing campaigns',
        'Instant enquiry notifications'
      ],
      highlighted: true,
      cta: 'Get Premium'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Hero Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4" style={{ color: 'white' }}>Simple, Transparent Pricing</h1>
          <p className="text-lg" style={{ color: '#E5E7EB' }}>
            Choose the plan that fits your needs. Only pay commission when you sell.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.highlighted ? 'ring-2 ring-[#2EC4B6] relative' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="px-4 py-1 text-sm" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="mb-2" style={{ color: '#0D1B2A' }}>{plan.name}</h3>
                <p className="text-sm mb-6" style={{ color: '#6B7280' }}>{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl" style={{ color: '#2EC4B6' }}>{plan.price}</span>
                  {plan.period && <span className="text-lg" style={{ color: '#6B7280' }}>{plan.period}</span>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                      <span style={{ color: '#374151' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg transition-all ${
                    plan.highlighted
                      ? 'hover:opacity-90'
                      : 'border-2 hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: plan.highlighted ? '#2EC4B6' : 'transparent',
                    color: plan.highlighted ? 'white' : '#0D1B2A',
                    borderColor: plan.highlighted ? 'transparent' : '#E5E7EB'
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Commission Structure */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="mb-6 text-center" style={{ color: '#0D1B2A' }}>Commission Structure</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#CFFAFE', border: '2px solid #2EC4B6' }}>
              <div className="text-center">
                <p className="text-5xl mb-2" style={{ color: '#0D1B2A' }}>1%</p>
                <p className="text-lg mb-3" style={{ color: '#0D1B2A' }}>Success-Based Commission</p>
                <p style={{ color: '#0E7490' }}>
                  Only paid when your business successfully sells
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <div>
                  <p style={{ color: '#0D1B2A' }}>No upfront fees for basic listings</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Start listing your business immediately without any initial cost</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <div>
                  <p style={{ color: '#0D1B2A' }}>Commission calculated on final sale price</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>You keep 99% of your hard-earned money</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <div>
                  <p style={{ color: '#0D1B2A' }}>Payment due within 7 days of completion</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Simple, transparent payment terms</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <div>
                  <p style={{ color: '#0D1B2A' }}>Full agent support included</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Professional brokerage services throughout the entire process</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="mb-6 text-center" style={{ color: '#0D1B2A' }}>Example Calculation</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: '#E5E7EB' }}>
                  <span style={{ color: '#6B7280' }}>Business Sale Price</span>
                  <span className="text-xl" style={{ color: '#0D1B2A' }}>AED 2,500,000</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: '#E5E7EB' }}>
                  <span style={{ color: '#6B7280' }}>BizTech Commission (1%)</span>
                  <span className="text-xl" style={{ color: '#EF4444' }}>- AED 25,000</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span style={{ color: '#0D1B2A' }}>You Receive</span>
                  <span className="text-2xl" style={{ color: '#10B981' }}>AED 2,475,000</span>
                </div>
              </div>
            </div>

            <p className="text-center text-sm mt-4" style={{ color: '#6B7280' }}>
              * Premium listing fees are separate and paid monthly regardless of sale
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="mb-8 text-center" style={{ color: '#0D1B2A' }}>Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Can I upgrade from Basic to Premium later?</h4>
              <p style={{ color: '#6B7280' }}>
                Yes, you can upgrade to Premium at any time. The remaining days on your basic listing will be credited.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="mb-2" style={{ color: '#0D1B2A' }}>What happens if my business doesn&apos;t sell?</h4>
              <p style={{ color: '#6B7280' }}>
                You don&apos;t pay any commission. Premium listing fees are non-refundable, but you can relist for free or at a discounted rate.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Are there any hidden fees?</h4>
              <p style={{ color: '#6B7280' }}>
                No hidden fees. You only pay the monthly premium listing fee (if applicable) and 1% commission on successful sale.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Can I cancel my Premium listing?</h4>
              <p style={{ color: '#6B7280' }}>
                Yes, you can cancel anytime. Premium fees are charged monthly with no long-term contracts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#0D1B2A] to-[#1E3A5F] rounded-xl p-12 text-center">
          <h2 className="mb-4" style={{ color: 'white' }}>Ready to List Your Business?</h2>
          <p className="mb-8 text-lg" style={{ color: '#E5E7EB' }}>
            Start with a free basic listing or go premium for maximum exposure
          </p>
          <a href="/register">
            <button className="px-8 py-3 rounded-lg" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
              Get Started Now
            </button>
          </a>
        </section>
      </div>
    </div>
  );
};
