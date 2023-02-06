import React from 'react';

import classes from './Statheader.module.css';

const Statheader = (props) => {
  const { name} = props;
  return (
    <div className={classes.statheader}>
       
        <p  className={classes.imagetitle}>{name}</p>
      </div>
  );
};

export default Statheader;