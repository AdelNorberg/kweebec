import React from "react";
import { injectIntl } from "react-intl";
import { compose } from "redux";
import { connect } from "react-redux";
import { selectLanguage } from "../../actions";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlockWrapper } from "../../helpers/BlockWrapper";
import TopNavItem from "./TopNavItem";
import {
  selectStyles,
  toOptionsFormat,
} from "../../helpers/reactSelectHelpers";
import Select from "react-select";

import TasksSVG from "../../Resources/icons/tasks.svg";
import CrownSVG from "../../Resources/icons/crown.svg";
import CupSVG from "../../Resources/icons/cup.svg";
import BoxSVG from "../../Resources/icons/box.svg";
import BellSVG from "../../Resources/icons/bell.svg";

const Wrapper = styled(BlockWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: unset;
`;
const ItemsWrapper = styled.div`
  display: flex;
  height: 100%;

  & > a:first-child div {
    border-radius: 7px 0 0 7px;
  }

  & > a:last-child div {
    border-right: none;
  }
`;
const Additional = styled.div`
  display: flex;
  align-items: center;
`;
const Notifications = styled.div`
  display: flex;
  margin-right: 10px;

  svg {
    margin-right: 9px;
    fill: ${({ theme }) => theme.textSecondary};
    transition: all 0.6s ease;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      fill: #ccc;
    }
  }
`;

class TopNav extends React.Component {
  handleSelectChange = ({ value }) => {
    this.props.selectLanguage(value);
  };

  render() {
    const {
      props: { config, intl },
      handleSelectChange,
    } = this;

    const items = [
      {
        svg: <TasksSVG />,
        label: intl.formatMessage({ id: "TopNav.questsItemLabel" }),
        link: "/home/quests",
      },
      {
        svg: <CrownSVG />,
        label: intl.formatMessage({
          id: "TopNav.privilegeItemLabel",
        }),
        link: "/home/privilege",
      },
      {
        svg: <CupSVG />,
        label: intl.formatMessage({ id: "TopNav.rankItemLabel" }),
        link: "/home/rank",
      },
      {
        svg: <BoxSVG />,
        label: intl.formatMessage({ id: "TopNav.lootItemLabel" }),
        link: "/home/loot",
      },
    ];

    return (
      <Wrapper>
        <ItemsWrapper>
          {items.map((item, id) => (
            <Link to={item.link} key={id}>
              <TopNavItem {...item} />
            </Link>
          ))}
        </ItemsWrapper>
        <Additional>
          <Notifications>
            <BellSVG />
          </Notifications>
          <Select
            onChange={handleSelectChange}
            options={toOptionsFormat(config.languages)}
            isSearchable={false}
            defaultValue={{
              value: config.selectedLanguage,
              label: config.selectedLanguage.toUpperCase(),
            }}
            styles={selectStyles}
          />
        </Additional>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  config: state.config,
});

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    { selectLanguage }
  )
)(TopNav);
