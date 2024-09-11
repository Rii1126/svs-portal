import React from "react";
import PropTypes from "prop-types";

const PricingCard = ({
  title,
  description,
  price,
  features = [],
  buttonText,
  buttonLink,
  imageUrl,
  icon,
}) => {
  const titleHeight = "120px";
  const priceHeight = "50px";
  const buttonHeight = "50px";
  const totalStaticHeight =
    parseInt(titleHeight) + parseInt(priceHeight) + parseInt(buttonHeight);

  const featuresListMaxHeight = `calc(500px - ${totalStaticHeight}px)`;

  return (
    <div className="flex flex-col justify-between border-gray-600 border-[1px] text-white shadow-lg rounded-lg p-4 sm:p-5 md:p-6 w-[220px] sm:w-[240px] md:w-[280px] lg:w-[350px] h-[500px] sm:h-[500px] mx-2">
      {icon && (
        <div className="absolute top-4 left-4 text-lg text-fuchsia-500">
          {icon}
        </div>
      )}
      <div className="flex-grow flex flex-col">
        <div
          className="text-center mb-4 flex justify-center flex-col items-center"
          style={{ height: titleHeight }}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt="pricing plan"
              className="w-[80px] h-auto mb-3"
            />
          )}
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            {title}
          </h1>
          <p className="text-white text-xs sm:text-sm mb-2">{description}</p>
        </div>
        <div className="text-center mb-4" style={{ height: priceHeight }}>
          <div className="text-sm sm:text-base md:text-lg font-semibold mb-3 text-white">
            {price}
          </div>
          <div
            className="flex-grow overflow-y-auto pr-2 custom-scrollbar"
            style={{ maxHeight: featuresListMaxHeight }}
          >
            {features.length > 0 ? (
              <ul className="list-none text-left text-xs sm:text-sm space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-white">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-fuchsia-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white text-xs sm:text-sm">
                No features available
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-auto px-2 sm:px-3" style={{ height: buttonHeight }}>
        <a
          href={buttonLink}
          className="block w-full text-center bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors duration-300 text-white text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-5 rounded-full shadow-lg"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  icon: PropTypes.node,
};

PricingCard.defaultProps = {
  features: [],
  imageUrl: "",
  icon: null,
};

export default PricingCard;
