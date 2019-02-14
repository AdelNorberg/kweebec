import React from "react";
import styled from "styled-components";

import Tab from "./Tab";

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
    activeTab: 0,
  };

  handleTabClick = id => {
    this.setState({
      activeTab: id,
    });
  };

  render() {
    const {
      props: { children, customStyles },
      state: { activeTab },
      handleTabClick,
    } = this;

    return (
      <TabsWrapper>
        <TabList customStyles={customStyles.tabList}>
          {children.map((child, id) => (
            <Tab
              key={id}
              id={id}
              activeTab={activeTab}
              onClick={handleTabClick}
              customStyles={customStyles.tab}
              {...child.props}
            />
          ))}
        </TabList>
        <TabPanel customStyles={customStyles.tabPanel}>
          {children.map((child, id) =>
            id === activeTab ? child.props.children : null
          )}
        </TabPanel>
      </TabsWrapper>
    );
  }
}

export default Tabs;
