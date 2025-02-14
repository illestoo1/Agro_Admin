"use client";
import React from "react";
import Card from "../../../../components/card";
import LogisticsManagement from "../../../../components/LogisticsManagement";

const CardGrid = () => {
  const cards = [
    {
      title: "Vendors",
      icon: "mdi:person",
      percentage: 75,
      unit: { before: "Visits", after: "Today" },
    },
    {
      title: "Orders",
      icon: "mdi:shopping",
      percentage: 50,
      unit: { before: "Sales", after: "This Week" },
    },
    {
      title: "Products",
      icon: "mdi:shopping",
      percentage: 90,
      unit: { before: "Reports", after: "This Month" },
    },
    {
      title: "Commission",
      icon: "mdi:email",
      percentage: 65,
      unit: { before: "Emails", after: "Unread" },
    },
  ];

  return (
    <div className="">
      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 sm:p-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            percentage={card.percentage}
            unit={card.unit}
          />
        ))}
      </div>
      <div>
        < LogisticsManagement />
      </div>
    </div>
  );
};

export default CardGrid;
