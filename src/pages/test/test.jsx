import React, { useState, useEffect } from "react";
import PricingCard from "../../components/Pricingcard/Pricingcard";
import firstImageIcon from "../../assets/first-image-icon.png";
import secondImageIcon from "../../assets/second-image-icon.png";
import thirdImageIcon from "../../assets/third-image-icon.png";
import forthImageIcon from "../../assets/forth-image-icon.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cgradients from "../../components/Cgradients/Cgradients";
import { FaBolt, FaCloud, FaServer, FaRocket } from "react-icons/fa";

const Billing = () => {
  // ... (previous state and functions remain the same)

  return (
    <div id="pricing" className="relative">
      {/* ... (previous JSX remains the same) */}

      {/* Pricing Cards */}
      <div className="flex flex-row min-h-96 flex-wrap gap-2 justify-center items-stretch pb-8">
        {(pricingData[pricingOption] || []).map((plan, index) => {
          let imageUrl = forthImageIcon;

          if (plan.title === "RPC" && rpcFeatureIndex === 1) {
            imageUrl = secondImageIcon;
          } else if (plan.title === "gRPC") {
            imageUrl = thirdImageIcon;
          } else if (plan.title !== "Private VPS Node Access") {
            imageUrl = firstImageIcon;
          }

          return (
            <div key={index} className="relative">
              <PricingCard
                title={
                  plan.title === "RPC" && rpcFeatureIndex === 1
                    ? "Ultra RPC"
                    : plan.title
                }
                description={
                  plan.title === "gRPC"
                    ? grpcFeatureIndex === 0
                      ? "Standard Streaming Tier"
                      : grpcFeatureIndex === 1
                      ? "Ultra Streaming Tier"
                      : "Elite Streaming Tier"
                    : plan.title === "Private VPS Node Access"
                    ? vpsFeatureIndex === 0
                      ? "Ubuntu Linux"
                      : "Windows Desktop"
                    : plan.title === "RPC"
                    ? rpcFeatureIndex === 0
                      ? "Basic RPC Plan"
                      : rpcFeatureIndex === 1
                      ? "Premium RPC Plan"
                      : "Premium RPC Plan"
                    : plan.description
                }
                price={
                  plan.title === "gRPC"
                    ? plan.price[grpcFeatureIndex]
                    : plan.title === "Private VPS Node Access"
                    ? plan.price[vpsFeatureIndex]
                    : plan.price[rpcFeatureIndex]
                }
                features={
                  Array.isArray(plan.features)
                    ? plan.features[
                        plan.title === "gRPC"
                          ? grpcFeatureIndex
                          : plan.title === "Private VPS Node Access"
                          ? vpsFeatureIndex
                          : rpcFeatureIndex
                      ]
                    : plan.features
                }
                buttonText={
                  plan.title === "RPC" && rpcFeatureIndex === 1
                    ? ""
                    : "Purchase with crypto"
                }
                buttonLink={
                  plan.title === "RPC" && rpcFeatureIndex === 1
                    ? "#"
                    : "https://example.com/start"
                }
                imageUrl={imageUrl}
                icon={getIcon(plan.title)}
              />
              <div className="mt-2 space-y-2">
                <button className="bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-500 w-full">
                  Upgrade with Crypto
                </button>
                <button className="bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-500 w-full">
                  Upgrade with Card
                </button>
              </div>
              {/* ... (navigation buttons remain the same) */}
            </div>
          );
        })}
      </div>

      {/* ... (rest of the component remains the same) */}
    </div>
  );
};

export default Billing;
