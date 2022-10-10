import React from 'react';
import './Bridge.css';

const BridgeSvg = ({ raise }) => (
  <svg
    viewBox="0 0 870 213"
    xmlns="http://www.w3.org/2000/svg"
    className="bridge"
  >
    <path id="planePath" d="M4.216,164.771L315.118,151.032L552.311,150.887L867.517,165.712" style={{fill: "none" }} />
    <path id="reversePath" d="M867.517,165.712,L552.311,150.887,L315.118,151.032,L4.216,164.771" style={{ fill: "none" }} />
    <g className={`${raise ? "hide" : ""}`} id="reverse_circles" opacity="0">
      <circle id="reverse_plane" fill="#275e8a" cx="0" cy="0" r="10"  />
      <circle id="reverse_point-1" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="reverse_point-2" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="reverse_point-3" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="reverse_point-4"  fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="reverse_point-5" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="reverse_point-6" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="reverse_point-7"  fill="#275e8a" cx="0" cy="0" r="10" />
    </g>
    <g className={`${raise ? "hide" : ""}`} id="circles" opacity="0">
      <circle id="plane" fill="#3379af" cx="0" cy="0" r="10"  />
      <circle id="point-1" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="point-2" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="point-3" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="plane-4" fill="#3379af" cx="0" cy="0" r="10"  />
      <circle id="point-5" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="point-6" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="point-7" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="point-8" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="point-9" fill="#3379af" cx="0" cy="0" r="10" />
    </g>


    <animateMotion xlinkHref="#plane" dur="10s" begin="0.2s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-1" dur="9.5s" begin="1s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-2" dur="9s" begin="1.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-3" dur="9.5s" begin="2.2s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#plane-4" dur="10.2s" begin="2.9s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-5" dur="9.5s" begin="3.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-6" dur="9s" begin="3.8s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-7" dur="10.3s" begin="4.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-8" dur="10.5s" begin="5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-9" dur="9.5s" begin="5.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>

    <animate attributeName="opacity"
        xlinkHref="#circles"
        values="0; 1;" dur="1s" begin="6"
        data-id="circles"
        repeatCount="1"
        fill="freeze"
    />

    <animateMotion xlinkHref="#reverse_plane" dur="10s" begin="0s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-1" dur="10.5s" begin="1.3s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-2" dur="11s" begin="2.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-3" dur="9.5s" begin="2.9s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-4" dur="10s" begin="3.2s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-5" dur="9.7s" begin="4.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-6" dur="10.5s" begin="5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-7" dur="10.5s" begin="5.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>

    <animate attributeName="opacity"
        xlinkHref="#reverse_circles"
        values="0; 1;" dur="1s" begin="6"
        data-id="reverse_circles"
        repeatCount="1"
        fill="freeze"
    />

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