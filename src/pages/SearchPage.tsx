import React, { useState } from 'react';
import { Search, MapPin, Building2, TrendingUp, Lock, Star } from 'lucide-react';
import { Listing, ListingTier } from '../types';

// Mock data for demonstration
const mockListings: Listing[] = [
  {
    id: '1',
    sellerId: 's1',
    assignedAgentId: 'a1',
    publicData: {
      title: 'Profitable E-commerce Store',
      industry: 'E-commerce',
      region: 'Downtown Dubai',
      price: 2500000,
      netProfit: 450000,
      turnover: 1800000,
    },
    tier: 'premium',
    status: 'active',
    createdAt: '2024-12-01',
    updatedAt: '2024-12-01',
  },
  {
    id: '2',
    sellerId: 's2',
    assignedAgentId: 'a1',
    publicData: {
      title: 'Established Restaurant Chain',
      industry: 'Food & Beverage',
      region: 'Business Bay',
      price: 5000000,
      netProfit: 850000,
      turnover: 3200000,
    },
    tier: 'premium',
    status: 'active',
    createdAt: '2024-12-01',
    updatedAt: '2024-12-01',
  },
  {
    id: '3',
    sellerId: 's3',
    assignedAgentId: 'a2',
    publicData: {
      title: 'Digital Marketing Agency',
      industry: 'Services',
      region: 'Dubai Marina',
      price: 800000,
      netProfit: 180000,
      turnover: 650000,
    },
    tier: 'basic',
    status: 'active',
    createdAt: '2024-12-01',
    updatedAt: '2024-12-01',
  },
  {
    id: '4',
    sellerId: 's4',
    assignedAgentId: 'a2',
    publicData: {
      title: 'Retail Fashion Boutique',
      industry: 'Retail',
      region: 'JBR',
      price: 1200000,
      netProfit: 250000,
      turnover: 980000,
    },
    tier: 'basic',
    status: 'active',
    createdAt: '2024-12-01',
    updatedAt: '2024-12-01',
  },
];

