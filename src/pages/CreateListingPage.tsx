import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, DollarSign, FileText, Lock, Info, CheckCircle, Loader2 } from 'lucide-react';
import { listingsAPI, paymentAPI } from '../services/api';
import { toast } from 'sonner';

export const CreateListingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    industry: '',
    region: '',
    price: '',
    netProfit: '',
    turnover: '',
    description: '',
    legalBusinessName: '',
    fullAddress: '',
    ownerName: '',
    tier: 'basic' as 'basic' | 'premium',
    agreedToCommission: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Create the listing
      const newListing = await listingsAPI.create(formData);
      
      // 2. If it's a Premium Listing, trigger the simulated payment
      if (formData.tier === 'premium') {
        await paymentAPI.createSubscription({
          listingId: newListing.id,
          amount: 499
        });
        toast.success("Premium listing created and activated!");
      } else {
        toast.success("Listing submitted for review!");
      }

      navigate('/dashboard/seller');
    } catch (error: any) {
      toast.error(error.message || "Failed to create listing");
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = ['Food & Beverage', 'Technology', 'Retail', 'Healthcare', 'Education', 'Real Estate', 'Manufacturing', 'Services', 'Other'];
  const regions = ['North America', 'Europe', 'Asia', 'Middle East', 'Africa', 'South America', 'Oceania', 'Other'];

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-8 h-8" style={{ color: '#2EC4B6' }} />
          </div>
          <h1 style={{ color: '#0D1B2A' }} className="text-3xl font-bold">List Your Business</h1>
          <p style={{ color: '#6B7280' }}>Fill out the form below to create your business listing</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentStep >= step ? 'bg-[#2EC4B6] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step}
                </div>
                <span className="text-sm font-medium" style={{ color: currentStep >= step ? '#0D1B2A' : '#9CA3AF' }}>
                  {step === 1 ? 'Public Info' : step === 2 ? 'Private Info' : 'Review'}
                </span>
                {step < 3 && <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Public Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 mb-4 font-bold text-lg" style={{ color: '#0D1B2A' }}>
                    <FileText className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                    Public Information
                  </h3>
                  <p className="text-sm text-gray-500">This information will be visible to all buyers browsing the marketplace.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Listing Title *</label>
                  <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2EC4B6] outline-none" style={{ borderColor: '#E5E7EB' }} placeholder="e.g., Premium Restaurant - Dubai Marina" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry *</label>
                    <select required value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }}>
                      <option value="">Select industry</option>
                      {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Region *</label>
                    <select required value={formData.region} onChange={(e) => setFormData({ ...formData, region: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }}>
                      <option value="">Select region</option>
                      {regions.map(reg => <option key={reg} value={reg}>{reg}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Asking Price (AED) *</label>
                    <input type="number" required value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }} placeholder="2500000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Net Profit (AED) *</label>
                    <input type="number" required value={formData.netProfit} onChange={(e) => setFormData({ ...formData, netProfit: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }} placeholder="450000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Turnover (AED) *</label>
                    <input type="number" required value={formData.turnover} onChange={(e) => setFormData({ ...formData, turnover: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }} placeholder="1200000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Business Description *</label>
                  <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }} rows={4} placeholder="Provide a detailed description of your business..." />
                </div>
              </div>
            )}

            {/* Step 2: Private Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 mb-4 font-bold text-lg" style={{ color: '#0D1B2A' }}>
                    <Lock className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                    Private Information
                  </h3>
                  <div className="p-4 rounded-lg mb-4 bg-amber-50 border-l-4 border-amber-500">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 flex-shrink-0 text-amber-600" />
                      <p className="text-sm text-amber-800">This information will only be shared with serious buyers after they submit an enquiry through our agents.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Legal Business Name *</label>
                  <input type="text" required value={formData.legalBusinessName} onChange={(e) => setFormData({ ...formData, legalBusinessName: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }} placeholder="ABC Trading LLC" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Full Business Address *</label>
                  <textarea required value={formData.fullAddress} onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }} rows={3} placeholder="Building name, Street, Area, Dubai, UAE" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Owner Name *</label>
                  <input type="text" required value={formData.ownerName} onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })} className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2EC4B6]" style={{ borderColor: '#E5E7EB' }} placeholder="Full name of business owner" />
                </div>
              </div>
            )}

            {/* Step 3: Review & Tier Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="flex items-center gap-2 mb-4 font-bold text-lg" style={{ color: '#0D1B2A' }}>
                  <DollarSign className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                  Choose Your Service Level
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div onClick={() => setFormData({ ...formData, tier: 'basic' })} className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${formData.tier === 'basic' ? 'border-[#2EC4B6] bg-[#F0FDFC]' : 'border-gray-100 hover:border-gray-200'}`}>
                    <h4 className="font-bold mb-2">Free Ad</h4>
                    <p className="text-2xl font-bold mb-3 text-[#2EC4B6]">Free</p>
                    <ul className="space-y-2 text-xs text-gray-500">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Standard ad placement</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Allocation of a dedicated agent</li>
                    </ul>
                  </div>

                  <div onClick={() => setFormData({ ...formData, tier: 'premium' })} className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${formData.tier === 'premium' ? 'border-[#2EC4B6] bg-[#F0FDFC]' : 'border-gray-100 hover:border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold">Paid Service</h4>
                      <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded font-bold uppercase">Preferred</span>
                    </div>
                    <p className="text-2xl font-bold mb-3 text-[#2EC4B6]">AED 499/mo</p>
                    <ul className="space-y-2 text-xs text-gray-500">
                      <li className="flex items-center gap-2 font-bold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500" /> Preferred placement</li>
                      <li className="flex items-center gap-2 font-bold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500" /> Professional Sale Pack</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required checked={formData.agreedToCommission} onChange={(e) => setFormData({ ...formData, agreedToCommission: e.target.checked })} className="mt-1" />
                    <span className="text-sm text-blue-900">
                      I agree to pay a <strong>1% brokerage commission</strong> on the final sale price upon successful completion of the deal.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {currentStep > 1 && (
                <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="px-6 py-3 rounded-lg border font-medium hover:bg-gray-50 transition-all text-gray-600">Previous</button>
              )}
              
              {currentStep < 3 ? (
                <button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="ml-auto px-8 py-3 rounded-lg font-bold text-white bg-[#2EC4B6] hover:opacity-90">Next Step</button>
              ) : (
                <button type="submit" disabled={isSubmitting} className="ml-auto px-8 py-3 rounded-lg font-bold text-white bg-[#0D1B2A] hover:opacity-90 disabled:opacity-50 flex items-center gap-2">
                  {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {formData.tier === 'premium' ? 'Pay & Submit' : 'Submit Listing'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};