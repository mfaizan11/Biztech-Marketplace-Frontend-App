import React, { useState } from 'react';
import { FileText, BarChart3, ShieldCheck, Clock } from 'lucide-react';
import { DashboardHeader } from '../components/DashboardHeader';

export const AgentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'listings' | 'leads' | 'deliverables'>('listings');

  // Updated Mock data reflecting Paid vs Free deliverables
  const assignedListings = [
    { 
        id: '1', 
        title: 'Premium Restaurant - Dubai Marina', 
        seller: 'Ahmed Al Maktoum', 
        tier: 'premium', 
        salePack: 'pending', 
        projections: 'in_progress', 
        attestation: 'not_started' 
    },
    { 
        id: '2', 
        title: 'Boutique Coffee Shop - JLT', 
        seller: 'Sarah Johnson', 
        tier: 'basic', 
        salePack: 'n/a', 
        projections: 'n/a', 
        attestation: 'standard_assist' 
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DashboardHeader 
          title="Agent Workspace" 
          description="Manage assigned listings and fulfill Paid Service deliverables" 
        />

        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b" style={{ borderColor: '#E5E7EB' }}>
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('listings')}
                className={`py-4 border-b-2 font-medium transition-all ${activeTab === 'listings' ? 'border-[#2EC4B6] text-[#2EC4B6]' : 'border-transparent text-gray-500'}`}
              >
                Assigned Listings
              </button>
              <button
                onClick={() => setActiveTab('deliverables')}
                className={`py-4 border-b-2 font-medium transition-all ${activeTab === 'deliverables' ? 'border-[#2EC4B6] text-[#2EC4B6]' : 'border-transparent text-gray-500'}`}
              >
                Deliverables (Sale Packs)
              </button>
              <button
                onClick={() => setActiveTab('leads')}
                className={`py-4 border-b-2 font-medium transition-all ${activeTab === 'leads' ? 'border-[#2EC4B6] text-[#2EC4B6]' : 'border-transparent text-gray-500'}`}
              >
                Leads & Enquiries
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'listings' && (
              <div className="space-y-4">
                {assignedListings.map(listing => (
                  <div key={listing.id} className="p-4 border rounded-lg flex items-center justify-between" style={{ borderColor: '#E5E7EB' }}>
                    <div>
                      <h4 className="font-bold">{listing.title}</h4>
                      <div className="flex gap-2 mt-1">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${listing.tier === 'premium' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'}`}>
                          {listing.tier === 'premium' ? 'PAID SERVICE' : 'FREE AD'}
                        </span>
                        <p className="text-xs text-gray-500">Seller: {listing.seller}</p>
                      </div>
                    </div>
                    <button 
                        onClick={() => listing.tier === 'premium' ? setActiveTab('deliverables') : null}
                        className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {listing.tier === 'premium' ? 'Manage Sale Pack' : 'View Documentation'}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'deliverables' && (
              <div className="space-y-8">
                {assignedListings.filter(l => l.tier === 'premium').map(listing => (
                    <div key={listing.id} className="p-6 border rounded-xl bg-gray-50">
                        <h4 className="font-bold text-lg mb-4">{listing.title}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <FileText className="w-5 h-5 text-[#2EC4B6] mb-2" />
                                <h5 className="font-bold text-sm">Professional Sale Pack</h5>
                                <p className="text-xs text-gray-500 mb-3">Prepare business assessments for potential buyers.</p>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3 text-amber-500" />
                                    <span className="text-[10px] font-bold text-amber-600 uppercase">{listing.salePack}</span>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <BarChart3 className="w-5 h-5 text-[#2EC4B6] mb-2" />
                                <h5 className="font-bold text-sm">Financial Projections</h5>
                                <p className="text-xs text-gray-500 mb-3">Analysis and future projections of revenue.</p>
                                <button className="text-[10px] text-[#2EC4B6] font-bold hover:underline">UPLOAD DOCUMENTS</button>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <ShieldCheck className="w-5 h-5 text-[#2EC4B6] mb-2" />
                                <h5 className="font-bold text-sm">Legal Attestation</h5>
                                <p className="text-xs text-gray-500 mb-3">Arrangements for final transfer and legal checks.</p>
                                <span className="text-[10px] font-bold text-gray-400 uppercase">{listing.attestation.replace('_', ' ')}</span>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};