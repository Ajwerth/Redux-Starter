import React, { Fragment } from "react";

//Row component
const Row = props => {
  const { data } = props;

  const Row = data.map(item => {
    return (
      <Fragment key={item.id.toString()}>
        <tr>
          <td>{item.id.toString()}</td>
          <td>{item.name}</td>
        </tr>
      </Fragment>
    );
  });

  return <Fragment>{Row}</Fragment>;
};

export default Row;
