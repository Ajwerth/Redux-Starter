import React, { Component } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetch } from "../redux/fetchActions";

// Dispatch Imports

// Data container for the pipelines component, handles data for the pipelines component
export const ShipData = WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      const { fetch } = this.props;
      fetch();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const mapStateToProps = state => {
  return {
    ships: state.fetchReducer.ships.results
  };
};

const mapDispatchToProps = {
  fetch
};

const composedShipData = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  ShipData
);

export default composedShipData;

ShipData.propTypes = {
  dispatch: func.isRequired
};
