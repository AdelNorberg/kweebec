import React from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
  display: flex;
  height: 100%;
`;
const TabList = styled.div(props => ({
  display: "flex",
  ...props.customStyles,
}));
const TabPanel = styled.div(props => ({
  flex: 1,
  ...props.customStyles,
}));

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };

  handleTabClick = tab => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    const {
      props: { children, styles },
      state: { activeTab },
      handleTabClick,
    } = this;
    return (
      <TabsWrapper>
        <TabList customStyles={styles.tabList}>
          {children.map(child => (
            <Tab
              key={child.props.label}
              activeTab={activeTab}
              onClick={handleTabClick}
              customStyles={styles.tab}
              {...child.props}
            />
          ))}
        </TabList>
        <TabPanel customStyles={styles.tabPanel}>
          {children.map(child =>
            child.props.label !== activeTab ? undefined : child.props.children
          )}
        </TabPanel>
      </TabsWrapper>
    );
  }
}

const TabWrapper = styled.div(
  ({
    customStyles: { dangerColor, activeColor, hoverColor },
    danger,
    activeTab,
  }) => ({
    margin: danger ? "20px 0 0 0" : "7px 0",
    transition: "all 0.6s ease",
    cursor: "pointer",
    color: danger ? dangerColor : activeTab ? activeColor : "inherit",

    "&:hover": {
      color: danger ? "" : hoverColor,
    },
  })
);

const Tab = props => {
  const { label, activeTab, onClick, danger, customStyles } = props;
  return (
    <TabWrapper
      customStyles={customStyles}
      danger={danger}
      activeTab={label === activeTab}
      onClick={() => onClick(label)}
    >
      {label}
    </TabWrapper>
  );
};

export default Tabs;
