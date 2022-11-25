import React from 'react';
import './Bridge.css';
import Cars from './MovingUnits/Cars';
import Ghosts from './MovingUnits/Ghosts';
import BouncingBalls from './MovingUnits/BouncingBalls';
import { themes } from './themes';

interface BridgeSvgInterface {
    raise: boolean,
    theme: string
}

const BridgeSvg = ({ raise, theme }: BridgeSvgInterface) => (
    <svg
        viewBox="0 0 870 213"
        xmlns="http://www.w3.org/2000/svg"
        className="bridge"
    >
        {theme === themes.Cars && !raise && <Cars />}
        {theme === themes.Ghosts && !raise && <Ghosts />}
        {theme === themes.Bouncing && !raise && <BouncingBalls />}

        <g transform="matrix(1,0,0,1,-4.604,-87.985)">
            <path className={`bridge__moving__part ${raise ? "raise" : "lower"}`} d="M331.975,246.823L545.394,246.107L545.394,263.719L331.975,264.435L331.975,246.823Z" fill="#3d8dcc" />
        </g>
        <g transform="matrix(1,0,0,1,-4.604,-87.985)">
            <path className={`bridge__foundation ${raise ? "raise" : "lower"}`} d="M12.61,271.677L305.27,272.884L314.35,300.468L339.031,300.195L345.006,262.896L338.966,249.081L337.721,134.402L344.907,133.242L337.007,87.985L327.72,88.587L305.291,247.284L4.604,259.521L12.61,271.677ZM866.326,271.783L573.666,272.99L564.586,300.574L539.905,300.301L533.93,263.002L539.97,249.187L541.215,134.508L534.029,133.348L541.93,88.091L551.216,88.693L573.645,247.39L874.332,259.627L866.326,271.783Z" fill={raise ? "url('#a')" : "#3d8dcc"} />
        </g>
        <defs>
            <linearGradient
                id="a"
                x1={0}
                y1={0}
                x2={1}
                y2={0}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(-.41377 170.135 -169.481 -.41537 459.949 129)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#ff7d00",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#ff2500",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
        </defs>
    </svg>
)

export default BridgeSvg;