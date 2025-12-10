import React from 'react';
import { Info } from 'lucide-react';

export const TestingInfo: React.FC = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm mb-2" style={{ color: '#0D1B2A' }}>
            Testing Mode - Quick Access
          </h4>
          <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
            Select a role above and sign in with any email/password to test the dashboards:
          </p>
          <ul className="text-sm space-y-1" style={{ color: '#6B7280' }}>
            <li><strong style={{ color: '#2EC4B6' }}>Admin:</strong> Manage users, listings, and agent assignments</li>
            <li><strong style={{ color: '#2EC4B6' }}>Agent:</strong> Handle assigned listings and buyer enquiries</li>
            <li><strong style={{ color: '#2EC4B6' }}>Seller:</strong> Create and manage business listings</li>
            <li><strong style={{ color: '#2EC4B6' }}>Buyer:</strong> Browse, save, and enquire about businesses</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
