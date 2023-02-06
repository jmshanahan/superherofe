import React from 'react';

import classes from './Statheader.module.css';

const Statheader = (props) => {
  const { name} = props;
  return (
    <div className={classes.statheader}>
       
        <p> <label className={classes.imagetitle}>{name}</label></p>
      </div>
  );
};

export default Statheader;