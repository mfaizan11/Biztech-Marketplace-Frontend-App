import React from 'react';
import { Check, Star} from 'lucide-react';

export const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Free Ad',
      price: 'Free',
      period: '',
      description: 'Standard placement with full agent support',
      features: [
        'Standard ad placement',
        'Allocation of a dedicated agent',
        'Professional assistance on sale',
        'Documentation finalization',
        'P&S documentation arrangements',
        '30-day listing visibility',
        'Email notifications'
      ],
      highlighted: false,
      cta: 'Post Free Ad'
    },
    {
      name: 'Paid Service',
      price: 'AED 499',
      period: '/month',
      description: 'The complete professional sale package',
      features: [
        'Preferred placement on the list',
        'Professional Sale Pack for buyers',
        'Business assessment preparation',
        'Financial analysis & projections',
        'Legal attestation services',
        'Final arrangements of transfer',
        'Featured homepage placement',
        'Everything in Free Ad included',
        '90-day listing visibility'
      ],
      highlighted: true,
      cta: 'Get Paid Service'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Hero Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4" style={{ color: 'white' }}>Simple, Transparent Pricing</h1>
          <p className="text-lg" style={{ color: '#E5E7EB' }}>
            Choose between standard placement or our professionally managed sale package.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${
                plan.highlighted ? 'ring-2 ring-[#2EC4B6] relative' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="px-4 py-1 text-sm" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                    <Star className="w-4 h-4 inline mr-1" />
                    Preferred Placement
                  </div>
                </div>
              )}

              <div className="p-8 flex-1">
                <h3 className="mb-2" style={{ color: '#0D1B2A' }}>{plan.name}</h3>
                <p className="text-sm mb-6" style={{ color: '#6B7280' }}>{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#2EC4B6' }}>{plan.price}</span>
                  {plan.period && <span className="text-lg" style={{ color: '#6B7280' }}>{plan.period}</span>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                      <span style={{ color: '#374151' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.highlighted ? 'hover:opacity-90' : 'border-2 hover:bg-gray-50'
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
          <h2 className="mb-6 text-center" style={{ color: '#0D1B2A' }}>Success-Based Commission</h2>
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-lg mb-6 text-center" style={{ backgroundColor: '#CFFAFE', border: '2px solid #2EC4B6' }}>
                <p className="text-5xl font-bold mb-2" style={{ color: '#0D1B2A' }}>1%</p>
                <p className="text-lg font-medium" style={{ color: '#0D1B2A' }}>Brokerage Commission</p>
                <p className="text-sm mt-2" style={{ color: '#0E7490' }}>
                  Applied to the final sale price. Only paid upon successful completion of the deal.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#10B981] mt-1" />
                <p className="text-sm text-gray-600">Standard for both Free and Paid listings</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#10B981] mt-1" />
                <p className="text-sm text-gray-600">Payable within 7 days of deal completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="mb-6 text-center" style={{ color: '#0D1B2A' }}>Example Calculation</h2>
          <div className="max-w-2xl mx-auto p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: '#E5E7EB' }}>
                <span style={{ color: '#6B7280' }}>Business Sale Price</span>
                <span className="text-xl font-bold" style={{ color: '#0D1B2A' }}>AED 2,500,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: '#E5E7EB' }}>
                <span style={{ color: '#6B7280' }}>BizTech Commission (1%)</span>
                <span className="text-xl font-bold text-red-500">- AED 25,000</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold" style={{ color: '#0D1B2A' }}>Seller Net Proceeds</span>
                <span className="text-2xl font-bold" style={{ color: '#10B981' }}>AED 2,475,000</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="mb-8 text-center" style={{ color: '#0D1B2A' }}>Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-bold mb-2">What is the Professional Sale Pack?</h4>
              <p className="text-sm text-gray-600">
                For Paid Service users, our agents prepare a comprehensive dossier for buyers including deep business assessments, financial analysis, and future projections to increase buyer confidence and sale speed.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-bold mb-2">Is the agent allocation really free?</h4>
              <p className="text-sm text-gray-600">
                Yes. Even with a Free Ad, we allocate an agent to assist you with the sale and help finalize documentation. We earn our commission when you successfully sell.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};