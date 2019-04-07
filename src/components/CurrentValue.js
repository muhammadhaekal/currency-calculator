import React from "react";
import styled from "styled-components";

const CurrentValue = ({ currentAmount, handleOnChange }) => {
  return (
    <CurrentValueContainer>
      <CurrentValDesc>USD - United States Dollar</CurrentValDesc>
      <CurrentInputContainer>
        <InputDesc>USD</InputDesc>
        <CurrValInputForm
          type="number"
          name="currentAmount"
          value={currentAmount}
          onChange={handleOnChange}
        />
      </CurrentInputContainer>
    </CurrentValueContainer>
  );
};

const CurrentValueContainer = styled.div({
  padding: "15px 15px 15px 15px",
  borderBottom: "2px solid lightgrey"
});

const CurrentValDesc = styled.h3({
  margin: "0 0"
});

const CurrentInputContainer = styled.div({
  display: "flex",
  justifyContent: "space-between"
});

const InputDesc = styled.h2({
  margin: "0 0"
});

const CurrValInputForm = styled.input({
  border: "2px solid lightgrey",
  borderRadius: "5px",
  width: "200px",
  textAlign: "right",
  fontSize: "18px"
});

export default CurrentValue;
