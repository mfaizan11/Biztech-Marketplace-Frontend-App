import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types';
import { TestingInfo } from '../components/TestingInfo';

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'buyer' as UserRole,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Mock login - in production this would validate against backend
      await login(formData.email, formData.password, formData.role);
      // Redirect to appropriate dashboard based on role
      navigate(`/dashboard/${formData.role}`);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center" style={{ backgroundColor: '#E8EDF2' }}>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded" style={{ backgroundColor: '#0D1B2A' }}>
              <span className="text-xl" style={{ color: '#2EC4B6' }}>B</span>
            </div>
            <span className="text-xl" style={{ color: '#0D1B2A' }}>Biz Marketplace</span>
          </div>
          <h1 className="mb-2" style={{ color: '#0D1B2A' }}>Welcome Back</h1>
          <p style={{ color: '#6B7280' }}>Sign in to access your dashboard</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="mb-2" style={{ color: '#0D1B2A' }}>Sign In</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>Enter your credentials to continue</p>

          {/* Testing Info Banner */}
          <TestingInfo />

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selector (For Testing) */}
            <div>
              <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                Select Role (Testing)
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: '#E5E7EB',
                  color: '#374151'
                }}
              >
                <option value="admin">Admin</option>
                <option value="agent">Agent</option>
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: '#E5E7EB',
                  color: '#374151'
                }}
                placeholder="you@company.com"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm" style={{ color: '#374151' }}>
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm" style={{ color: '#2EC4B6' }}>
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all pr-12"
                  style={{
                    borderColor: '#E5E7EB',
                    color: '#374151'
                  }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: '#9CA3AF' }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: '#0D1B2A',
                color: 'white'
              }}
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: '#E5E7EB' }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white" style={{ color: '#6B7280' }}>New to Biz Marketplace?</span>
              </div>
            </div>

            {/* Create Account Button */}
            <Link to="/register">
              <button
                type="button"
                className="w-full py-3 rounded-lg border-2 transition-all hover:bg-opacity-5"
                style={{
                  borderColor: '#2EC4B6',
                  color: '#2EC4B6',
                  backgroundColor: 'transparent'
                }}
              >
                Create an Account
              </button>
            </Link>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-sm" style={{ color: '#6B7280' }}>
          By signing in, you agree to our{' '}
          <Link to="/terms" style={{ color: '#2EC4B6' }}>Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" style={{ color: '#2EC4B6' }}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};