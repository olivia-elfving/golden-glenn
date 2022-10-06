import React from 'react';
import './Bridge.css';

const BridgeSVGTest = (props) => (
  <svg
    viewBox="0 0 870 213"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    {...props}
  >

    <path id="planePath" d="M4.216,164.771L315.118,151.032L552.311,150.887L867.517,165.712" style={{fill: "none" }} />
    <path id="reversePath" d="M867.517,165.712,L552.311,150.887,L315.118,151.032,L4.216,164.771" style={{ fill: "none" }} />
    <g id="circles" opacity="0">
        <circle id="plane" class="plane" fill="black" cx="0" cy="0" r="10"  />
        <circle id="point-1" class="point-1" fill="#275e8a" cx="0" cy="0" r="10" />
        <circle id="point-2" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
        <circle id="point-3" class="point-2" fill="black" cx="0" cy="0" r="10" />
        <circle id="plane-4" class="plane" fill="#275e8a" cx="0" cy="0" r="10"  />
        <circle id="point-5" class="point-1" fill="#275e8a" cx="0" cy="0" r="10" />
        <circle id="point-6" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
        <circle id="point-7" class="point-2" fill="black" cx="0" cy="0" r="10" />
        <circle id="point-8" class="point-1" fill="#275e8a" cx="0" cy="0" r="10" />
        <circle id="point-9" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
        <circle id="point-10" class="point-2" fill="black" cx="0" cy="0" r="10" />
        <circle id="point-12" class="point-1" fill="#275e8a" cx="0" cy="0" r="10" />
        <circle id="point-13" class="point-2" fill="#275e8a" cx="0" cy="0" r="10" />
        <circle id="point-14" class="point-2" fill="black" cx="0" cy="0" r="10" />
    </g>
    <g id="reverse_circles" opacity="0">
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
        values="0; 1;" dur="1s" begin="4"
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
        values="0; 1;" dur="1s" begin="4"
        data-id="reverse_circles"
        repeatCount="1"
        fill="freeze"
    />

    <path
      d="m331.975 246.823 213.419-.716v17.612l-213.419.716v-17.612Z"
      style={{
        fill: "#3d8dcc",
        fillRule: "nonzero",
      }}
      transform="translate(-4.604 -87.985)"
    />
    <path
      d="m12.61 271.677 292.66 1.207 9.08 27.584 24.681-.273 5.975-37.299-6.04-13.815-1.245-114.679 7.186-1.16-7.9-45.257-9.287.602-22.429 158.697L4.604 259.521l8.006 12.156Zm853.716.106-292.66 1.207-9.08 27.584-24.681-.273-5.975-37.299 6.04-13.815 1.245-114.679-7.186-1.16 7.901-45.257 9.286.602 22.429 158.697 300.687 12.237-8.006 12.156Z"
      style={{
        fill: "#3d8dcc",
        fillRule: "nonzero",
      }}
      transform="translate(-4.604 -87.985)"
    />
  </svg>
)

export default BridgeSVGTest;