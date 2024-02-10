import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (index, tab) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(index, tab);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data?.map((tab, index) => {
          return (
            <span
              key={index}
              className={`tabItem ${selectedTab === index ? "active" : ""}`}
              onClick={() => activeTab(index, tab)}
            >
              {tab}
            </span>
          );
        })}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
