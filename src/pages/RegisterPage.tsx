import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Info } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password validation
  const passwordValidation = {
    minLength: formData.password.length >= 8,
    hasNumber: /\d/.test(formData.password),
    hasUppercase: /[A-Z]/.test(formData.password),
  };

  const isPasswordValid = passwordValidation.minLength && passwordValidation.hasNumber && passwordValidation.hasUppercase;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!isPasswordValid) {
      alert('Please meet all password requirements');
      return;
    }

    // Mock registration - in production, this would call an API
    console.log('Registration data:', formData);
    navigate('/signin');
  };

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center" style={{ backgroundColor: '#E8EDF2' }}>
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded" style={{ backgroundColor: '#0D1B2A' }}>
              <span className="text-xl" style={{ color: '#2EC4B6' }}>B</span>
            </div>
            <span className="text-xl" style={{ color: '#0D1B2A' }}>BizTech</span>
          </div>
          <h1 className="mb-2" style={{ color: '#0D1B2A' }}>Join BizTech Today</h1>
          <p style={{ color: '#6B7280' }}>Connect with partners and opportunities worldwide</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="mb-2" style={{ color: '#0D1B2A' }}>Client Registration</h2>
          <p className="mb-6 text-sm" style={{ color: '#6B7280' }}>
            Fill in your details below. Your account will require admin approval.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name and Company - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Full Name <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: '#E5E7EB',
                    color: '#374151'
                  }}
                  placeholder="John Doe"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Company Name <span className="text-xs" style={{ color: '#6B7280' }}>(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: '#E5E7EB',
                    color: '#374151'
                  }}
                  placeholder="Your Company LLC"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                Email Address <span style={{ color: '#EF4444' }}>*</span>
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

            {/* Phone Number */}
            <div>
              <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                Phone Number <span className="text-xs" style={{ color: '#6B7280' }}>(Optional)</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: '#E5E7EB',
                  color: '#374151'
                }}
                placeholder="+971 50 000 0000"
              />
            </div>

            {/* Password and Confirm - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Password */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Password <span style={{ color: '#EF4444' }}>*</span>
                </label>
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
                    placeholder="Create password"
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

              {/* Confirm Password */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Confirm Password <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all pr-12"
                    style={{
                      borderColor: '#E5E7EB',
                      color: '#374151'
                    }}
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: '#9CA3AF' }}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="space-y-2">
              <p className="text-sm" style={{ color: '#6B7280' }}>Password requirements:</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordValidation.minLength ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {passwordValidation.minLength && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span style={{ color: passwordValidation.minLength ? '#10B981' : '#6B7280' }}>
                    At least 8 characters
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordValidation.hasNumber ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {passwordValidation.hasNumber && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span style={{ color: passwordValidation.hasNumber ? '#10B981' : '#6B7280' }}>
                    Contains a number
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordValidation.hasUppercase ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {passwordValidation.hasUppercase && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span style={{ color: passwordValidation.hasUppercase ? '#10B981' : '#6B7280' }}>
                    Contains uppercase
                  </span>
                </div>
              </div>
            </div>

            {/* Admin Approval Notice */}
            <div className="p-4 rounded-lg flex gap-3" style={{ backgroundColor: '#CFFAFE', borderLeft: '4px solid #2EC4B6' }}>
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0891B2' }} />
              <div>
                <p className="text-sm mb-1" style={{ color: '#0D1B2A' }}>Admin Approval Required</p>
                <p className="text-sm" style={{ color: '#0E7490' }}>
                  Your account will be reviewed by our team. You&apos;ll receive an email once approved (typically within 24-48 hours).
                </p>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: '#0D1B2A',
                color: 'white'
              }}
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: '#E5E7EB' }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white" style={{ color: '#6B7280' }}>Already registered?</span>
              </div>
            </div>

            {/* Sign In Button */}
            <Link to="/signin">
              <button
                type="button"
                className="w-full py-3 rounded-lg border-2 transition-all hover:bg-opacity-5"
                style={{
                  borderColor: '#2EC4B6',
                  color: '#2EC4B6',
                  backgroundColor: 'transparent'
                }}
              >
                Sign In Instead
              </button>
            </Link>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-sm" style={{ color: '#6B7280' }}>
          By creating an account, you agree to our{' '}
          <Link to="/terms" style={{ color: '#2EC4B6' }}>Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" style={{ color: '#2EC4B6' }}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};