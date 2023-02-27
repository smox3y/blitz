import * as React from "react";
import "./Component.css";
import group2 from "../assets/group2.svg";
import group1 from "../assets/group1.svg";
const Component = (props: {
  num2M: string,
  totalArmBandGener: string,
  group: string,
  num: string,
  revenue: string,
  num1: string,
  className?: string,
}) => {
  return (
    <div className={`component ${props.className || ""}`}>
      <div className="rectangle-4-2">
        <img className="group" src={props.group || group} />
        <span className="revenue">{props.revenue || "Revenue"}</span>
        <span className="total-arm-band-gener">
          {props.totalArmBandGener ||
            "Total Arm Band Generated the last 30 days"}
        </span>
        <span className="num-3500345">{props.num1 || "$ 3,500,345"}</span>
        <img className="group-3-1" src={group2} />
        <div className="flex-container-22">
          <span className="num-64">{props.num || "64%"}</span>
          <span>{props.num2M || "$2M"}</span>
        </div>
      </div>
    </div>
  );
};
export default Component;
