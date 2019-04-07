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
            name="newCurrency"
            value={newCurrency}
            onChange={handleOnChange}
          >
            <option value="JPY">JPY</option>
            <option value="SGD">SGD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="IDR">IDR</option>
            <option value="CHF">CHF</option>
            <option value="INR">INR</option>
            <option value="MYR">MYR</option>
            <option value="KRW">KRW</option>
          </InputNewCurrency>
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

const InputNewCurrency = styled.select({
  width: "100%",
  border: "2px solid lightgrey",
  borderRadius: "5px",
  marginRight: "15px",
  fontSize: "18px",
  "&:hover": {
    cursor: "pointer"
  }
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
