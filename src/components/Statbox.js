import React from 'react';

import classes from './Statbox.module.css';

const Statbox = (props) => {
  const { name, stat } = props;
  return (
    <table>
      <tbody>
        <tr>

        <td>{name}</td>
        <td>{stat}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statbox;

