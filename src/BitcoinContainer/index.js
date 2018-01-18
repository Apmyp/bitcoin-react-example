import React from "react";
import Pusher from "pusher-js";
import BitcoinCard from "../BitcoinCard";

class BitcoinContainer extends React.Component {
  state = {
    tradeData: null
  };

  componentWillMount() {
    const pusher = new Pusher("de504dc5763aeef9ff52");
    const tradesChannel = pusher.subscribe("live_trades");

    tradesChannel.bind("trade", tradeData => {
      this.setState({ tradeData });
    });
  }

  render() {
    const { tradeData } = this.state;

    return (
      <React.Fragment>
        {tradeData && <BitcoinCard {...tradeData} />}
      </React.Fragment>
    );
  }
}

export default BitcoinContainer;
