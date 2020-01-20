import React from "react";
import ShipData from "./ShipData";
import Ships from "./Ships";

//Wrap our Books component in and HOC to pass the data
const ShipsWithData = ShipData(Ships);

class ShipIndex extends React.Component {
  render() {
    return <ShipsWithData className="ShipsWithData" {...this.props} />;
  }
}

export default ShipIndex;
