import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Plus, Eye, Users, TrendingUp, Edit, Trash2 } from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';

export const SellerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'listings' | 'analytics'>('listings');

  // Mock data
  const stats = {
    totalListings: 3,
    activeListings: 2,
    totalViews: 234,
    totalEnquiries: 18
  };

  const myListings = [
    { 
      id: '1', 
      title: 'Premium Restaurant - Dubai Marina', 
      price: 2500000, 
      status: 'active', 
      views: 145, 
      enquiries: 12,
      tier: 'premium',
      expiryDate: '2025-01-15'
    },
    { 
      id: '2', 
      title: 'Boutique Coffee Shop - JLT', 
      price: 450000, 
      status: 'active', 
      views: 89, 
      enquiries: 6,
      tier: 'basic',
      expiryDate: '2025-01-08'
    },
    { 
      id: '3', 
      title: 'Import/Export Business - Jebel Ali', 
      price: 1200000, 
      status: 'expired', 
      views: 0, 
      enquiries: 0,
      tier: 'premium',
      expiryDate: '2024-12-01'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return { bg: '#D1FAE5', text: '#065F46' };
      case 'pending': return { bg: '#FEF3C7', text: '#92400E' };
      case 'expired': return { bg: '#FEE2E2', text: '#991B1B' };
      default: return { bg: '#F3F4F6', text: '#374151' };
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <DashboardHeader
          title="Seller Dashboard"
          description="Manage your business listings and track performance"
        >
          <Link to="/create-listing">
            <button className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:opacity-90" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
              <Plus className="w-5 h-5" />
              Create New Listing
            </button>
          </Link>
        </DashboardHeader>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Total Listings</p>
              <Building2 className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.totalListings}</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>{stats.activeListings} active</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Total Views</p>
              <Eye className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.totalViews}</p>
            <p className="text-sm" style={{ color: '#10B981' }}>+23 this week</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Total Enquiries</p>
              <Users className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.totalEnquiries}</p>
            <p className="text-sm" style={{ color: '#10B981' }}>+4 new</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Conversion Rate</p>
              <TrendingUp className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>7.7%</p>
            <p className="text-sm" style={{ color: '#10B981' }}>Above average</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b" style={{ borderColor: '#E5E7EB' }}>
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('listings')}
                className={`py-4 border-b-2 transition-all ${activeTab === 'listings' ? '' : 'border-transparent'}`}
                style={{
                  borderColor: activeTab === 'listings' ? '#2EC4B6' : 'transparent',
                  color: activeTab === 'listings' ? '#2EC4B6' : '#6B7280'
                }}
              >
                My Listings
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 border-b-2 transition-all ${activeTab === 'analytics' ? '' : 'border-transparent'}`}
                style={{
                  borderColor: activeTab === 'analytics' ? '#2EC4B6' : 'transparent',
                  color: activeTab === 'analytics' ? '#2EC4B6' : '#6B7280'
                }}
              >
                Analytics
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* My Listings Tab */}
            {activeTab === 'listings' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 style={{ color: '#0D1B2A' }}>Your Business Listings</h3>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border text-sm" style={{ borderColor: '#E5E7EB', color: '#374151' }}>
                      All
                    </button>
                    <button className="px-4 py-2 rounded-lg border text-sm" style={{ borderColor: '#E5E7EB', color: '#374151' }}>
                      Active
                    </button>
                    <button className="px-4 py-2 rounded-lg border text-sm" style={{ borderColor: '#E5E7EB', color: '#374151' }}>
                      Expired
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {myListings.map(listing => {
                    const statusColors = getStatusColor(listing.status);
                    return (
                      <div key={listing.id} className="p-5 border rounded-lg hover:shadow-md transition-shadow" style={{ borderColor: '#E5E7EB' }}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 style={{ color: '#0D1B2A' }}>{listing.title}</h4>
                              {listing.tier === 'premium' && (
                                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                                  Premium
                                </span>
                              )}
                            </div>
                            <p className="mb-2" style={{ color: '#2EC4B6' }}>AED {listing.price.toLocaleString()}</p>
                            <div className="flex items-center gap-4">
                              <span className="text-xs px-3 py-1 rounded" style={{ backgroundColor: statusColors.bg, color: statusColors.text }}>
                                {listing.status}
                              </span>
                              <span className="text-sm" style={{ color: '#6B7280' }}>
                                <Eye className="w-4 h-4 inline mr-1" />
                                {listing.views} views
                              </span>
                              <span className="text-sm" style={{ color: '#6B7280' }}>
                                <Users className="w-4 h-4 inline mr-1" />
                                {listing.enquiries} enquiries
                              </span>
                              <span className="text-sm" style={{ color: '#9CA3AF' }}>
                                Expires: {listing.expiryDate}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 rounded-lg border hover:bg-gray-50" style={{ borderColor: '#E5E7EB' }}>
                              <Edit className="w-4 h-4" style={{ color: '#6B7280' }} />
                            </button>
                            <button className="p-2 rounded-lg border hover:bg-gray-50" style={{ borderColor: '#E5E7EB' }}>
                              <Trash2 className="w-4 h-4" style={{ color: '#EF4444' }} />
                            </button>
                          </div>
                        </div>

                        {listing.status === 'expired' && (
                          <div className="mt-3 pt-3 border-t flex items-center justify-between" style={{ borderColor: '#E5E7EB' }}>
                            <p className="text-sm" style={{ color: '#6B7280' }}>This listing has expired. Renew to continue receiving enquiries.</p>
                            <button className="px-4 py-2 rounded-lg" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                              Renew Listing
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div>
                <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Performance Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                    <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Views Over Time</h4>
                    <p className="text-sm mb-4" style={{ color: '#6B7280' }}>Track how many people are viewing your listings</p>
                    <div className="h-40 flex items-end justify-between gap-2">
                      {[45, 62, 78, 56, 89, 120, 145].map((value, i) => (
                        <div key={i} className="flex-1 rounded-t" style={{ 
                          backgroundColor: '#2EC4B6', 
                          height: `${(value / 145) * 100}%`,
                          opacity: 0.7 + (i * 0.05)
                        }}></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs" style={{ color: '#9CA3AF' }}>
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                    <h4 className="mb-2" style={{ color: '#0D1B2A' }}>Enquiry Breakdown</h4>
                    <p className="text-sm mb-4" style={{ color: '#6B7280' }}>Distribution by listing</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span style={{ color: '#374151' }}>Premium Restaurant</span>
                          <span style={{ color: '#6B7280' }}>67%</span>
                        </div>
                        <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#E5E7EB' }}>
                          <div className="h-2 rounded-full" style={{ backgroundColor: '#2EC4B6', width: '67%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span style={{ color: '#374151' }}>Coffee Shop</span>
                          <span style={{ color: '#6B7280' }}>33%</span>
                        </div>
                        <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#E5E7EB' }}>
                          <div className="h-2 rounded-full" style={{ backgroundColor: '#0D1B2A', width: '33%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};