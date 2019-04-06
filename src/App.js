import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";

class App extends Component {
  state = {
    base: "USD",
    rates: {},
    date: null,
    currentValue: 1,
    currencyList: ["IDR", "EUR", "GBP", "SGD"]
  };

  componentDidMount() {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
      .then(({ data }) => {
        this.setState({ ...data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  convertAbbr = abbreviation => {
    switch (abbreviation) {
      case "IDR":
        abbreviation += " - Indonesian Rupiah";
        break;
      case "EUR":
        abbreviation += " - Euro";
        break;
      case "GBP":
        abbreviation += " - British Pound";
        break;
      case "JPY":
        abbreviation += " - Japanese Yen";
        break;
      default:
        abbreviation += " - Not Found";
    }

    return abbreviation;
  };

  formatValue = value => {
    value = value.toFixed(4);

    value = value.split(".");
    value[0] = value[0].split("").map((digit, i) => {
      if ((i + 1) % 3 === 0) {
        return "," + digit;
      } else {
        return digit;
      }
    });
    value[0] = value[0].join("");
    value = value.join(".");

    return value;
  };

  handleDelete = i => {
    const cpyCurrencyList = Object.assign(this.state.currencyList);

    cpyCurrencyList.splice(i, 1);

    this.setState({
      currencyList: cpyCurrencyList
    });
  };

  render() {
    const { currencyList, rates, currentValue, base } = this.state;

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
            {currencyList.map((currency, i) => {
              const convertedValue = rates[currency] * currentValue;
              const displayValue = this.formatValue(convertedValue);

              return (
                <ConvertedValDetail key={i}>
                  <DetailContainer>
                    <AmountContainer>
                      <AmmountDetail>{currency}</AmmountDetail>
                      <AmmountDetail>{displayValue}</AmmountDetail>
                    </AmountContainer>
                    <CurrecyName>{this.convertAbbr(currency)}</CurrecyName>
                    <ConvCurrencyDetail>{`${currentValue} ${base} = ${currency} ${displayValue}`}</ConvCurrencyDetail>
                  </DetailContainer>
                  <DeleteBox onClick={() => this.handleDelete(i)}>
                    ( - )
                  </DeleteBox>
                </ConvertedValDetail>
              );
            })}
          </ConvertedValues>
        </CalculatorBox>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div({
  marginTop: "15px",
  display: "flex",
  justifyContent: "center"
});

const CalculatorBox = styled.div({
  width: "600px",
  border: "2px solid lightgrey"
});

const CurrentValue = styled.div({
  padding: "15px 15px 15px 15px",
  borderBottom: "2px solid lightgrey"
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
  border: "2px solid lightgrey",
  borderRadius: "5px",
  width: "200px",
  textAlign: "right"
});

const ConvertedValDetail = styled.div({
  border: "2px solid lightgrey",
  borderRadius: "2px",
  padding: "15px",
  display: "grid",
  gridTemplateColumns: "90% 10%",
  marginBottom: "15px"
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
  borderLeft: "2px solid lightgrey",
  paddingLeft: "15px",
  "&:hover": {
    cursor: "pointer"
  }
});

const DetailContainer = styled.div({
  paddingRight: "15px"
});
export default App;
