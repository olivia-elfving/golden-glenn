import React from "react";

const BouncingBalls = () => (
    <>
        <path id="bbPath" d="M0.733,164.999C7.473,157.961 14.343,158.44 21.291,163.439C28.574,155.187 36.021,155.319 43.6,162.153C49.681,153.182 56.08,154.179 62.683,161.514C69.131,153.246 75.641,154.521 82.179,160.342C88.023,153.755 94.591,152.904 102.066,159.224C108.247,152.329 114.997,152.245 122.317,158.973C129.056,151.784 136.073,151.58 143.32,157.162C148.695,151.573 154.402,150.631 160.563,156.043C167.418,151.008 174.295,150.496 181.201,155.845C188.671,149.555 195.754,148.864 202.335,155.427C208.621,148.187 215.557,147.738 223.111,153.77C230.676,146.921 238.023,147.749 245.26,152.462C251.712,146.784 258.744,146.37 266.328,150.979C273.649,144.394 280.826,145.243 287.92,150.48C295.38,143.72 304.518,143.816 314.999,149.394C326.058,140.315 336.835,141.426 347.427,149.259C357.839,141.012 367.22,142.066 375.938,149.086C385.35,139.916 393.766,140.617 401.384,149.212C412.911,138.87 423.109,140.479 431.903,149.312C441.783,140.569 450.868,140.613 459.193,149.042C470.058,140.752 479.653,141.675 488.32,149.333C497.096,141.386 506.859,140.576 517.742,147.885C529.55,141.044 540.477,141.267 550.436,149.248C568.248,140.481 583.404,142.855 596.963,151.927C609.524,145.535 621.291,146.691 632.399,154.101C645.91,146.607 657.499,148.956 668.063,156.56C681.124,148.616 690.781,150.846 698.814,157.926C709.476,151.373 719.669,153.694 729.667,159.726C740.622,152.029 750.344,154.02 759.543,160.107C770.177,154.742 779.889,155.071 788.488,162.27C797.674,155.494 806.548,155.393 815.032,163.642C824.283,156.85 832.686,155.269 839.502,163.45C847.814,157.203 855.585,157.988 862.906,164.6" fill="none" />
        <path id="reverseBbPath" d="M862.6,164.457C861.486,162.95 854.737,159.247 849.613,159.407C847.204,159.482 839.706,164.678 839.321,163.433C837.994,159.15 826.453,154.237 814.31,163.114C808.117,156.874 800.244,154.617 788.398,161.783C778.339,154.683 769.239,155.824 760.527,160.303C749.417,153.873 738.328,153.142 727.269,160.347C718.607,153.443 709.408,153.239 699.824,157.847C688.792,151.545 678.281,150.571 668.291,154.925C656.115,148.57 643.983,147.999 631.903,154.185C621.258,147.967 610.24,146.324 598.688,151.226C582.986,141.778 567.113,140.081 550.994,149.472C540.111,141.596 529.145,140.942 518.088,148.222C506.348,140.67 496.505,141.82 488.141,149.746C479.927,140.151 470.012,140.137 458.686,148.061C448.606,140.038 439.476,142.301 430.779,149.246C421.173,138.654 411.433,141.463 401.646,149.084C392.986,140.107 385.042,140.92 377.528,147.62C366.154,142.45 355.513,140.966 346.846,149.409C336.819,142.224 326.731,140.387 316.521,149.122C304.463,143.029 294.479,142.897 287.525,151.48C279.068,143.687 272.111,144.984 266.107,152.062C259.005,145.415 252.276,146.434 245.801,152.699C237.217,147.478 229.733,147.468 223.501,153.387C215.007,147.712 207.762,148.098 201.873,155.063C194.767,148.713 187.916,149.455 181.299,156.73C174.154,150.629 166.932,151.604 159.665,156.833C153.732,149.379 148.272,151.111 143.075,157.964C136.422,151.786 129.232,151.532 121.37,158.685C113.516,151.191 107.336,153.666 101.799,159.967C95.185,152.931 88.837,153.022 82.788,161.225C75.964,153.465 69.313,153.434 62.852,161.893C55.37,152.576 49.061,154.21 43.407,161.946C33.233,153.687 27.105,157.224 21.962,163.638C12.686,157.601 2.412,164.691 2.412,164.691" fill="none"/>

        <g id="bbCircles" opacity="0">
            <circle id="bb-0" fill="#f6c442" cx="0" cy="0" r="10" /> {/* ljus-gul */}
            <circle id="bb-1" fill="#45c38f" cx="0" cy="0" r="10" />  {/* grön */}
            <circle id="bb-2" fill="#f16e45" cx="0" cy="0" r="10" />  {/* orange */}
            <circle id="bb-3" fill="#259ea3" cx="0" cy="0" r="10" opacity={0} />  {/* turkos */}
            <circle id="bb-4" fill="#e8618e" cx="0" cy="0" r="10" opacity={0} />  {/* rosa */}
            <circle id="bb-5" fill="#bb69eb" cx="0" cy="0" r="10" opacity={0} />  {/* lila */} {/* #db2fbe */} {/* #cd1291 */} {/* "#c01891" */} {/* b469eb */}
            <circle id="bb-6" fill="#ff5e5f" cx="0" cy="0" r="10" opacity={0} /> {/* tucan-rosa */}
            <circle id="bb-7" fill="#f2d63f" cx="0" cy="0" r="10" opacity={0} />  {/* yellow */}
            <circle id="bb-8" fill="#05aaaa" cx="0" cy="0" r="10" opacity={0} />  {/* öl-blå */}
            <circle id="bb-9" fill="#ef355e" cx="0" cy="0" r="10" opacity={0} />  {/* cerice */}
        </g>
        <g id="reverse_bbCircles" opacity="0">
            <circle id="reverse_bb-9" fill="#f6c442" cx="0" cy="0" r="10" opacity={0} /> {/* ljus-gul */}
            <circle id="reverse_bb-8" fill="#45c38f" cx="0" cy="0" r="10" opacity={0} />  {/* grön */}
            <circle id="reverse_bb-7" fill="#f16e45" cx="0" cy="0" r="10" opacity={0} />  {/* orange */}
            <circle id="reverse_bb-6" fill="#259ea3" cx="0" cy="0" r="10" opacity={0} />  {/* turkos */}
            <circle id="reverse_bb-5" fill="#e8618e" cx="0" cy="0" r="10" opacity={0} />  {/* rosa */}
            <circle id="reverse_bb-4" fill="#bb69eb" cx="0" cy="0" r="10" opacity={0} />  {/* lila */} {/* #db2fbe */} {/* #cd1291 */} {/* "#c01891" */} {/* b469eb */}
            <circle id="reverse_bb-3" fill="#ff5e5f" cx="0" cy="0" r="10" opacity={0} /> {/* tucan-rosa */}
            <circle id="reverse_bb-2" fill="#f2d63f" cx="0" cy="0" r="10" />  {/* yellow */}
            <circle id="reverse_bb-1" fill="#05aaaa" cx="0" cy="0" r="10" />  {/* öl-blå */}
            <circle id="reverse_bb-0" fill="#ef355e" cx="0" cy="0" r="10" />  {/* cerice */}
        </g>

        <animateMotion xlinkHref="#bb-0" dur="10s" begin="0.2s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-1" dur="9.5s" begin="1s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-2" dur="9s" begin="1.5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-3" dur="9.5s" begin="2.2s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-4" dur="10.2s" begin="2.9s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-5" dur="9.5s" begin="3.5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-6" dur="9s" begin="3.8s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-7" dur="10.3s" begin="4.5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-8" dur="10.5s" begin="5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#bb-9" dur="9.5s" begin="5.6s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#bbPath" />
        </animateMotion>

        <animate attributeName="opacity"
            xlinkHref="#bbCircles"
            values="0; 1;" dur="1s" begin="1.5"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#bb-3"
            values="0; 1;" dur="0.1s" begin="2.2"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#bb-4"
            values="0; 1;" dur="0.1s" begin="2.9"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#bb-5"
            values="0; 1;" dur="0.1s" begin="3.5"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#bb-6"
            values="0; 1;" dur="0.1s" begin="3.8"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#bb-7"
            values="0; 1;" dur="0.1s" begin="4.5"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#bb-8"
            values="0; 1;" dur="0.1s" begin="5"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#bb-9"
            values="0; 1;" dur="0.1s" begin="5.6"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />

        <animateMotion xlinkHref="#reverse_bb-0" dur="10s" begin="0.2s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-1" dur="9.5s" begin="1s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-2" dur="9s" begin="1.5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-3" dur="9.5s" begin="2.2s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-4" dur="10.2s" begin="2.9s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-5" dur="9.5s" begin="3.5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-6" dur="9s" begin="3.8s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-7" dur="10.3s" begin="4.5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-8" dur="10.5s" begin="5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>
        <animateMotion xlinkHref="#reverse_bb-9" dur="9.5s" begin="5.6s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#reverseBbPath" />
        </animateMotion>

        <animate attributeName="opacity"
            xlinkHref="#reverse_bbCircles"
            values="0; 1;" dur="1s" begin="1.5"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#reverse_bb-3"
            values="0; 1;" dur="0.1s" begin="2.2"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#reverse_bb-4"
            values="0; 1;" dur="0.1s" begin="2.9"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#reverse_bb-5"
            values="0; 1;" dur="0.1s" begin="3.5"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#reverse_bb-6"
            values="0; 1;" dur="0.1s" begin="3.8"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#reverse_bb-7"
            values="0; 1;" dur="0.1s" begin="4.5"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#reverse_bb-8"
            values="0; 1;" dur="0.1s" begin="5"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />
        <animate attributeName="opacity"
            xlinkHref="#reverse_bb-9"
            values="0; 1;" dur="0.1s" begin="5.6"
            data-id="bbCircles"
            repeatCount="1"
            fill="freeze"
        />


    </>
)

export default BouncingBalls;