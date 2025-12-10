import React, { useState } from 'react';
import { Users, Building2, UserCog, TrendingUp, CheckCircle, Clock, XCircle } from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'listings' | 'agents'>('overview');

  // Mock data
  const stats = {
    totalUsers: 342,
    pendingApprovals: 12,
    activeListings: 89,
    totalAgents: 8,
    monthlyRevenue: 45600,
    activeLeads: 156
  };

  const pendingUsers = [
    { id: '1', name: 'Ahmed Al Maktoum', email: 'ahmed@company.ae', role: 'seller', date: '2024-12-07' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@investment.com', role: 'buyer', date: '2024-12-07' },
    { id: '3', name: 'Mohammed Hassan', email: 'mhhassan@ventures.ae', role: 'seller', date: '2024-12-06' },
  ];

  const recentListings = [
    { id: '1', title: 'Premium Restaurant - Dubai Marina', seller: 'Ahmed Al Maktoum', price: 2500000, status: 'pending', assignedAgent: null },
    { id: '2', title: 'Tech Startup - DIFC', seller: 'Tech Ventures LLC', price: 1800000, status: 'active', assignedAgent: 'John Smith' },
    { id: '3', title: 'Retail Store - JBR', seller: 'Sarah Johnson', price: 950000, status: 'active', assignedAgent: 'Emma Davis' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <DashboardHeader 
          title="Admin Dashboard" 
          description="Manage users, listings, and agent assignments" 
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Total Users</p>
              <Users className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.totalUsers}</p>
            <p className="text-sm" style={{ color: '#10B981' }}>+12 this month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Pending Approvals</p>
              <Clock className="w-5 h-5" style={{ color: '#F59E0B' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.pendingApprovals}</p>
            <p className="text-sm" style={{ color: '#F59E0B' }}>Needs attention</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Active Listings</p>
              <Building2 className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.activeListings}</p>
            <p className="text-sm" style={{ color: '#10B981' }}>+8 this week</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Active Agents</p>
              <UserCog className="w-5 h-5" style={{ color: '#2EC4B6' }} />
            </div>
            <p className="text-3xl mb-1" style={{ color: '#0D1B2A' }}>{stats.totalAgents}</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>All verified</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-2.5 rounded-full transition-all`}
              style={{
                backgroundColor: activeTab === 'overview' ? '#2EC4B6' : 'white',
                color: activeTab === 'overview' ? 'white' : '#0D1B2A'
              }}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-2.5 rounded-full transition-all`}
              style={{
                backgroundColor: activeTab === 'users' ? '#2EC4B6' : 'white',
                color: activeTab === 'users' ? 'white' : '#0D1B2A'
              }}
            >
              User Approvals ({stats.pendingApprovals})
            </button>
            <button
              onClick={() => setActiveTab('listings')}
              className={`px-6 py-2.5 rounded-full transition-all`}
              style={{
                backgroundColor: activeTab === 'listings' ? '#2EC4B6' : 'white',
                color: activeTab === 'listings' ? 'white' : '#0D1B2A'
              }}
            >
              Listing Management
            </button>
            <button
              onClick={() => setActiveTab('agents')}
              className={`px-6 py-2.5 rounded-full transition-all`}
              style={{
                backgroundColor: activeTab === 'agents' ? '#2EC4B6' : 'white',
                color: activeTab === 'agents' ? 'white' : '#0D1B2A'
              }}
            >
              Agent Assignments
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* User Approvals Tab */}
          {activeTab === 'users' && (
            <div>
              <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Pending User Approvals</h3>
              <div className="space-y-4">
                {pendingUsers.map(user => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                    <div>
                      <p style={{ color: '#0D1B2A' }}>{user.name}</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>{user.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>
                          {user.role}
                        </span>
                        <span className="text-xs" style={{ color: '#9CA3AF' }}>Applied {user.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg flex items-center gap-2" style={{ backgroundColor: '#10B981', color: 'white' }}>
                        <CheckCircle className="w-4 h-4" />
                        Approve
                      </button>
                      <button className="px-4 py-2 rounded-lg flex items-center gap-2" style={{ backgroundColor: '#EF4444', color: 'white' }}>
                        <XCircle className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Listing Management Tab */}
          {activeTab === 'listings' && (
            <div>
              <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Recent Listings</h3>
              <div className="space-y-4">
                {recentListings.map(listing => (
                  <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                    <div className="flex-1">
                      <p style={{ color: '#0D1B2A' }}>{listing.title}</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>by {listing.seller}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sm" style={{ color: '#2EC4B6' }}>AED {listing.price.toLocaleString()}</p>
                        <span className={`text-xs px-2 py-1 rounded ${listing.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {listing.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      {listing.assignedAgent ? (
                        <p className="text-sm" style={{ color: '#6B7280' }}>Agent: {listing.assignedAgent}</p>
                      ) : (
                        <button className="px-4 py-2 rounded-lg" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
                          Assign Agent
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Platform Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                    <h4 style={{ color: '#0D1B2A' }}>Revenue This Month</h4>
                  </div>
                  <p className="text-2xl mb-1" style={{ color: '#0D1B2A' }}>AED {stats.monthlyRevenue.toLocaleString()}</p>
                  <p className="text-sm" style={{ color: '#10B981' }}>+18% from last month</p>
                </div>
                <div className="p-4 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5" style={{ color: '#2EC4B6' }} />
                    <h4 style={{ color: '#0D1B2A' }}>Active Leads</h4>
                  </div>
                  <p className="text-2xl mb-1" style={{ color: '#0D1B2A' }}>{stats.activeLeads}</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Across all listings</p>
                </div>
              </div>
            </div>
          )}

          {/* Agent Assignments Tab */}
          {activeTab === 'agents' && (
            <div>
              <h3 className="mb-4" style={{ color: '#0D1B2A' }}>Agent Performance</h3>
              <p style={{ color: '#6B7280' }}>Agent assignment and performance tracking coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};