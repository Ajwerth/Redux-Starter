import React from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import DynamicRow from "./DynamicRow";

const TableContainer = styled.div`
  thead {
    background-color: #fff;
    padding: 5px;

    .deleteHeader {
      width: 20px;
    }

    h5 {
      margin: 5px 0;
    }
  }
`;

const DynamicTable = props => {
  const { data } = props;

  const RowHeaders = headers.map(header => <th key={header}>{header}</th>);

  return (
    <TableContainer>
      <Table bordered striped hover responsive size="sm">
        <thead>
          <tr>
            {RowHeaders}
            <th className="deleteHeader" />
          </tr>
        </thead>
        <tbody>
          <DynamicRow data={data} />
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
