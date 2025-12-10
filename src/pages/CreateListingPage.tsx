import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, DollarSign, FileText, Lock, Info, CheckCircle } from 'lucide-react';

export const CreateListingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Public Data
    title: '',
    industry: '',
    region: '',
    price: '',
    netProfit: '',
    turnover: '',
    description: '',
    
    // Private Data
    legalBusinessName: '',
    fullAddress: '',
    ownerName: '',
    
    // Listing Details
    tier: 'basic' as 'basic' | 'premium',
    agreedToCommission: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in production, this would call an API
    console.log('Listing data:', formData);
    navigate('/dashboard/seller');
  };

  const industries = [
    'Food & Beverage',
    'Technology',
    'Retail',
    'Healthcare',
    'Education',
    'Real Estate',
    'Manufacturing',
    'Services',
    'Other'
  ];

  const regions = [
    'North America',
    'Europe',
    'Asia',
    'Middle East',
    'Africa',
    'South America',
    'Oceania',
    'Other'
  ];

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-8 h-8" style={{ color: '#2EC4B6' }} />
          </div>
          <h1 style={{ color: '#0D1B2A' }}>List Your Business</h1>
          <p style={{ color: '#6B7280' }}>
            Fill out the form below to create your business listing
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentStep >= step ? 'bg-[#2EC4B6] text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                <span className="text-sm" style={{ color: currentStep >= step ? '#0D1B2A' : '#9CA3AF' }}>
                  {step === 1 ? 'Public Info' : step === 2 ? 'Private Info' : 'Review'}
                </span>
                {step < 3 && <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Public Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 mb-4" style={{ color: '#0D1B2A' }}>
                    <FileText className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                    Public Information
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                    This information will be visible to all buyers browsing the marketplace.
                  </p>
                </div>

                {/* Listing Title */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                    Listing Title <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#E5E7EB' }}
                    placeholder="e.g., Premium Restaurant - Dubai Marina"
                  />
                </div>

                {/* Industry and Region */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                      Industry <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <select
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: '#E5E7EB' }}
                    >
                      <option value="">Select industry</option>
                      {industries.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                      Region <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <select
                      required
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: '#E5E7EB' }}
                    >
                      <option value="">Select region</option>
                      {regions.map(reg => (
                        <option key={reg} value={reg}>{reg}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Financial Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                      Asking Price (AED) <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: '#E5E7EB' }}
                      placeholder="2500000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                      Net Profit (AED) <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.netProfit}
                      onChange={(e) => setFormData({ ...formData, netProfit: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: '#E5E7EB' }}
                      placeholder="450000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                      Turnover (AED) <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.turnover}
                      onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: '#E5E7EB' }}
                      placeholder="1200000"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                    Business Description <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#E5E7EB' }}
                    rows={4}
                    placeholder="Provide a detailed description of your business..."
                  />
                </div>
              </div>
            )}

            {/* Step 2: Private Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 mb-4" style={{ color: '#0D1B2A' }}>
                    <Lock className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                    Private Information
                  </h3>
                  <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: '#FEF3C7', borderLeft: '4px solid #F59E0B' }}>
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#D97706' }} />
                      <p className="text-sm" style={{ color: '#92400E' }}>
                        This information will only be shared with serious buyers after they submit an enquiry through our agents.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Legal Business Name */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                    Legal Business Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.legalBusinessName}
                    onChange={(e) => setFormData({ ...formData, legalBusinessName: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#E5E7EB' }}
                    placeholder="ABC Trading LLC"
                  />
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                    Full Business Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    required
                    value={formData.fullAddress}
                    onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#E5E7EB' }}
                    rows={3}
                    placeholder="Building name, Street, Area, Dubai, UAE"
                  />
                </div>

                {/* Owner Name */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                    Owner Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#E5E7EB' }}
                    placeholder="Full name of business owner"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Tier Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 mb-4" style={{ color: '#0D1B2A' }}>
                    <DollarSign className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                    Choose Your Listing Tier
                  </h3>
                </div>

                {/* Tier Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    onClick={() => setFormData({ ...formData, tier: 'basic' })}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.tier === 'basic' ? 'border-[#2EC4B6] bg-[#CFFAFE]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Basic Listing</h4>
                    <p className="text-2xl mb-3" style={{ color: '#2EC4B6' }}>Free</p>
                    <ul className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                        30-day visibility
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                        Standard support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                        Basic analytics
                      </li>
                    </ul>
                  </div>

                  <div
                    onClick={() => setFormData({ ...formData, tier: 'premium' })}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.tier === 'premium' ? 'border-[#2EC4B6] bg-[#CFFAFE]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 style={{ color: '#0D1B2A' }}>Premium Listing</h4>
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                        Recommended
                      </span>
                    </div>
                    <p className="text-2xl mb-3" style={{ color: '#2EC4B6' }}>AED 499/mo</p>
                    <ul className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                        90-day visibility
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                        Featured placement
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                        Priority support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                        Advanced analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                        Dedicated agent
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Commission Agreement */}
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#DBEAFE', border: '1px solid #2EC4B6' }}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreedToCommission}
                      onChange={(e) => setFormData({ ...formData, agreedToCommission: e.target.checked })}
                      className="mt-1"
                    />
                    <span className="text-sm" style={{ color: '#0D1B2A' }}>
                      I agree to pay a <strong>1% brokerage commission</strong> on the final sale price upon successful completion of the deal. 
                      This fee is only charged when your business sells.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: '#E5E7EB' }}>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 rounded-lg border"
                  style={{ borderColor: '#E5E7EB', color: '#374151' }}
                >
                  Previous
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="ml-auto px-6 py-3 rounded-lg"
                  style={{ backgroundColor: '#2EC4B6', color: 'white' }}
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 rounded-lg"
                  style={{ backgroundColor: '#0D1B2A', color: 'white' }}
                >
                  Submit Listing
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};