export const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    minProfit: '',
  });
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [enquiryMessage, setEnquiryMessage] = useState('');
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const handleEnquire = (listing: Listing) => {
    setSelectedListing(listing);
    setShowEnquiryModal(true);
    setEnquirySubmitted(false);
  };

  const submitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry submitted for listing:', selectedListing?.id, enquiryMessage);
    setEnquirySubmitted(true);
    setEnquiryMessage('');
  };

  const closeEnquiryModal = () => {
    setShowEnquiryModal(false);
    setEnquirySubmitted(false);
    setEnquiryMessage('');
  };

  const formatCurrency = (amount: number) => {
    return `AED ${(amount / 1000).toFixed(0)}K`;
  };

  // Sort listings: Premium first
  const sortedListings = [...mockListings].sort((a, b) => {
    if (a.tier === 'premium' && b.tier !== 'premium') return -1;
    if (a.tier !== 'premium' && b.tier === 'premium') return 1;
    return 0;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      {/* Hero Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-center mb-8">Discover Your Next Partnership</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#E5E7EB' }} />
              <input
                type="text"
                placeholder="Search businesses by title, industry, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded focus:outline-none focus:ring-2 placeholder-gray-400"
                style={{
                  borderRadius: 'var(--radius-sharp)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </div>

            {/* Quick Filters */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <select
                value={filters.industry}
                onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                className="px-4 py-2 rounded focus:outline-none"
                style={{ 
                  borderRadius: 'var(--radius-sharp)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <option value="" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>All Industries</option>
                <option value="ecommerce" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>E-commerce</option>
                <option value="food" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>Food & Beverage</option>
                <option value="retail" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>Retail</option>
                <option value="services" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>Services</option>
              </select>

              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="px-4 py-2 rounded focus:outline-none"
                style={{ 
                  borderRadius: 'var(--radius-sharp)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <option value="" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>All Locations</option>
                <option value="north-america" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>North America</option>
                <option value="europe" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>Europe</option>
                <option value="asia" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>Asia</option>
                <option value="middle-east" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>Middle East</option>
                <option value="africa" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>Africa</option>
                <option value="south-america" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>South America</option>
                <option value="oceania" style={{ backgroundColor: '#1E3A5F', color: 'white' }}>Oceania</option>
              </select>

              <input
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                className="px-4 py-2 rounded focus:outline-none placeholder-gray-400"
                style={{ 
                  borderRadius: 'var(--radius-sharp)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />

              <input
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                className="px-4 py-2 rounded focus:outline-none placeholder-gray-400"
                style={{ 
                  borderRadius: 'var(--radius-sharp)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />

              <input
                type="number"
                placeholder="Min Profit"
                value={filters.minProfit}
                onChange={(e) => setFilters({ ...filters, minProfit: e.target.value })}
                className="px-4 py-2 rounded focus:outline-none placeholder-gray-400"
                style={{ 
                  borderRadius: 'var(--radius-sharp)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <h3 style={{ color: 'var(--color-primary)' }}>
              {sortedListings.length} Businesses Available
            </h3>
            <div className="text-sm" style={{ color: 'var(--color-text-light)' }}>
              <Star className="w-4 h-4 inline" style={{ color: 'var(--color-warning)' }} /> Premium listings shown first
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedListings.map((listing) => (
              <div
                key={listing.id}
                className={`bg-white rounded-lg overflow-hidden transition-all hover:shadow-lg ${
                  listing.tier === 'premium' ? 'ring-2 ring-offset-2' : ''
                }`}
                style={{
                  boxShadow: listing.tier === 'premium' ? '0 10px 30px rgba(46, 196, 182, 0.15)' : 'var(--shadow-card)',
                  borderRadius: 'var(--radius-card)',
                  ringColor: listing.tier === 'premium' ? '#2EC4B6' : undefined,
                }}
              >
                {/* Premium Badge */}
                {listing.tier === 'premium' && (
                  <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: '#F0FDFC', borderBottom: '1px solid #CCFBF1' }}>
                    <div className="flex items-center gap-2" style={{ color: '#0F766E' }}>
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">Featured Listing</span>
                    </div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2EC4B6' }} />
                  </div>
                )}

                <div className="p-6">
                  {/* Title */}
                  <h4 className="mb-3" style={{ color: 'var(--color-primary)' }}>
                    {listing.publicData.title}
                  </h4>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4 text-sm" style={{ color: 'var(--color-text-light)' }}>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{listing.publicData.industry}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{listing.publicData.region}</span>
                    </div>
                  </div>

                  {/* Financial Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #F3F4F6' }}>
                      <div className="text-xs mb-1" style={{ color: '#6B7280' }}>
                        Price
                      </div>
                      <div className="metric" style={{ 
                        color: '#2EC4B6',
                        fontSize: '0.875rem',
                        fontWeight: 600
                      }}>
                        {formatCurrency(listing.publicData.price)}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #F3F4F6' }}>
                      <div className="text-xs mb-1" style={{ color: '#6B7280' }}>
                        Net Profit
                      </div>
                      <div className="metric" style={{ 
                        color: '#10B981',
                        fontSize: '0.875rem',
                        fontWeight: 600
                      }}>
                        {formatCurrency(listing.publicData.netProfit)}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #F3F4F6' }}>
                      <div className="text-xs mb-1" style={{ color: '#6B7280' }}>
                        Turnover
                      </div>
                      <div className="metric" style={{ 
                        color: '#374151',
                        fontSize: '0.875rem',
                        fontWeight: 600
                      }}>
                        {formatCurrency(listing.publicData.turnover)}
                      </div>
                    </div>
                  </div>

                  {/* Privacy Notice */}
                  <div className="flex items-start gap-2 mb-4 p-3 rounded-lg text-xs" style={{ 
                    backgroundColor: '#F0FDFC',
                    border: '1px solid #CCFBF1',
                    color: '#0F766E'
                  }}>
                    <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#2EC4B6' }} />
                    <span>Full business details shared after enquiry</span>
                  </div>

                  {/* Enquire Button */}
                  <button
                    onClick={() => handleEnquire(listing)}
                    className="w-full py-3 rounded-lg transition-all hover:shadow-md"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      color: 'white',
                      borderRadius: 'var(--radius-sharp)'
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {showEnquiryModal && selectedListing && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{
            backgroundColor: 'rgba(13, 27, 42, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          <div className="bg-white rounded-lg max-w-md w-full p-6" style={{ borderRadius: 'var(--radius-modal)' }}>
            {!enquirySubmitted ? (
              <>
                <h3 className="mb-4" style={{ color: 'var(--color-primary)' }}>
                  Enquire About This Business
                </h3>
                
                <div className="mb-4 p-4 rounded" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <div style={{ color: 'var(--color-text)' }}>
                    {selectedListing.publicData.title}
                  </div>
                  <div className="text-sm mt-1" style={{ color: 'var(--color-text-light)' }}>
                    {selectedListing.publicData.industry} • {selectedListing.publicData.region}
                  </div>
                </div>

                <form onSubmit={submitEnquiry}>
                  <div className="mb-4">
                    <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={enquiryMessage}
                      onChange={(e) => setEnquiryMessage(e.target.value)}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                      style={{
                        borderColor: 'var(--color-surface)',
                        borderRadius: 'var(--radius-sharp)'
                      }}
                      placeholder="Tell us why you're interested in this business..."
                    />
                  </div>

                  <div className="text-xs mb-4 p-3 rounded" style={{ 
                    backgroundColor: 'rgba(46, 196, 182, 0.05)',
                    color: 'var(--color-text-light)'
                  }}>
                    Your enquiry will be sent to a dedicated agent who will contact you with full business details.
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={closeEnquiryModal}
                      className="flex-1 py-2 rounded border"
                      style={{
                        borderColor: 'var(--color-surface)',
                        color: 'var(--color-text)',
                        borderRadius: 'var(--radius-sharp)'
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 rounded"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        color: 'white',
                        borderRadius: 'var(--radius-sharp)'
                      }}
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="mb-4 w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <svg className="w-8 h-8" style={{ color: '#10B981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="mb-2" style={{ color: 'var(--color-primary)' }}>
                  Enquiry Sent Successfully!
                </h3>
                
                <p className="mb-6" style={{ color: 'var(--color-text-light)' }}>
                  Your enquiry has been sent to our agent. They will contact you shortly.
                </p>

                <button
                  onClick={closeEnquiryModal}
                  className="px-6 py-2 rounded"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'white',
                    borderRadius: 'var(--radius-sharp)'
                  }}
                >
                  OK
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};