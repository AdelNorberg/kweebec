export const selectStyles = {
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
    fontSize: "18px",
    fontWeight: "bold",
    "&:hover": {
      borderColor: "#2a2c30",
    },
  }),
  valueContainer: provided => ({
    ...provided,
    justifyContent: "center",
    cursor: "pointer",
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
    overflow: "hidden",
    backgroundColor: "#2F3136",
    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
    fontWeight: "bold",
  }),
  menuList: provided => ({
    ...provided,
    padding: "0",
  }),
  option: (provided, { isSelected }) => {
    return {
      ...provided,
      cursor: "pointer",
      textAlign: "center",
      padding: "12px 12px",
      backgroundColor: isSelected ? "#36393f" : "transparent",
      "&:active": {
        backgroundColor: isSelected ? "#36393f" : "transparent",
      },
    };
  },
};

export const toOptionsFormat = options =>
  options.map(option => ({ value: option, label: option.toUpperCase() }));
