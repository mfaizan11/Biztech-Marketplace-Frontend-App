// Global Type Definitions for BizTech Buy & Sell Module

export type UserRole = 'admin' | 'agent' | 'seller' | 'buyer';

export type FinancialMeans = '<100k' | '100k-1M' | '>1M';

export type ListingTier = 'basic' | 'premium';

export type ListingStatus = 'draft' | 'pending' | 'active' | 'expired';

export type LeadStatus = 'new' | 'contacted' | 'closed';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  financialMeans?: FinancialMeans;
  createdAt: string;
  agreedToCommission?: boolean;
}

export interface PublicListingData {
  title: string;
  industry: string;
  region: string;
  price: number;
  netProfit: number;
  turnover: number;
}

export interface PrivateListingData {
  legalBusinessName: string;
  fullAddress: string;
  ownerName: string;
}

export interface Listing {
  id: string;
  sellerId: string;
  assignedAgentId?: string;
  publicData: PublicListingData;
  privateData?: PrivateListingData;
  tier: ListingTier;
  status: ListingStatus;
  expiryDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Lead {
  id: string;
  listingId: string;
  buyerId: string;
  buyerName: string;
  buyerEmail: string;
  buyerFinancialMeans: FinancialMeans;
  message: string;
  status: LeadStatus;
  createdAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  listingId: string;
  amount: number;
  paymentProviderId: string;
  startDate: string;
  endDate: string;
  tier: ListingTier;
}

export interface ValuationRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
  createdAt: string;
}
