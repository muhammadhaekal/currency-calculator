import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <CalculatorBox>
          <CurrentValue>
            <CurrentValDesc>USD - United States Dollar</CurrentValDesc>
            <CurrentInputContainer>
              <InputDesc>USD</InputDesc>
              <CurrValInputForm type="number" />
            </CurrentInputContainer>
          </CurrentValue>
          <ConvertedValues>
            <ConvertedValDetail>
              <DetailContainer>
                <AmountContainer>
                  <AmmountDetail>IDR</AmmountDetail>
                  <AmmountDetail>14000</AmmountDetail>
                </AmountContainer>
                <CurrecyName>IDR - Indonesian Rupiah</CurrecyName>
                <ConvCurrencyDetail>1 USD = IDR 14,410.00</ConvCurrencyDetail>
              </DetailContainer>
              <DeleteBox>( - )</DeleteBox>
            </ConvertedValDetail>
          </ConvertedValues>
        </CalculatorBox>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div({
  display: "flex",
  justifyContent: "center"
});

const CalculatorBox = styled.div({
  width: "600px",
  border: "2px solid grey"
});

const CurrentValue = styled.div({
  padding: "15px 15px 15px 15px",
  borderBottom: "2px solid grey"
});

const ConvertedValues = styled.div({
  margin: "15px 15px 15px 15px"
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
  border: "2px solid grey",
  borderRadius: "5px",
  width: "200px",
  textAlign: "right"
});

const ConvertedValDetail = styled.div({
  border: "2px solid grey",
  borderRadius: "2px",
  padding: "15px",
  display: "grid",
  gridTemplateColumns: "90% 10%"
});

const AmountContainer = styled.div({
  display: "flex",
  justifyContent: "space-between"
});

const AmmountDetail = styled.div({
  fontSize: "28px"
});

const CurrecyName = styled.div({
  fontWeight: "bolder",
  margin: "8px 0"
});

const ConvCurrencyDetail = styled.div({});

const DeleteBox = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderLeft: "2px solid grey",
  paddingLeft: "15px"
});

const DetailContainer = styled.div({
  paddingRight: "15px"
});
export default App;
