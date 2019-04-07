import React from "react";
import styled from "styled-components";

const NewCurrencyToggle = ({
  isInputActive,
  newCurrency,
  handleOnChange,
  handleOnClick,
  handleToggle
}) => {
  return (
    <React.Fragment>
      {isInputActive ? (
        <InputNewCurrencyContainer>
          <InputNewCurrency
            type="text"
            name="newCurrency"
            value={newCurrency}
            onChange={handleOnChange}
          />
          <SubmitButton onClick={handleOnClick}>Submit</SubmitButton>
        </InputNewCurrencyContainer>
      ) : (
        <InputToggle onClick={handleToggle}>
          ( + ) Add More Currencies
        </InputToggle>
      )}
    </React.Fragment>
  );
};

const InputNewCurrencyContainer = styled.div({
  display: "flex"
});

const InputNewCurrency = styled.input({
  width: "100%",
  border: "2px solid lightgrey",
  borderRadius: "5px",
  marginRight: "15px",
  fontSize: "18px"
});

const SubmitButton = styled.button({
  border: "2px solid lightgrey",
  borderRadius: "5px",
  "&:hover": {
    cursor: "pointer"
  }
});

const InputToggle = styled.div({
  backgroundColor: "lightgrey",
  height: "17px",
  borderRadius: "5px",
  textAlign: "center",
  padding: "5px",
  "&:hover": {
    cursor: "pointer"
  }
});

export default NewCurrencyToggle;
