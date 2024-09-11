import { apiRequest } from './apiUtility'; // Assuming apiUtility contains your HTTP request functions
import { apiConfig } from './apiConfig';  // Assuming apiConfig contains your endpoint configurations

// User API Service
export const userApi = {
  // Retrieve user details
  getUserDetails: (token) =>
    apiRequest('GET', apiConfig.endpoints.user.retrieve_user_details, null, token),

  // Update user information
  updateUser: (userData, token) =>
    apiRequest('PUT', apiConfig.endpoints.user.update_user_info, userData, token),

  // Update user password
  updatePassword: (passwordData, token) =>
    apiRequest('PUT', apiConfig.endpoints.user.update_password, passwordData, token),

  // Retrieve referral code
  retrieveReferralCode: (token) =>
    apiRequest('GET', apiConfig.endpoints.user.retrieve_referral_code, null, token),

  // Retrieve referrals
  retrieveReferrals: (token) =>
    apiRequest('GET', apiConfig.endpoints.user.retrieve_referrals, null, token),

  // Retrieve available services
  retrieveServices: (token) =>
    apiRequest('GET', apiConfig.endpoints.user.services.retrieve_services, null, token),

  // Purchase new service
  purchaseNewService: (purchaseData, token) =>
    apiRequest('POST', apiConfig.endpoints.user.purchase.purchase_new_service, purchaseData, token),

  // Get payment status
  getPaymentStatus: (sessionId, token) =>
    apiRequest('GET', `${apiConfig.endpoints.user.purchase.get_payment_status}&session_id=${sessionId}`, null, token),

  // Retrieve all payments (admin)
  retrieveAllPayments: (token) =>
    apiRequest('GET', `${apiConfig.baseURL}/admin/payments`, null, token),
};

// Authentication API Service
export const authApi = {
  // Login user
  login: (credentials) =>
    apiRequest('POST', apiConfig.endpoints.authentication.login, credentials),

  // Register user
  register: (registrationData) =>
    apiRequest('POST', apiConfig.endpoints.authentication.register, registrationData),

  // Forgot password
  forgotPassword: (forgotEmail) =>
    apiRequest('POST', apiConfig.endpoints.authentication.forgot_password, { email: forgotEmail }),
};

// Subscription API Service
export const subscriptionApi = {
  // Renew subscription
  renewSubscription: (data, token) =>
    apiRequest('PUT', apiConfig.endpoints.subscriptions.renew.renew_subscription, data, token),

  // Update subscription whitelist
  updateSubscription: (data, token) =>
    apiRequest('PUT', apiConfig.endpoints.subscriptions.update.update_whitelist, data, token),

  // Get subscriptions
  getSubscriptions: (token) =>
    apiRequest('GET', apiConfig.endpoints.subscriptions.get_subscriptions, null, token),

  // Add a subscription
  addSubscription: (subscriptionData, token) =>
    apiRequest('POST', apiConfig.endpoints.subscriptions.add_subscriptions, subscriptionData, token),
};
