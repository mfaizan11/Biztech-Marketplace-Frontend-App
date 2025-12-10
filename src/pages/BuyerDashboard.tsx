import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, MessageSquare, Building2, Clock, CheckCircle } from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';

export const BuyerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'saved' | 'enquiries' | 'matches'>('saved');

  // Mock data
  const stats = {
    savedListings: 8,
    activeEnquiries: 5,
    newMatches: 3,
    viewedToday: 12
  };

  const savedListings = [
    { 
      id: '1', 
      title: 'Premium Restaurant - Dubai Marina', 
      industry: 'Food & Beverage',
      price: 2500000, 
      netProfit: 450000,
      savedDate: '2024-12-08'
    },
    { 
      id: '2', 
      title: 'Tech Startup - DIFC', 
      industry: 'Technology',
      price: 1800000, 
      netProfit: 320000,
      savedDate: '2024-12-07'
    },
    { 
      id: '3', 
      title: 'Boutique Coffee Shop - JLT', 
      industry: 'Food & Beverage',
      price: 450000, 
      netProfit: 85000,
      savedDate: '2024-12-06'
    },
  ];

  const myEnquiries = [
    { 
      id: '1', 
      listing: 'Premium Restaurant - Dubai Marina',
      status: 'pending',
      date: '2024-12-08',
      agentName: 'John Smith',
      lastUpdate: '2 hours ago'
    },
    { 
      id: '2', 
      listing: 'Tech Startup - DIFC',
      status: 'in-progress',
      date: '2024-12-07',
      agentName: 'Emma Davis',
      lastUpdate: '1 day ago'
    },
    { 
      id: '3', 
      listing: 'Retail Store - JBR',
      status: 'completed',
      date: '2024-12-05',
      agentName: 'Michael Chen',
      lastUpdate: '3 days ago'
    },
  ];

  const getEnquiryStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return { bg: '#FEF3C7', text: '#92400E', icon: Clock };
      case 'in-progress': return { bg: '#DBEAFE', text: '#1E40AF', icon: MessageSquare };
      case 'completed': return { bg: '#D1FAE5', text: '#065F46', icon: CheckCircle };
      default: return { bg: '#F3F4F6', text: '#374151', icon: Clock };
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <DashboardHeader
          title="Buyer Dashboard"
          description="Discover and track businesses you're interested in"
        >
          <Link to="/search">
            <button className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:opacity-90" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
              <Search className="w-5 h-5" />
              Browse Listings
            </button>
          </Link>
        </DashboardHeader>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Saved Listings</p>
              <Heart className="w-5 h-5" style={{ color: '#EF4444' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.savedListings}</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>Your favorites</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Active Enquiries</p>
              <MessageSquare className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.activeEnquiries}</p>
            <p className="text-sm" style={{ color: '#10B981' }}>In progress</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>New Matches</p>
              <Building2 className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.newMatches}</p>
            <p className="text-sm" style={{ color: '#F59E0B' }}>Based on your profile</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Viewed Today</p>
              <Search className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.viewedToday}</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>Listings explored</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b" style={{ borderColor: '#E5E7EB' }}>
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('saved')}
                className={`py-4 border-b-2 transition-all ${activeTab === 'saved' ? '' : 'border-transparent'}`}
                style={{
                  borderColor: activeTab === 'saved' ? '#2EC4B6' : 'transparent',
                  color: activeTab === 'saved' ? '#2EC4B6' : '#6B7280'
                }}
              >
                Saved Listings
              </button>
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`py-4 border-b-2 transition-all ${activeTab === 'enquiries' ? '' : 'border-transparent'}`}
                style={{
                  borderColor: activeTab === 'enquiries' ? '#2EC4B6' : 'transparent',
                  color: activeTab === 'enquiries' ? '#2EC4B6' : '#6B7280'
                }}
              >
                My Enquiries
              </button>
              <button
                onClick={() => setActiveTab('matches')}
                className={`py-4 border-b-2 transition-all flex items-center gap-2 ${activeTab === 'matches' ? '' : 'border-transparent'}`}
                style={{
                  borderColor: activeTab === 'matches' ? '#2EC4B6' : 'transparent',
                  color: activeTab === 'matches' ? '#2EC4B6' : '#6B7280'
                }}
              >
                Recommended Matches
                {stats.newMatches > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                    {stats.newMatches}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Saved Listings Tab */}
            {activeTab === 'saved' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 style={{ color: '#0D1B2A' }}>Your Saved Listings</h3>
                  <button className="text-sm" style={{ color: '#EF4444' }}>
                    Clear All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedListings.map(listing => (
                    <div key={listing.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow" style={{ borderColor: '#E5E7EB' }}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>
                            {listing.industry}
                          </span>
                          <h4 className="mt-2" style={{ color: '#0D1B2A' }}>{listing.title}</h4>
                        </div>
                        <button className="text-red-500 hover:text-red-600">
                          <Heart className="w-5 h-5 fill-current" />
                        </button>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6B7280' }}>Asking Price:</span>
                          <span style={{ color: '#2EC4B6' }}>AED {listing.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6B7280' }}>Net Profit:</span>
                          <span style={{ color: '#0D1B2A' }}>AED {listing.netProfit.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 py-2 rounded-lg text-sm" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                          View Details
                        </button>
                        <button className="flex-1 py-2 rounded-lg text-sm border" style={{ borderColor: '#E5E7EB', color: '#374151' }}>
                          Enquire
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* My Enquiries Tab */}
            {activeTab === 'enquiries' && (
              <div>
                <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Your Enquiries</h3>
                <div className="space-y-4">
                  {myEnquiries.map(enquiry => {
                    const statusInfo = getEnquiryStatusColor(enquiry.status);
                    const StatusIcon = statusInfo.icon;
                    return (
                      <div key={enquiry.id} className="p-4 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 style={{ color: '#0D1B2A' }}>{enquiry.listing}</h4>
                            <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
                              Agent: {enquiry.agentName}
                            </p>
                          </div>
                          <span className="text-xs px-3 py-1 rounded flex items-center gap-1" style={{ backgroundColor: statusInfo.bg, color: statusInfo.text }}>
                            <StatusIcon className="w-3 h-3" />
                            {enquiry.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm mb-3" style={{ color: '#9CA3AF' }}>
                          <span>Submitted: {enquiry.date}</span>
                          <span>•</span>
                          <span>Last update: {enquiry.lastUpdate}</span>
                        </div>

                        <div className="flex gap-2">
                          <button className="px-4 py-2 rounded-lg text-sm flex items-center gap-2" style={{ backgroundColor: '#0D1B2A', color: 'white' }}>
                            <MessageSquare className="w-4 h-4" />
                            Message Agent
                          </button>
                          <button className="px-4 py-2 rounded-lg text-sm border" style={{ borderColor: '#E5E7EB', color: '#374151' }}>
                            View Listing
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Recommended Matches Tab */}
            {activeTab === 'matches' && (
              <div>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="mb-1" style={{ color: '#0D1B2A' }}>Personalized Recommendations</h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Based on your financial means and interests, we&apos;ve found {stats.newMatches} new businesses that might interest you.
                  </p>
                </div>

                <div className="text-center py-12">
                  <Building2 className="w-12 h-12 mx-auto mb-4" style={{ color: '#D1D5DB' }} />
                  <p style={{ color: '#6B7280' }}>Recommendation algorithm coming soon</p>
                  <Link to="/search">
                    <button className="mt-4 px-6 py-2 rounded-lg" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                      Browse All Listings
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};