import React from 'react';

export default function TrueIcon({ stylesClass = 'w-[25px] h-[25px]' }: { stylesClass?: string }) {
  return (
    <svg
      className={stylesClass}
      viewBox='0 -4 30 30'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
      <g id='SVGRepo_iconCarrier'>
        <title>check</title>
        <g id='icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g
            id='ui-gambling-website-lined-icnos-casinoshunter'
            transform='translate(-735.000000, -1911.000000)'
            fill='#16A34A'
            fillRule='nonzero'
          >
            <g id='4' transform='translate(50.000000, 1871.000000)'>
              <path
                d='M714.442949,40.6265241 C715.185684,41.4224314 715.185684,42.6860985 714.442949,43.4820059 L697.746773,61.3734759 C697.314529,61.8366655 696.704235,62.0580167 696.097259,61.9870953 C695.539848,62.0082805 694.995328,61.7852625 694.600813,61.3625035 L685.557051,51.6712906 C684.814316,50.8753832 684.814316,49.6117161 685.557051,48.8158087 C686.336607,47.9804433 687.631056,47.9804433 688.410591,48.8157854 L696.178719,57.1395081 L711.589388,40.6265241 C712.368944,39.7911586 713.663393,39.7911586 714.442949,40.6265241 Z'
                id='check'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
