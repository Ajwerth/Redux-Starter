import React, { Fragment } from "react";

//Row component
const Row = props => {
  const { data } = props;

  const Row = data.map(item => {
    return (
      <Fragment key={item.MGLT.toString()}>
        <tr>
          <td>{item.MGLT.toString()}</td>
          <td>{item.name}</td>
        </tr>
      </Fragment>
    );
  });

  return <Fragment>{Row}</Fragment>;
};

export default Row;
