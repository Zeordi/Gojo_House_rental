import React from "react";
import {
  HomeIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

/**
 * Reusable "Why Choose Us" section
 * Enhanced with icons for better visual clarity
 */

const features = [
  {
    title: "Easy Property Management",
    description:
      "Manage listings, tenants, and rental details from a single dashboard.",
    icon: HomeIcon,
  },
  {
    title: "Secure & Reliable",
    description:
      "Your data and transactions are handled with security and reliability in mind.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Built for Owners & Tenants",
    description:
      "Designed to simplify renting for both property owners and tenants.",
    icon: UsersIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Why Choose <span className="text-indigo-500">US</span>?
        </h2>

        {/* Section Subtitle */}
        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
          A simple, secure, and reliable platform designed to make rental
          management easier for everyone.
        </p>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:border-indigo-100 text-center"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-indigo-500" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
