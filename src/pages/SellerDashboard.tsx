import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Plus, Eye, Users, TrendingUp, Edit, Trash2, Loader2, RefreshCw, Star, CreditCard } from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';
import { listingsAPI, paymentAPI } from '../services/api';
import { Listing } from '../types';
import { toast } from 'sonner';

export const SellerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'listings' | 'analytics'>('listings');
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const fetchListings = async () => {
    setIsLoading(true);
    try {
      const data = await listingsAPI.getSellerListings();
      setListings(data);
    } catch (error: any) {
      toast.error(error.message || "Failed to load listings");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const stats = useMemo(() => {
    const totalViews = listings.reduce((acc, curr) => acc + (curr.views || 0), 0);
    const totalEnquiries = listings.reduce((acc, curr) => acc + ((curr as any).Leads?.length || 0), 0);
    const activeListings = listings.filter(l => l.status === 'active').length;
    return {
      totalListings: listings.length,
      activeListings,
      totalViews,
      totalEnquiries,
      conversionRate: totalViews > 0 ? ((totalEnquiries / totalViews) * 100).toFixed(1) : 0
    };
  }, [listings]);

  // NEW: Handle Renewal or Upgrade to Premium
  const handlePaymentAction = async (listingId: string, isUpgrade: boolean) => {
    setProcessingId(listingId);
    try {
      await paymentAPI.createSubscription({
        listingId,
        amount: 499 // Monthly Premium Fee
      });
      toast.success(isUpgrade ? "Listing upgraded to Premium!" : "Listing renewed successfully!");
      fetchListings(); // Refresh data
    } catch (error: any) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setProcessingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;
    try {
      await listingsAPI.delete(id);
      toast.success("Listing deleted successfully");
      setListings(prev => prev.filter(l => l.id !== id));
    } catch (error: any) {
      toast.error(error.message || "Failed to delete listing");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return { bg: '#D1FAE5', text: '#065F46' };
      case 'pending': return { bg: '#FEF3C7', text: '#92400E' };
      case 'expired': return { bg: '#FEE2E2', text: '#991B1B' };
      default: return { bg: '#F3F4F6', text: '#374151' };
    }
  };

  if (isLoading && listings.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#2EC4B6]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DashboardHeader
          title="Seller Dashboard"
          description="Manage your business listings and track performance"
          action={
            <button onClick={fetchListings} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <RefreshCw className={`w-5 h-5 text-gray-400 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          }
        >
          <Link to="/create-listing">
            <button className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:opacity-90 font-bold" style={{ backgroundColor: '#2EC4B6', color: 'white' }}>
              <Plus className="w-5 h-5" />
              Create New Listing
            </button>
          </Link>
        </DashboardHeader>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Total Listings</p>
              <Building2 className="w-5 h-5 text-[#2EC4B6]" />
            </div>
            <p className="text-3xl font-bold text-[#0D1B2A]">{stats.totalListings}</p>
            <p className="text-sm text-[#10B981] font-medium">{stats.activeListings} currently active</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Total Views</p>
              <Eye className="w-5 h-5 text-[#2EC4B6]" />
            </div>
            <p className="text-3xl font-bold text-[#0D1B2A]">{stats.totalViews}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Enquiries</p>
              <Users className="w-5 h-5 text-[#2EC4B6]" />
            </div>
            <p className="text-3xl font-bold text-[#0D1B2A]">{stats.totalEnquiries}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
              <TrendingUp className="w-5 h-5 text-[#2EC4B6]" />
            </div>
            <p className="text-3xl font-bold text-[#0D1B2A]">{stats.conversionRate}%</p>
          </div>
        </div>

        {/* Listings Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="border-b" style={{ borderColor: '#E5E7EB' }}>
            <div className="flex gap-8 px-6">
              <button onClick={() => setActiveTab('listings')} className={`py-4 border-b-2 font-bold transition-all ${activeTab === 'listings' ? 'border-[#2EC4B6] text-[#2EC4B6]' : 'border-transparent text-gray-500'}`}>My Listings</button>
              <button onClick={() => setActiveTab('analytics')} className={`py-4 border-b-2 font-bold transition-all ${activeTab === 'analytics' ? 'border-[#2EC4B6] text-[#2EC4B6]' : 'border-transparent text-gray-500'}`}>Analytics</button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'listings' && (
              <div className="space-y-4">
                {listings.length === 0 ? (
                   <div className="text-center py-20 text-gray-400">No listings found.</div>
                ) : (
                  listings.map(listing => {
                    const statusColors = getStatusColor(listing.status);
                    const isPremium = listing.tier === 'premium';
                    const isProcessing = processingId === listing.id;

                    return (
                      <div key={listing.id} className="p-5 border rounded-lg hover:shadow-md transition-shadow bg-white" style={{ borderColor: '#E5E7EB' }}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-bold text-[#0D1B2A]">{listing.publicData.title}</h4>
                              <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${isPremium ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}>
                                {listing.tier}
                              </span>
                            </div>
                            <p className="mb-2 font-bold text-[#2EC4B6]">AED {listing.publicData.price.toLocaleString()}</p>
                            <div className="flex flex-wrap items-center gap-4">
                              <span className="text-xs px-3 py-1 rounded font-bold uppercase" style={{ backgroundColor: statusColors.bg, color: statusColors.text }}>
                                {listing.status}
                              </span>
                              <span className="text-sm flex items-center gap-1 text-gray-500"><Eye className="w-4 h-4" />{listing.views || 0} views</span>
                              <span className="text-sm flex items-center gap-1 text-gray-500"><Users className="w-4 h-4" />{(listing as any).Leads?.length || 0} enquiries</span>
                              {listing.expiryDate && <span className="text-sm text-gray-400">Expires: {new Date(listing.expiryDate).toLocaleDateString()}</span>}
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            {/* Upgrade to Premium Button */}
                            {!isPremium && listing.status === 'active' && (
                              <button 
                                onClick={() => handlePaymentAction(listing.id, true)}
                                disabled={isProcessing}
                                className="px-3 py-2 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-xs font-bold flex items-center gap-1 hover:bg-amber-100"
                              >
                                {isProcessing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Star className="w-3 h-3" />}
                                Upgrade
                              </button>
                            )}
                            <Link to={`/listing/${listing.id}`} className="p-2 rounded-lg border hover:bg-gray-50" style={{ borderColor: '#E5E7EB' }}><Eye className="w-4 h-4 text-gray-400" /></Link>
                            <button className="p-2 rounded-lg border hover:bg-gray-50" style={{ borderColor: '#E5E7EB' }}><Edit className="w-4 h-4 text-gray-400" /></button>
                            <button onClick={() => handleDelete(listing.id)} className="p-2 rounded-lg border hover:bg-red-50" style={{ borderColor: '#E5E7EB' }}><Trash2 className="w-4 h-4 text-red-400" /></button>
                          </div>
                        </div>

                        {listing.status === 'expired' && (
                          <div className="mt-3 pt-3 border-t flex items-center justify-between border-gray-100">
                            <p className="text-sm text-gray-500">Your listing has expired. Renew to continue receiving leads.</p>
                            <button 
                              onClick={() => handlePaymentAction(listing.id, false)}
                              disabled={isProcessing}
                              className="px-4 py-2 rounded-lg bg-[#2EC4B6] text-white text-sm font-bold flex items-center gap-2"
                            >
                              {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
                              Pay & Renew (AED 499)
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            )}

            {/* Analytics Tab (Already linked to listings state) */}
            {activeTab === 'analytics' && (
              <div>
                <h3 className="mb-4 font-bold text-[#0D1B2A]">Performance Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg bg-gray-50 border-gray-100">
                    <h4 className="font-bold mb-2">View Share</h4>
                    <p className="text-sm mb-4 text-gray-500">How your listings compare in traffic</p>
                    <div className="space-y-4">
                       {listings.map(l => (
                          <div key={l.id}>
                             <div className="flex justify-between text-xs mb-1 font-medium">
                                <span>{l.publicData.title}</span>
                                <span>{l.views || 0} views</span>
                             </div>
                             <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2EC4B6]" style={{ width: `${stats.totalViews > 0 ? ((l.views || 0) / stats.totalViews) * 100 : 0}%` }} />
                             </div>
                          </div>
                       ))}
                    </div>
                  </div>
                  <div className="p-6 border rounded-lg bg-[#0D1B2A] text-white">
                    <h4 className="font-bold mb-2 text-[#2EC4B6]">Lead Generation</h4>
                    <p className="text-sm mb-6 text-gray-400">Total verified leads across all businesses</p>
                    <div className="text-center py-4">
                       <p className="text-6xl font-bold mb-2">{stats.totalEnquiries}</p>
                       <p className="text-xs uppercase tracking-widest text-[#2EC4B6]">Verified Potential Buyers</p>
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