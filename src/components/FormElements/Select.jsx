import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import Highlighter from "react-highlight-words";

const Button = (props) => {
  const { t, i18n } = useTranslation();
  const [onFocusOutBg, setOnFocusOutBg] = useState("rgb(var(--color-fieldBg) / 1)!important");
  const [currentSelectValue, setCurrretSelectValue] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // const handleBlur = (e) => {
  //    setOnFocusOutBg(currentSelectValue?.length ? '#F9F9FB' : 'rgb(var(--color-fieldBg) / 1)!important')
  // }

  const handleOnChange = (e) => {
    setCurrretSelectValue(e);
  };

  function formatOptionLabel({ label }, { inputValue }) {
    if (inputValue) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    return (
      <Highlighter
        searchWords={[inputValue]}
        textToHighlight={label}
        highlightStyle={{ backgroundColor: "#ffffff", color: "#737373" }}
      />
    );
  }

  const customStyles = {
    option: (state, provided) => ({
      top: "51px",
      margin: 0,
      boxShadow: "none",
      border: "1px solid rgb(var(--color-fieldOutline) / 1)",
      borderTop: "none",
      fontSize: "16px",
      fontFamily: "InterRegular",
      textAlign: "left",
      borderRadius: 0,
      padding: "13px 16px",
      borderBottom: "1px solid rgb(var(--color-fieldOutline)/1)",
      cursor: "pointer",
      backgroundColor: provided.isSelected & !isSearching ? "rgba(var(--color-primary)/1)" : null,
      color:
        provided.isSelected & !isSearching
          ? "rgba(var(--color-white)/1)"
          : !provided.isSelected & !isSearching
          ? "rgb(var(--color-fieldNoFocus) / 1)"
          : "#004DF6",
      "&:hover": {
        backgroundColor: !provided.isSelected ? "rgb(var(--color-fieldBg))" : null,
      },
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0,
      boxShadow: "none",
      zIndex: 9,
      borderTop: "1px solid #000",
    }),
    menuList: (base, state) => ({
      ...base,
      padding: 0,
      border: state.selectProps.menuIsOpen ? "1px solid rgb(var(--color-primary)/1)" : null,
      borderTop: state.selectProps.menuIsOpen ? "none" : null,
      borderRadius: "0 0 4px 4px",
    }),
    control: (state, provided) => ({
      width: "100%",
      "> div:first-of-type": {
        marginBottom: provided.isMulti && provided.hasValue ? "1.75rem!important" : "",
        // padding: provided.isMulti && provided.hasValue ? "8px 16px" : "",
        borderRadius: "4px",
        marginBottom: "1.75rem",
        opacity: 1,
        borderRadius: "4px!important",
        padding: "0.325rem 1rem  !important",
        minHeight: 50,
        paddingRight: "50px !important",
        fontSize: "1rem!important",
        lineHeight: "1.25rem!important",
        fontWeight: "400!important",
        color: "rgb(var(--color-black) / 1)!important",
        fontFamily: "InterRegular!important",
        opacity: 1,
        backgroundColor: onFocusOutBg,
        border: props.error
          ? "1px solid rgb(var(--color-error) / 1)!important"
          : "1px solid rgb(var(--color-fieldOutline) / 1)!important",

        "&:focus": {
          backgroundColor: "rgb(var(--color-fieldBg) / 1)!important",
          color: "rgb(var(--color-placeholder)/1)",
          borderColor: "rgb(var(--color-primary))!important",
          borderRadius: provided.selectProps.menuIsOpen ? "4px 4px 0 0!important" : "4px!important",
          borderBottomColor: provided.selectProps.menuIsOpen
            ? "rgb(var(--color-black)/1)!important"
            : "rgb(var(--color-fieldOutline)/1)",
        },

        ".css-1rhbuit-multiValue": {
          display: "inline-flex",
          backgroundColor: "transparent",
          border: "1px solid rgb(var(--color-fieldOutline)/1)",
          borderRadius: "50px",
          position: "relative",
          fontSize: "16px",
          lineHeight: "19px",
          zIndex: 5,
          color: "rgb(var(--color-black)/1)",
          margin: "2px 4px",
          "&:first-of-type": {
            marginLeft: "0!important",
          },
          ">div:first-of-type": {
            padding: "5px 15px 7px",
            lineHeight: "19px",
          },
          svg: {
            fill: "rgb(var(--color-primary)/1)",
            width: "20px",
            height: "20px",
          },
        },
        "> div:last-of-type": {
          position: provided.isMulti && provided.hasValue && "absolute",
          left: 0,
          right: 0,
          top: 0,
        },
        borderColor: state.isFocused ? "red" : "green",
      },
    }),
    valueContainer: () => ({
      padding: 0,
    }),
    placeholder: (state, provided) => ({
      margin: 0,
      padding: "0.325rem 1rem !important",
      position: "absolute",
      top: 0,
      left: 0,
      textIndent: "5px",
      fontSize: "1rem",
      lineHeight: "2.4rem",
      fontWeight: 400,
      fontFamily: "InterRegular",
      width: "100%",
      height: "51px",
      paddingRight: "50px !important",
      textAlign: "left",
      color: provided.isFocused ? "rgb(var(--color-placeholder)/1)" : "rgb(79, 79, 79, 1)",
      borderRadius: "4px",
    }),
    // input: (state, provided) => ({
    //   borderRadius: "4px",
    //   marginBottom: "1.75rem",
    //   opacity: 1,
    //   'input[type="text"]': {
    //     borderRadius: "4px!important",
    //     padding: "0.875rem 1rem!important",
    //     fontSize: "1rem!important",
    //     lineHeight: "1.25rem!important",
    //     fontWeight: "400!important",
    //     color: "rgb(var(--color-black) / 1)!important",
    //     fontFamily: "InterRegular!important",
    //     opacity: 1,
    //     backgroundColor: onFocusOutBg,
    //     border: props.error
    //       ? "1px solid rgb(var(--color-error) / 1)!important"
    //       : "1px solid rgb(var(--color-fieldOutline) / 1)!important",
    //     "&:focus": {
    //       backgroundColor: "rgb(var(--color-fieldBg) / 1)!important",
    //       color: "rgb(var(--color-placeholder)/1)",
    //       borderColor: "rgb(var(--color-primary))!important",
    //       borderRadius: provided.selectProps.menuIsOpen ? "4px 4px 0 0!important" : "4px!important",
    //       borderBottomColor: provided.selectProps.menuIsOpen
    //         ? "rgb(var(--color-black)/1)!important"
    //         : "rgb(var(--color-fieldOutline)/1)",
    //     },
    //   },
    // }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: () => ({
      color: "rgb(var(--color-primary)/1)",
      transition: "all .2s ease",
    }),
    indicatorsContainer: (state, provided) => ({
      position: "absolute",
      right: "10px",
      top: 0,
      height: "51px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      transform: provided.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      // ">div:first-of-type": {
      //   display: "none",
      // },
    }),
    singleValue: (state, provided) => ({
      // border:
      //   provided.hasValue && !provided.selectProps.menuIsOpen
      //     ? "1.5px solid rgb(var(--color-fieldOutline)/1)"
      //     : "1.5px solid rgb(var(--color-primary)/1)",
      borderRadius: provided.hasValue && !provided.selectProps.menuIsOpen ? "4px" : "4px 4px 0 0",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      margin: 0,
      padding: "0.875rem 1rem",
      position: "absolute",
      top: 0,
      left: 0,
      fontSize: "1rem",
      lineHeight: "1.25rem",
      fontWeight: 400,
      fontFamily: "InterRegular",
      width: "100%",
      height: "51px",
      paddingRight: "50px!important",
      color: provided.hasValue ? "rgb(var(--color-black)/1)" : "rgb(var(--color-fieldNoFocus)/1)",
      textAlign: "left",
    }),
  };

  return (
    <>
      <Select
        styles={customStyles}
        defaultValue={props.value}
        placeholder={props.customStyles}
        options={props.options}
        isMulti={props.isMulti}
        onBlur={props.handleBlur}
        onChange={(selectedOption) => {
          if (!Array.isArray(selectedOption)) {
            let event = {
              target: {
                name: props.name,
                value: selectedOption.value,
              },
            };
            props.handleChange(event);
          } else {
            const temp = selectedOption.map((el) => el.value);
            props.setFieldValue(props.name, temp);
          }
        }}
        formatOptionLabel={formatOptionLabel}
      />
    </>
  );
};

export default Button;
