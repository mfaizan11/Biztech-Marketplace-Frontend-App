import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Building2, MapPin, DollarSign, TrendingUp, BarChart3, Heart, Share2, AlertCircle, MessageSquare } from 'lucide-react';

export const ListingDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Mock listing data
  const listing = {
    id: id || '1',
    title: 'Premium Restaurant - Dubai Marina',
    industry: 'Food & Beverage',
    region: 'Dubai Marina',
    price: 2500000,
    netProfit: 450000,
    turnover: 1200000,
    description: 'Established premium restaurant in the heart of Dubai Marina with stunning marina views. The business has been operating successfully for 5 years with a loyal customer base. Fully equipped kitchen, trained staff, and all necessary licenses included. Prime location with high foot traffic.',
    features: [
      'Prime Dubai Marina location',
      'Fully equipped commercial kitchen',
      '120 seating capacity',
      'All licenses and permits included',
      'Trained staff of 15 employees',
      'Established supplier relationships',
      'Strong social media presence',
      '5-year operating history'
    ],
    financials: {
      monthlyRevenue: 100000,
      profitMargin: 37.5,
      roi: 18,
      employees: 15
    },
    tier: 'premium',
    views: 145,
    enquiries: 12
  };

  const handleEnquire = () => {
    setShowEnquiryModal(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm" style={{ color: '#6B7280' }}>
          <button onClick={() => navigate('/search')} className="hover:underline">Search</button>
          <span className="mx-2">/</span>
          <span style={{ color: '#0D1B2A' }}>{listing.title}</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>
                  {listing.industry}
                </span>
                {listing.tier === 'premium' && (
                  <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                    Premium Listing
                  </span>
                )}
              </div>
              <h1 className="mb-2" style={{ color: '#0D1B2A' }}>{listing.title}</h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#6B7280' }}>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {listing.region}
                </span>
                <span>•</span>
                <span>{listing.views} views</span>
                <span>•</span>
                <span>{listing.enquiries} enquiries</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="p-3 rounded-lg border hover:bg-gray-50"
                style={{ borderColor: '#E5E7EB' }}
              >
                <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} style={{ color: isSaved ? '#EF4444' : '#6B7280' }} />
              </button>
              <button className="p-3 rounded-lg border hover:bg-gray-50" style={{ borderColor: '#E5E7EB' }}>
                <Share2 className="w-5 h-5" style={{ color: '#6B7280' }} />
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
            <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Asking Price</p>
            <p className="text-3xl" style={{ color: '#2EC4B6' }}>AED {listing.price.toLocaleString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Financial Metrics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="mb-4 flex items-center gap-2" style={{ color: '#0D1B2A' }}>
                <BarChart3 className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                Financial Metrics
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Annual Turnover</p>
                  <p className="text-xl" style={{ color: '#0D1B2A' }}>AED {listing.turnover.toLocaleString()}</p>
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Net Profit</p>
                  <p className="text-xl" style={{ color: '#0D1B2A' }}>AED {listing.netProfit.toLocaleString()}</p>
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Profit Margin</p>
                  <p className="text-xl" style={{ color: '#0D1B2A' }}>{listing.financials.profitMargin}%</p>
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Est. ROI</p>
                  <p className="text-xl" style={{ color: '#0D1B2A' }}>{listing.financials.roi}%</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Business Description</h3>
              <p className="leading-relaxed" style={{ color: '#374151' }}>
                {listing.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {listing.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2" style={{ color: '#374151' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#2EC4B6' }}></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy Notice */}
            <div className="bg-yellow-50 rounded-lg p-4 flex gap-3" style={{ border: '1px solid #FCD34D' }}>
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
              <div>
                <p className="mb-1" style={{ color: '#92400E' }}>Privacy Protected</p>
                <p className="text-sm" style={{ color: '#92400E' }}>
                  The business name, exact address, and owner details are kept confidential. 
                  This information will only be shared with qualified buyers through our agent after submitting an enquiry.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enquiry Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Interested?</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#6B7280' }}>Price:</span>
                  <span style={{ color: '#2EC4B6' }}>AED {listing.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#6B7280' }}>Annual Profit:</span>
                  <span style={{ color: '#0D1B2A' }}>AED {listing.netProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#6B7280' }}>ROI:</span>
                  <span style={{ color: '#0D1B2A' }}>{listing.financials.roi}%</span>
                </div>
              </div>

              <button
                onClick={handleEnquire}
                className="w-full py-3 rounded-lg mb-3 flex items-center justify-center gap-2"
                style={{ backgroundColor: '#2EC4B6', color: 'white' }}
              >
                <MessageSquare className="w-5 h-5" />
                Submit Enquiry
              </button>

              <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                An agent will contact you within 24 hours
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="mb-4" style={{ color: '#0D1B2A' }}>Quick Stats</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span style={{ color: '#6B7280' }}>Industry</span>
                  <span style={{ color: '#0D1B2A' }}>{listing.industry}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: '#6B7280' }}>Location</span>
                  <span style={{ color: '#0D1B2A' }}>{listing.region}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: '#6B7280' }}>Employees</span>
                  <span style={{ color: '#0D1B2A' }}>{listing.financials.employees}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: '#6B7280' }}>Monthly Revenue</span>
                  <span style={{ color: '#0D1B2A' }}>AED {listing.financials.monthlyRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Submit Enquiry</h3>
            <p className="mb-4 text-sm" style={{ color: '#6B7280' }}>
              Fill out the form below and our agent will contact you with more details.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>Your Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" style={{ borderColor: '#E5E7EB' }} />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" style={{ borderColor: '#E5E7EB' }} />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>Message (Optional)</label>
                <textarea className="w-full px-4 py-2 border rounded-lg" rows={3} style={{ borderColor: '#E5E7EB' }} />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowEnquiryModal(false)}
                  className="flex-1 py-2 rounded-lg border"
                  style={{ borderColor: '#E5E7EB', color: '#374151' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-lg"
                  style={{ backgroundColor: '#2EC4B6', color: 'white' }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
