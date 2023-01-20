import React from 'react';

import classes from './Statheader.module.css';

const Statheader = (props) => {
  const { name, imageurl } = props;
  return (
    <div className={classes.statheader}>
       
        <img src={imageurl} className={classes.imagepos} alt={`Image of ${{name}}`}/> 
        <p> <label className={classes.imagetitle}>{name}</label></p>
      </div>
  );
};

export default Statheader;