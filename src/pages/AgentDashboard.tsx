import React, { useState } from 'react';
import { Building2, Users, MessageSquare, CheckCircle, Clock, Phone, Mail } from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';

export const AgentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'listings' | 'leads' | 'messages'>('listings');

  // Mock data
  const stats = {
    assignedListings: 12,
    activeLeads: 34,
    closedDeals: 5,
    pendingEnquiries: 8
  };

  const assignedListings = [
    { id: '1', title: 'Premium Restaurant - Dubai Marina', seller: 'Ahmed Al Maktoum', price: 2500000, leads: 8, status: 'active' },
    { id: '2', title: 'Tech Startup - DIFC', seller: 'Tech Ventures LLC', price: 1800000, leads: 12, status: 'active' },
    { id: '3', title: 'Retail Store - JBR', seller: 'Sarah Johnson', price: 950000, leads: 5, status: 'active' },
  ];

  const recentLeads = [
    { id: '1', buyerName: 'Omar Abdullah', listing: 'Premium Restaurant - Dubai Marina', financialMeans: '>1M', status: 'new', date: '2024-12-08' },
    { id: '2', buyerName: 'Lisa Chen', listing: 'Tech Startup - DIFC', financialMeans: '100k-1M', status: 'contacted', date: '2024-12-07' },
    { id: '3', buyerName: 'David Miller', listing: 'Retail Store - JBR', financialMeans: '>1M', status: 'new', date: '2024-12-07' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return { bg: '#FEF3C7', text: '#92400E' };
      case 'contacted': return { bg: '#DBEAFE', text: '#1E40AF' };
      case 'closed': return { bg: '#D1FAE5', text: '#065F46' };
      default: return { bg: '#F3F4F6', text: '#374151' };
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <DashboardHeader 
          title="Agent Dashboard" 
          description="Manage your assigned listings and buyer enquiries" 
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Assigned Listings</p>
              <Building2 className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.assignedListings}</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>Active portfolios</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Active Leads</p>
              <Users className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.activeLeads}</p>
            <p className="text-sm" style={{ color: '#10B981' }}>+6 this week</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Pending Enquiries</p>
              <Clock className="w-5 h-5" style={{ color: '#F59E0B' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.pendingEnquiries}</p>
            <p className="text-sm" style={{ color: '#F59E0B' }}>Needs response</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Closed Deals</p>
              <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.closedDeals}</p>
            <p className="text-sm" style={{ color: '#10B981' }}>This month</p>
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
                onClick={() => setActiveTab('leads')}
                className={`py-4 border-b-2 transition-all flex items-center gap-2 ${activeTab === 'leads' ? '' : 'border-transparent'}`}
                style={{
                  borderColor: activeTab === 'leads' ? '#2EC4B6' : 'transparent',
                  color: activeTab === 'leads' ? '#2EC4B6' : '#6B7280'
                }}
              >
                Leads & Enquiries
                {stats.pendingEnquiries > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: '#F59E0B', color: 'white' }}>
                    {stats.pendingEnquiries}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`py-4 border-b-2 transition-all ${activeTab === 'messages' ? '' : 'border-transparent'}`}
                style={{
                  borderColor: activeTab === 'messages' ? '#2EC4B6' : 'transparent',
                  color: activeTab === 'messages' ? '#2EC4B6' : '#6B7280'
                }}
              >
                Messages
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* My Listings Tab */}
            {activeTab === 'listings' && (
              <div>
                <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Assigned Listings</h3>
                <div className="space-y-4">
                  {assignedListings.map(listing => (
                    <div key={listing.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow" style={{ borderColor: '#E5E7EB' }}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 style={{ color: '#0D1B2A' }}>{listing.title}</h4>
                          <p className="text-sm mt-1" style={{ color: '#6B7280' }}>Seller: {listing.seller}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <p style={{ color: '#2EC4B6' }}>AED {listing.price.toLocaleString()}</p>
                            <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>
                              {listing.status}
                            </span>
                            <span className="text-sm" style={{ color: '#6B7280' }}>
                              <Users className="w-4 h-4 inline mr-1" />
                              {listing.leads} leads
                            </span>
                          </div>
                        </div>
                        <button className="px-4 py-2 rounded-lg" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leads Tab */}
            {activeTab === 'leads' && (
              <div>
                <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Recent Enquiries</h3>
                <div className="space-y-4">
                  {recentLeads.map(lead => {
                    const statusColors = getStatusColor(lead.status);
                    return (
                      <div key={lead.id} className="p-4 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p style={{ color: '#0D1B2A' }}>{lead.buyerName}</p>
                            <p className="text-sm" style={{ color: '#6B7280' }}>{lead.listing}</p>
                          </div>
                          <span className="text-xs px-3 py-1 rounded" style={{ backgroundColor: statusColors.bg, color: statusColors.text }}>
                            {lead.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>
                            {lead.financialMeans === '>1M' ? '> AED 1M' : lead.financialMeans === '100k-1M' ? 'AED 100K - 1M' : '< AED 100K'}
                          </span>
                          <span className="text-sm" style={{ color: '#9CA3AF' }}>{lead.date}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 rounded-lg flex items-center gap-2" style={{ backgroundColor: '#0D1B2A', color: 'white' }}>
                            <Phone className="w-4 h-4" />
                            Call
                          </button>
                          <button className="px-4 py-2 rounded-lg flex items-center gap-2 border" style={{ borderColor: '#E5E7EB', color: '#374151' }}>
                            <Mail className="w-4 h-4" />
                            Email
                          </button>
                          <button className="px-4 py-2 rounded-lg flex items-center gap-2 border" style={{ borderColor: '#E5E7EB', color: '#374151' }}>
                            <MessageSquare className="w-4 h-4" />
                            Message
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 mx-auto mb-4" style={{ color: '#D1D5DB' }} />
                <p style={{ color: '#6B7280' }}>Internal messaging system coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};