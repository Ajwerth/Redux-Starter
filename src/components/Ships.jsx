import React from "react";
import { shape, string } from "prop-types";
import styled from "styled-components";
import DynamicTable from "./DynamicTable";

// Styles
const DashboardContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 50px 80px;

  h3 {
    margin-bottom: 10px;
    padding: 5px 5px 5px 0;
    border-bottom: 1px solid #ccc;
    align-self: flex-start;
  }

  .meta {
    margin-top: 20px;
    font-weight: 600;
  }

  .formContainer {
    margin-top: 20px;
  }

  .formField {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 5px 0;

    .input,
    .is-valid {
      max-width: 220px;
    }

    .form-label {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
`;

const Ships = props => {
  const { ships, isLoading } = props;

  if (ships === undefined) return null;

  return (
    <DashboardContainer>
      <h3>Ship Index</h3>
      <DynamicTable data={ships} isLoading={isLoading}>
        <th className="deleteHeader">#</th>
        <th className="deleteHeader">Name</th>
      </DynamicTable>
    </DashboardContainer>
  );
};

export default Ships;

Ships.propTypes = {
  ship: shape({
    name: string.isRequired
  })
};
