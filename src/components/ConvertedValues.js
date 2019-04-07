import React from "react";
import styled from "styled-components";

const ConvertedValues = ({
  currencyList,
  rates,
  currentAmount,
  base,
  handleDelete
}) => {
  return (
    <React.Fragment>
      {currencyList.map((currency, i) => {
        const convertedValue = rates[currency] * currentAmount;
        const displayValue = formatValue(convertedValue);

        return (
          <ConvertedValDetail key={i}>
            <DetailContainer>
              <AmountContainer>
                <AmmountDetail className="currency-code">
                  {currency}
                </AmmountDetail>
                <AmmountDetail>{displayValue}</AmmountDetail>
              </AmountContainer>
              <CurrecyName>{convertAbbr(currency)}</CurrecyName>
              <ConvCurrencyDetail>{`${currentAmount} ${base} = ${currency} ${displayValue}`}</ConvCurrencyDetail>
            </DetailContainer>
            <DeleteBox onClick={() => handleDelete(i)}>( - )</DeleteBox>
          </ConvertedValDetail>
        );
      })}
    </React.Fragment>
  );
};

const convertAbbr = abbreviation => {
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
    case "SGD":
      abbreviation += " - Singapore Dollar";
      break;
    case "INR":
      abbreviation += " - Indian Rupee";
      break;
    case "CAD":
      abbreviation += " - Canadian Dollar";
      break;
    case "CHF":
      abbreviation += " - Swiss Franc";
      break;
    case "MYR":
      abbreviation += " - Malaysian Ringgit";
      break;
    case "USD":
      abbreviation += " - United States Dollar";
      break;
    default:
      abbreviation += " - Not Found";
  }

  return abbreviation;
};

const formatValue = value => {
  value = value.toFixed(4);

  value = value.split(".");

  value[0] = value[0]
    .split("")
    .reverse()
    .map((digit, i) => {
      if ((i + 1) % 3 === 0 && i !== value[0].length - 1) {
        return "," + digit;
      } else {
        return digit;
      }
    });
  console.log(value[0]);
  value[0] = value[0].reverse().join("");
  value = value.join(".");

  return value;
};

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

export default ConvertedValues;
