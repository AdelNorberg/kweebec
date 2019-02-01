import React from "react";
import styled from "styled-components";
import { BlockWrapper } from "../../shared";
import TopNavItem from "./TopNavItem";
import Select from "react-select";

import Tasks from "../../Resources/icons/tasks.svg";
import Crown from "../../Resources/icons/crown.svg";
import Cup from "../../Resources/icons/cup.svg";
import Box from "../../Resources/icons/box.svg";
import Bell from "../../Resources/icons/bell.svg";

const Wrapper = styled(BlockWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemsWrapper = styled.div`
  display: flex;

  & > div:first-child {
    border-radius: 7px 0 0 7px;
  }

  & > div:last-child {
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
    fill: ${props => props.theme.textSecondary};
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

const languages = [
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
  { value: "ua", label: "UA" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#2F3136",
    borderRadius: `${state.menuIsOpen ? "0 7px 0 0" : "0 7px 7px 0"}`,
    border: "none",
    borderLeft: "2px solid #2a2c30",
    cursor: "pointer",
    height: "69px",
    width: "60px",
    boxShadow: "none",
    fontWeight: "bold",
    "&:hover": {
      borderColor: "#2a2c30",
    },
  }),
  valueContainer: provided => ({
    ...provided,
    justifyContent: "center",
  }),
  singleValue: provided => ({
    ...provided,
    color: "#828282",
    marginLeft: "unset",
    marginRight: "unset",
    maxWidth: "100%",
    position: "unset",
    top: "unset",
    transform: "unset",
    cursor: "pointer",
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: "none",
  }),
  indicatorsContainer: provided => ({
    ...provided,
    display: "none",
  }),
  menu: provided => ({
    ...provided,
    margin: "0",
    borderRadius: "0 0 7px 7px",
    backgroundColor: "#2F3136",
    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
    fontWeight: "bold",
  }),
  option: provided => {
    console.log(provided);
    return {
      ...provided,
      cursor: "pointer",
      textAlign: "center",
    };
  },
};

class TopNav extends React.Component {
  state = {
    items: [
      { svg: <Tasks />, label: "Мои задания" },
      { svg: <Crown />, label: "Привилегии" },
      { svg: <Cup />, label: "Рейтинг" },
      { svg: <Box />, label: "Сундуки" },
    ],
  };

  render() {
    return (
      <Wrapper>
        <ItemsWrapper>
          {this.state.items.map(item => (
            <TopNavItem {...item} key={item.label} />
          ))}
        </ItemsWrapper>
        <Additional>
          <Notifications>
            <Bell />
          </Notifications>
          <Select
            options={languages}
            isSearchable={false}
            defaultValue={languages[0]}
            styles={customStyles}
          />
        </Additional>
      </Wrapper>
    );
  }
}

export default TopNav;
