export const apiConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    endpoints: {
      authentication: {
        login: "/login",
        register: "/register",
        forgot_password: "/forgot_password",
      },
      user: {
        payment: {},
        retrieve_user_details: "/user",
        update_user_info: "/user/update",
        update_password: "/user/update_password",
        retrieve_referral_code: "/user/referral_code",
        retrieve_referrals: "/user/referrals",
        services: {
          retrieve_services: "/services"
        },
        purchase: {
          purchase_new_service: "/create-checkout-session",
          get_payment_status: "/session-status?session_id=cs_test_a1pHQr33sv7fvNMyug3DB8XHxgNF8v7zKFDws4NfwJm4qnKyx0uFLfBQoz"
        }
      },
      subscriptions: {
        renew: {
          renew_subscription: "/subscriptions/renew"
        },
        update: {
          update_whitelist: "/subscriptions/update"
        },
        get_subscriptions: "/subscriptions",
        add_subscriptions: "/subscriptions"
      },
    },
  };
  