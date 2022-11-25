import React from "react";

const Cars = () => (
    <>
        <path id="planePath" d="M4.216 164.771L315.118 151.032L552.311 150.887L867.517 165.712" fill="none" />
        <path id="reversePath" d="M867.517 165.712 L552.311 150.887 L315.118 151.032 L4.216 164.771" fill="none" />

        <g id="reverse_circles" opacity="0">
            <circle id="reverse_plane" fill="#275e8a" cx="0" cy="0" r="10"  />
            <circle id="reverse_point-1" fill="#275e8a" cx="0" cy="0" r="10" />
            <circle id="reverse_point-2" fill="#275e8a" cx="0" cy="0" r="10" />
            <circle id="reverse_point-3" fill="#275e8a" cx="0" cy="0" r="10" />
            <circle id="reverse_point-4"  fill="#275e8a" cx="0" cy="0" r="10" />
            <circle id="reverse_point-5" fill="#275e8a" cx="0" cy="0" r="10" />
            <circle id="reverse_point-6" fill="#275e8a" cx="0" cy="0" r="10" />
            <circle id="reverse_point-7"  fill="#275e8a" cx="0" cy="0" r="10" />
        </g>
        <g id="circles" opacity="0">
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

    </>
)

export default Cars;