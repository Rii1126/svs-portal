import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Services = () => {
  const services = [
    {
      title: "Public RPC Node Access",
      description: `Global RPC node infrastructure with highly secure and reliable endpoints spread across multiple data centers.`,
      getStarted: [
        "View RPC URLs",
        "Set autoscaling preferences",
        "Buy prepaid credits (for crypto plans)",
        "Websockets: Native and Enhanced",
      ],
      button: "View Endpoints",
      link: "/endpoints", // This is the route for your Endpoints page
    },
    {
      title: "Stake-Weighted QoS Send-Transaction Service",
      description: `Accelerate transaction processing by leveraging staked validators to prioritize your transactions.`,
      getStarted: [
        "Configure stake-weighted endpoints",
        "Set transaction speed preferences",
        "Stake QoS prioritization",
      ],
      button: "Learn More",
      link: "/qos-send-transaction",
    },
    {
      title: "Public Geyser gRPC Streaming",
      description: `Real-time gRPC streaming for Solana validators, giving you access to the most up-to-date data streams.`,
      getStarted: [
        "Enable streaming endpoints",
        "Monitor real-time gRPC streams",
        "Configure validator-level data access",
      ],
      button: "Set Up Streaming",
      link: "/grpc-streaming",
    },
    {
      title: "Private VPS Node Access",
      description: `Access your own private Solana node with customizable specs and dedicated hardware for maximum performance.`,
      getStarted: [
        "Choose your VPS plan",
        "Customize hardware settings",
        "Request dedicated VPS node",
      ],
      button: "Purchase VPS",
      link: "/vps-node",
    },
    {
      title: "RPC Node Consulting Services",
      description: `Get expert advice on how to optimize, configure, and scale your RPC infrastructure for Solana-based projects.`,
      getStarted: [
        "Consult with our RPC experts",
        "Schedule a configuration review",
        "Learn optimization best practices",
      ],
      button: "Book a Consultation",
      link: "/rpc-consulting",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-[#0A0A0A] border border-[#AAAAAA] p-6 rounded-lg shadow-lg text-[#dadada] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="mb-4">{service.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold">Get Started:</h4>
              <ul className="list-disc list-inside text-gray-400">
                {service.getStarted.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            to={service.link} // Use React Router's Link component
            className="mt-auto bg-pink-600 text-white py-2 px-4 rounded-full shadow-lg text-center transition duration-200 transform hover:scale-105"
          >
            {service.button}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
