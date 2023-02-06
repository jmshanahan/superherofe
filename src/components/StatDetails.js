import React from "react";

import classes from "./StatDetails.module.css";

const StatDetails = (props) => {
  return (
    <table className={classes['table-control']}>
      <tbody>

      <tr>
        <td>
        Durability
        </td>
        <td>
        {props.durability}
        </td>
        <td>
        Strength
        </td>
        <td>
        {props.strength}
        </td>
        <td>
        Combat
        </td>
        <td>
        {props.combat}
        </td>
      </tr>
      <tr>
        <td>
        Intelligence
        </td>
        <td>
        {props.intelligence}
        </td>
        <td>
        Power
        </td>
        <td>
        {props.power}
        </td>
        <td>
        Speed
        </td>
        <td>
        {props.speed}
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default StatDetails;



{/* <tr>
<td>
Durability
</td>
<td>
{props.durability}
</td>
{/* <Statbox name="Durability" stat={props.durability} />
<Statbox name="Power" stat={props.power} /> */}
// </tr>
// <div>
// <Statbox name="Intelligence" stat={props.intelligence} />
// <Statbox name="Strength" stat={props.stprops.combatrength} />
// </div>
// <div>
// <Statbox name="Combat" stat={props.combat} />
// <Statbox name="Speed" stat={props.speed} />
// </div>
// </tbody> */}