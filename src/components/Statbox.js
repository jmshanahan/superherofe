import React from 'react';

import classes from './Statbox.module.css';

const Statbox = (props) => {
  const { name, stat } = props;
  return (
    <div className={classes.boxborder}>
        <label className={classes.label} htmlFor="name">{name}</label>
        <input className={classes.statdisplay} id="name" type="text" value={stat} readOnly={true}/>
      </div>
  );
};

export default Statbox;