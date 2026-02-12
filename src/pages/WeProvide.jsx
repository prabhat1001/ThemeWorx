import React from "react";
import { features } from "../data/features";
import FeatureCard from "../components/FeatureCard";
import Skelly from "../assets/skelly.gif";

const WeProvide = () => {
  return (
    <section className="w-full min-h-screen px-6 md:px-10 py-16 bg-white font-poppins">
      {/* Header */}
      <div className=" mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f1f1f]">
          We Provide
        </h1>
        <p className="mt-3 text-md text-[#626262]">
          Experience the magic of coding with customized themes <br />
          that match your passions.
        </p>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-6 ">
  {/* Feature Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-2/3">
    {features.map((feature) => (
      <FeatureCard key={feature.number} {...feature} />
    ))}
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-1/3 flex items-stretch">
    <div className="w-full rounded-3xl overflow-hidden border-4 border-[#e6e5e5]">
      <img
        src={Skelly}
        alt="Animated skeleton"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
</div>
    </section>
  );
};

export default WeProvide;
