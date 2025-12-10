import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types';

interface DashboardHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, description, children, action }) => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [showRoleSwitcher, setShowRoleSwitcher] = React.useState(false);

  const switchRole = async (newRole: UserRole) => {
    if (user) {
      await login(user.email, 'password', newRole);
      navigate(`/dashboard/${newRole}`);
      setShowRoleSwitcher(false);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 style={{ color: '#0D1B2A' }}>{title}</h1>
          <p style={{ color: '#6B7280' }}>{description}</p>
        </div>
        {action}
        {children}
      </div>

      {/* Role Switcher - Testing Only */}
      <div className="mt-4 relative">
        <button
          onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
          className="text-xs px-3 py-1 rounded border"
          style={{ 
            borderColor: '#E5E7EB', 
            color: '#6B7280',
            backgroundColor: '#F9FAFB'
          }}
        >
          🔄 Switch Role (Testing)
        </button>

        {showRoleSwitcher && (
          <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10 min-w-[200px]">
            <button
              onClick={() => switchRole('admin')}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${user?.role === 'admin' ? 'bg-blue-50' : ''}`}
              style={{ color: user?.role === 'admin' ? '#2EC4B6' : '#374151' }}
            >
              Admin Dashboard
            </button>
            <button
              onClick={() => switchRole('agent')}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${user?.role === 'agent' ? 'bg-blue-50' : ''}`}
              style={{ color: user?.role === 'agent' ? '#2EC4B6' : '#374151' }}
            >
              Agent Dashboard
            </button>
            <button
              onClick={() => switchRole('seller')}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${user?.role === 'seller' ? 'bg-blue-50' : ''}`}
              style={{ color: user?.role === 'seller' ? '#2EC4B6' : '#374151' }}
            >
              Seller Dashboard
            </button>
            <button
              onClick={() => switchRole('buyer')}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${user?.role === 'buyer' ? 'bg-blue-50' : ''}`}
              style={{ color: user?.role === 'buyer' ? '#2EC4B6' : '#374151' }}
            >
              Buyer Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};