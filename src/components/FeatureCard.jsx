import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ number, title, description }) => {
  return (
    <div className="card border-2 border-[#e6e5e5] rounded-2xl bg-[#f4f4f4] hover:bg-white p-6 flex flex-col gap-3 hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <h1 className="text-5xl font-semibold text-[#6579C1]">{number}</h1>
      <h2 className="text-2xl font-semibold text-[#1f1f1f] w-[8rem]">{title}</h2>
      <p className="text-[#393939] text-sm leading-relaxed mb-3 ">{description}</p>
      <button className="mt-auto self-start px-4 py-2 text-[#6579C1] border-3 border-[#5568a8] rounded-[2rem] hover:bg-[#5568a8] hover:text-white transition-colors duration-300">
        Learn More
        </button>
    </div>
  );
};

/* The code snippet `FeatureCard.propTypes = { ... }` is defining the PropTypes for the `FeatureCard`
component in React. PropTypes are used for type-checking to ensure that the correct type of data is
passed to the component props. */
FeatureCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
