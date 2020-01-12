import React, { Component } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetch } from "../redux/fetchActions";

// Dispatch Imports

// Data container for the pipelines component, handles data for the pipelines component
export const BookData = WrappedComponent => {
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
  return {};
};

const mapDispatchToProps = {
  fetch
};

const composedBooks = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  BookData
);

export default composedBooks;

BookData.propTypes = {
  dispatch: func.isRequired
};
