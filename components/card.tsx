"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface CardProps {
  title: string;
  icon: string;
  percentage: number;
  unit: {
    before: string;
    after: string;
  };
}

const Card: React.FC<CardProps> = ({ title, icon, percentage, unit }) => {
  return (
    <div className="p-4 sm:p-6 h-[300px] md:h-[200px]  bg-[#86B159] rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      {/* Icon and Title */}
      <div className="flex justify-between items-center">
        <span className="text-lg md:text-xl font-semibold text-white truncate">
          {title}
        </span>
        <Icon
          icon={icon}
          width={30}
          height={30}
          color="white"
          className="md:w-10 md:h-10"
        />
      </div>

      {/* Percentage and Units */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mt-4 md:mt-0 text-white">
        <span className="text-3xl md:text-4xl font-bold">{percentage}%</span>
        <span className="text-sm md:text-base text-gray-200 text-left md:text-right">
          {unit.before} - {unit.after}
        </span>
      </div>
    </div>
  );
};

export default Card;
