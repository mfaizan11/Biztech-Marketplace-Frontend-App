// API Service Layer
// This file contains all API calls to the backend

import { User, Listing, Lead, ValuationRequest } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

// Generic API call function
async function apiCall<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// Authentication APIs
export const authAPI = {
  login: async (email: string, password: string) => {
    return apiCall<{ user: User; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (userData: Partial<User>) => {
    return apiCall<{ user: User; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  logout: async () => {
    return apiCall('/auth/logout', { method: 'POST' });
  },
};

// Listings APIs
export const listingsAPI = {
  getAll: async (filters?: Record<string, any>) => {
    const queryParams = new URLSearchParams(filters).toString();
    return apiCall<Listing[]>(`/listings?${queryParams}`);
  },

  getById: async (id: string) => {
    return apiCall<Listing>(`/listings/${id}`);
  },

  create: async (listingData: Partial<Listing>) => {
    return apiCall<Listing>('/listings', {
      method: 'POST',
      body: JSON.stringify(listingData),
    });
  },

  update: async (id: string, listingData: Partial<Listing>) => {
    return apiCall<Listing>(`/listings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(listingData),
    });
  },

  delete: async (id: string) => {
    return apiCall(`/listings/${id}`, { method: 'DELETE' });
  },
};

// Leads APIs
export const leadsAPI = {
  create: async (leadData: Partial<Lead>) => {
    return apiCall<Lead>('/leads', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
  },

  getByAgent: async (agentId: string) => {
    return apiCall<Lead[]>(`/leads/agent/${agentId}`);
  },

  updateStatus: async (leadId: string, status: string) => {
    return apiCall<Lead>(`/leads/${leadId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },
};

// Valuation APIs
export const valuationAPI = {
  submit: async (valuationData: Partial<ValuationRequest>) => {
    return apiCall<ValuationRequest>('/valuations', {
      method: 'POST',
      body: JSON.stringify(valuationData),
    });
  },
};

// Admin APIs
export const adminAPI = {
  assignListingToAgent: async (listingId: string, agentId: string) => {
    return apiCall(`/admin/listings/${listingId}/assign`, {
      method: 'POST',
      body: JSON.stringify({ agentId }),
    });
  },

  getPendingListings: async () => {
    return apiCall<Listing[]>('/admin/listings/pending');
  },

  createAgent: async (agentData: Partial<User>) => {
    return apiCall<User>('/admin/agents', {
      method: 'POST',
      body: JSON.stringify(agentData),
    });
  },
};

// Payment APIs
export const paymentAPI = {
  createSubscription: async (subscriptionData: {
    userId: string;
    tier: string;
    amount: number;
  }) => {
    return apiCall('/payments/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscriptionData),
    });
  },

  verifyPayment: async (paymentId: string) => {
    return apiCall(`/payments/verify/${paymentId}`);
  },
};
