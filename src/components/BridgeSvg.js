import React from 'react';
import './Bridge.css';

const BridgeSvg = ({ raise }) => (
    <svg
      viewBox="4.604 87.985 869.728 212.589"
      xmlns="http://www.w3.org/2000/svg"
      className="bridge"
    >
      <path className={`bridge__moving__part ${raise ? "raise" : "lower"}`} d="M331.975 246.823l213.419-.716v17.612l-213.419.716z" fill="#3d8dcc" />
      <path className={"bridge__foundation"} d="M12.61 271.677l292.66 1.207 9.08 27.584 24.681-.273 5.975-37.299-6.04-13.815-1.245-114.679 7.186-1.16-7.9-45.257-9.287.602-22.429 158.697L4.604 259.521l8.006 12.156zM866.326 271.783l-292.66 1.207-9.08 27.584-24.681-.273-5.975-37.299 6.04-13.815 1.245-114.679-7.186-1.16 7.901-45.257 9.286.602 22.429 158.697 300.687 12.237-8.006 12.156z" fill="#3d8dcc" />
    </svg>
)

export default BridgeSvg;