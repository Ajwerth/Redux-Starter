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

const Books = props => {
  const { books, isLoading } = props;

  if (books === undefined) return null;

  return (
    <DashboardContainer>
      <h3>Pipeline Index</h3>
      <DynamicTable data={books} isLoading={isLoading}>
        <th className="deleteHeader">#</th>
        <th className="deleteHeader">Name</th>
        <th className="deleteHeader" />
      </DynamicTable>
    </DashboardContainer>
  );
};

export default Books;

Books.propTypes = {
  book: shape({
    name: string.isRequired
  })
};
