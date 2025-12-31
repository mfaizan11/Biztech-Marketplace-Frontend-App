import React from 'react';

interface DashboardHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, description, children, action }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: '#0D1B2A' }}>{title}</h1>
          <p className="text-gray-500 mt-1">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          {action}
          {children}
        </div>
      </div>
    </div>
  );
};