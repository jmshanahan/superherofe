import React from 'react';

import classes from './Statheader.module.css';

const Statheader = (props) => {
  const { name } = props;
  return (
    <div className={classes.statheader}>
        <label>{name}</label>
      </div>
  );
};

export default Statheader;