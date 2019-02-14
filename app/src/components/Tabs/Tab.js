import React from "react";
import styled from "styled-components";

const TabWrapper = styled.div(
  ({
    customStyles: {
      fontSize,
      fontWeight,
      dangerColor,
      activeColor,
      hoverColor,
    },
    isActive,
    isDanger,
  }) => ({
    margin: isDanger ? "20px 0 0 0" : "7px 0",
    transition: "all 0.6s ease",
    cursor: "pointer",
    color: isDanger ? dangerColor : isActive ? activeColor : "inherit",
    fontSize: fontSize || "16px",
    fontWeight: isDanger ? "700" : fontWeight || "500",

    "&:hover": {
      color: isDanger ? "" : hoverColor,
    },
  })
);

const Tab = ({ label, id, activeTab, onClick, danger, customStyles }) => {
  return (
    <TabWrapper
      customStyles={customStyles}
      onClick={() => onClick(id)}
      isActive={id === activeTab}
      isDanger={danger}
    >
      {label}
    </TabWrapper>
  );
};

export default Tab;
