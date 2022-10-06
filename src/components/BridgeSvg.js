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
    <g id="ghost-solid.svg" transform="matrix(0.11273,0,0,0.11273,809.161,67.8185)">
        <g transform="matrix(1,0,0,1,-192,-256)">
            <path d="M50.8,452.1L19.2,477.4C17.1,479.1 14.5,480 11.8,480C5.3,480 0,474.7 0,468.2L0,192C0,86 86,0 192,0C298,0 384,86 384,192L384,468.2C384,474.7 378.7,480 372.2,480C369.5,480 366.9,479.1 364.8,477.4L333.2,452.1C329.9,449.4 325.7,448 321.4,448C315.5,448 309.9,450.8 306.4,455.5L268.8,505.6C265.8,509.6 261,512 256,512C251,512 246.2,509.6 243.2,505.6L204.8,454.4C201.8,450.4 197,448 192,448C187,448 182.2,450.4 179.2,454.4L140.8,505.6C137.8,509.6 133,512 128,512C123,512 118.2,509.6 115.2,505.6L77.6,455.5C74,450.8 68.5,448 62.6,448C58.3,448 54.2,449.5 50.9,452.1L50.8,452.1ZM160,192C160,174.3 145.7,160 128,160C110.3,160 96,174.3 96,192C96,209.7 110.3,224 128,224C145.7,224 160,209.7 160,192ZM256,224C273.7,224 288,209.7 288,192C288,174.3 273.7,160 256,160C238.3,160 224,174.3 224,192C224,209.7 238.3,224 256,224Z" fill="yellow"/>
        </g>
    </g>
    <g className={`${raise ? "hide" : ""}`} id="circles" opacity="0">
      <circle id="plane" class="plane" fill="#275e8a" cx="0" cy="0" r="10"  />
      <circle id="point-1" class="point-1" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-2" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-3" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="plane-4" class="plane" fill="#275e8a" cx="0" cy="0" r="10"  />
      <circle id="point-5" class="point-1" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-6" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-7" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-8" class="point-1" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-9" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-10" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-12" class="point-1" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-13" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
      <circle id="point-14" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
    </g>
    <g className={`${raise ? "hide" : ""}`} id="reverse_circles" opacity="0">
      <circle id="reverse_plane" fill="#3379af" cx="0" cy="0" r="10"  />
      <circle id="reverse_point-1" class="point-1" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-2" class="point-2" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-3" class="point-3" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-4" class="point-1" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-5" class="point-2" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-6" class="point-3" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-7" class="point-1" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-8" class="point-2" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-9" class="point-3" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-10" class="point-1" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-11" class="point-2" fill="#3379af" cx="0" cy="0" r="10" />
      <circle id="reverse_point-12" class="point-3" fill="#3379af" cx="0" cy="0" r="10" />
    </g>
    <g id="ghosts" opacity="0">
      <circle id="plane" class="plane" fill="black" cx="0" cy="0" />
      <circle id="point-1" fill="#275e8a" cx="0" cy="0" />
      <circle id="point-2" fill="#275e8a" cx="0" cy="0" />
      <circle id="point-3" fill="black" cx="0" cy="0" />
      <circle id="plane-4" fill="#275e8a" cx="0" cy="0"  />
      <circle id="point-5" fill="#275e8a" cx="0" cy="0" />
      <circle id="point-6" fill="#275e8a" cx="0" cy="0" />
      <circle id="point-7" fill="black" cx="0" cy="0" />
      <circle id="point-8" fill="#275e8a" cx="0" cy="0" />
      <circle id="point-9" fill="#275e8a" cx="0" cy="0" />
      <circle id="point-10" fill="black" cx="0" cy="0" />
      <circle id="point-12" fill="#275e8a" cx="0" cy="0" />
      <circle id="point-13" fill="#275e8a" cx="0" cy="0" />
      <circle id="point-14" fill="black" cx="0" cy="0" />
    </g>

    <animateMotion xlinkHref="#plane" dur="10s" begin="0s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-1" dur="9.5s" begin="0.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-2" dur="9s" begin="0.9s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-3" dur="10s" begin="1.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#plane-4" dur="10s" begin="12s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-5" dur="9.5s" begin="11s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-6" dur="9s" begin="2.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-7" dur="10s" begin="3s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>

    <animateMotion xlinkHref="#point-8" dur="10s" begin="4s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-9" dur="9.5s" begin="5.3s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-10" dur="9s" begin="5.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-11" dur="10s" begin="9.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-12" dur="10s" begin="10.7s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-13" dur="10s" begin="9s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>
    <animateMotion xlinkHref="#point-14" dur="10s" begin="8.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#planePath" />
    </animateMotion>

    <animate attributeName="opacity"
        xlinkHref="#circles"
        values="0; 1;" dur="1s" begin="10"
        data-id="circles"
        repeatCount="1"
        fill="freeze"
    />

    <animateMotion xlinkHref="#reverse_plane" dur="10s" begin="2s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-1" dur="10.5s" begin="1.3s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-2" dur="11s" begin="4.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-3" dur="9.5s" begin="3.9s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-4" dur="10s" begin="1.3s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-5" dur="9.7s" begin="1.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-6" dur="10.5s" begin="3s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-7" dur="10.5s" begin="4.4s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-8" dur="11s" begin="5.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-9" dur="12.5s" begin="8.9s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-10" dur="12s" begin="10.1s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-11" dur="12.7s" begin="12.5s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion>
    <animateMotion xlinkHref="#reverse_point-12" dur="12.5s" begin="13.6s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#reversePath" />
    </animateMotion> 

    <animate attributeName="opacity"
        xlinkHref="#reverse_circles"
        values="0; 1;" dur="1s" begin="10"
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