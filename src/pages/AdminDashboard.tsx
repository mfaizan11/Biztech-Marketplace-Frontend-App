import React, { useState, useEffect } from 'react';
import { Users, Building2, UserCog, TrendingUp, CheckCircle, Clock, XCircle, RefreshCw } from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';
import { adminAPI } from '../services/api';
import { User, Listing } from '../types';
import { toast } from 'sonner'; 

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'listings' | 'agents'>('overview');
  const [loading, setLoading] = useState(true);
  
  // Dynamic State
  const [stats, setStats] = useState({
    totalUsers: 0,
    pendingApprovals: 0,
    activeListings: 0,
    totalAgents: 0,
    monthlyRevenue: 0
  });

  const [pendingSellers, setPendingSellers] = useState<User[]>([]);
  const [pendingListings, setPendingListings] = useState<Listing[]>([]);
  const [agents, setAgents] = useState<User[]>([]);

  // 1. DATA FETCHING
  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [statsData, sellersData, listingsData, agentsData] = await Promise.all([
        adminAPI.getStats(),
        adminAPI.getUsers({ role: 'seller', status: 'pending' }),
        adminAPI.getPendingListings(),
        adminAPI.getUsers({ role: 'agent' })
      ]);

      setStats(statsData);
      setPendingSellers(sellersData);
      setPendingListings(listingsData);
      setAgents(agentsData);
    } catch (error) {
      toast.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  // 2. ACTION HANDLERS
  const handleUserAction = async (userId: string, status: 'active' | 'rejected') => {
    try {
      await adminAPI.updateUserStatus(userId, status);
      toast.success(`User ${status === 'active' ? 'approved' : 'rejected'}`);
      loadDashboardData(); // Refresh
    } catch (error) {
      toast.error("Action failed");
    }
  };

  const handleAssignAgent = async (listingId: string, agentId: string) => {
    if (!agentId) return;
    try {
      await adminAPI.assignListingToAgent(listingId, agentId);
      toast.success("Agent assigned successfully");
      loadDashboardData(); // Refresh
    } catch (error) {
      toast.error("Assignment failed");
    }
  };

  if (loading && stats.totalUsers === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <RefreshCw className="w-8 h-8 animate-spin text-[#2EC4B6]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DashboardHeader 
          title="Admin Dashboard" 
          description="Manage users, listings, and agent assignments" 
          action={
            <button 
              onClick={loadDashboardData}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <RefreshCw className="w-5 h-5 text-gray-400" />
            </button>
          }
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Total Platform Users</p>
              <Users className="w-5 h-5 text-[#2EC4B6]" />
            </div>
            <p className="text-3xl font-bold text-[#0D1B2A]">{stats.totalUsers}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Pending Seller Approvals</p>
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-[#0D1B2A]">{stats.pendingApprovals}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Live Business Listings</p>
              <Building2 className="w-5 h-5 text-[#2EC4B6]" />
            </div>
            <p className="text-3xl font-bold text-[#0D1B2A]">{stats.activeListings}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Monthly Tier Revenue</p>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-[#0D1B2A]">AED {stats.monthlyRevenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'users', label: `Pending Sellers (${pendingSellers.length})` },
            { id: 'listings', label: `Pending Listings (${pendingListings.length})` },
            { id: 'agents', label: 'Agent Management' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all font-medium border ${
                activeTab === tab.id 
                ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#2EC4B6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 min-h-[400px]">
          
          {/* USER APPROVALS */}
          {activeTab === 'users' && (
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-6">Seller Registration Requests</h3>
              {pendingSellers.length === 0 ? (
                <div className="text-center py-20 text-gray-400">No pending requests found</div>
              ) : (
                <div className="space-y-4">
                  {pendingSellers.map(user => (
                    <div key={user.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="mb-4 md:mb-0">
                        <p className="font-bold text-[#0D1B2A]">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded font-bold uppercase">Seller</span>
                          <span className="text-xs text-gray-400">Registered: {new Date(user.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => handleUserAction(user.id, 'active')}
                          className="flex-1 md:flex-none px-6 py-2 bg-green-500 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-600"
                        >
                          <CheckCircle className="w-4 h-4" /> Approve
                        </button>
                        <button 
                          onClick={() => handleUserAction(user.id, 'rejected')}
                          className="flex-1 md:flex-none px-6 py-2 bg-red-50 text-red-600 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-100"
                        >
                          <XCircle className="w-4 h-4" /> Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* LISTING MANAGEMENT */}
          {activeTab === 'listings' && (
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-6">New Listings Needing Agent Assignment</h3>
              {pendingListings.length === 0 ? (
                <div className="text-center py-20 text-gray-400">All listings have been processed</div>
              ) : (
                <div className="space-y-4">
                  {pendingListings.map(listing => (
                    <div key={listing.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 border border-gray-100 rounded-xl">
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="flex items-center gap-2 mb-1">
                           <h4 className="font-bold text-[#0D1B2A]">{listing.publicData.title}</h4>
                           <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${listing.tier === 'premium' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}>
                             {listing.tier}
                           </span>
                        </div>
                        <p className="text-sm text-gray-500">Owner: {(listing as any).Seller?.name || 'Unknown'}</p>
                        <p className="text-sm font-bold text-[#2EC4B6] mt-1">AED {listing.publicData.price.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <select 
                          className="w-full sm:w-48 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#2EC4B6]"
                          onChange={(e) => handleAssignAgent(listing.id, e.target.value)}
                          defaultValue=""
                        >
                          <option value="" disabled>Choose Agent...</option>
                          {agents.map(agent => (
                            <option key={agent.id} value={agent.id}>{agent.name}</option>
                          ))}
                        </select>
                        <p className="text-[10px] text-gray-400 font-medium">Assignment activates the ad</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* OVERVIEW / PERFORMANCE */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-6">Platform Health</h3>
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                       <UserCog className="w-5 h-5 text-[#2EC4B6]" /> Agent Productivity
                    </h4>
                    <p className="text-sm text-gray-500">Currently managing <strong>{stats.totalAgents}</strong> internal agents handling live portfolios.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-[#0D1B2A] text-white">
                    <h4 className="font-bold mb-4 flex items-center gap-2 text-[#2EC4B6]">
                       <TrendingUp className="w-5 h-5" /> Revenue Target
                    </h4>
                    <p className="text-2xl font-bold">AED {stats.monthlyRevenue.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 mt-2">Based on current Premium Listing subscriptions.</p>
                 </div>
              </div>
            </div>
          )}

          {/* AGENT MANAGEMENT */}
          {activeTab === 'agents' && (
             <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="text-lg font-bold text-[#0D1B2A]">Internal Brokerage Team</h3>
                   <button className="px-4 py-2 bg-[#2EC4B6] text-white rounded-lg text-sm font-bold">Add New Agent</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                   {agents.map(agent => (
                      <div key={agent.id} className="p-4 border border-gray-100 rounded-xl">
                         <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                            <UserCog className="w-5 h-5 text-[#0D1B2A]" />
                         </div>
                         <p className="font-bold text-sm">{agent.name}</p>
                         <p className="text-xs text-gray-500 mb-3">{agent.email}</p>
                         <button className="text-xs font-bold text-[#2EC4B6] hover:underline uppercase tracking-wider">View Assigned Leads</button>
                      </div>
                   ))}
                </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};