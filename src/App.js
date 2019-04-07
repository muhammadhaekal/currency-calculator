import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import ConvertedValues from "./components/ConvertedValues";
import CurrentValue from "./components/CurrentValue";
import NewCurrencyToggle from "./components/NewCurrencyTogle";
class App extends Component {
  state = {
    base: "USD",
    rates: {},
    date: null,
    currentAmount: 1,
    currencyList: ["IDR", "EUR", "GBP", "SGD"],
    newCurrency: "",
    isInputActive: false
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

  handleDelete = i => {
    const cpyCurrencyList = Object.assign(this.state.currencyList);
    cpyCurrencyList.splice(i, 1);

    this.setState({
      currencyList: cpyCurrencyList
    });
  };

  handleOnChange = e => {
    // Conver input to upperCase
    e.target.value = e.target.value.toUpperCase();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnClick = () => {
    let tempCurrencyList = Object.assign(this.state.currencyList);
    tempCurrencyList.push(this.state.newCurrency);

    this.setState({
      currencyList: tempCurrencyList,
      newCurrency: "",
      isInputActive: !this.state.isInputActive
    });
  };

  handleToggle = () => {
    this.setState({
      isInputActive: !this.state.isInputActive
    });
  };

  render() {
    const {
      currencyList,
      rates,
      currentAmount,
      base,
      isInputActive,
      newCurrency
    } = this.state;

    return (
      <AppContainer>
        <CalculatorBox>
          <CurrentValue
            currentAmount={currentAmount}
            handleOnChange={this.handleOnChange}
          />
          <ListContainer>
            <ConvertedValues
              currencyList={currencyList}
              rates={rates}
              currentAmount={currentAmount}
              base={base}
              handleDelete={this.handleDelete}
            />
            <NewCurrencyToggle
              isInputActive={isInputActive}
              handleOnChange={this.handleOnChange}
              newCurrency={newCurrency}
              handleOnClick={this.handleOnClick}
              handleToggle={this.handleToggle}
            />
          </ListContainer>
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

const ListContainer = styled.div({
  margin: "15px 15px 15px 15px"
});

export default App;
