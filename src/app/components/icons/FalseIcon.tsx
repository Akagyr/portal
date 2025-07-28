import React from 'react';

export default function FalseIcon({ stylesClass = 'w-[25px] h-[25px]' }: { stylesClass?: string }) {
  return (
    <svg
      className={stylesClass}
      viewBox='0 0 24 24'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
      <g id='SVGRepo_iconCarrier'>
        <title>cancel</title>
        <g id='icons' stroke='none' fill='none' fillRule='evenodd'>
          <g
            id='ui-gambling-website-lined-icnos-casinoshunter'
            transform='translate(-868.000000, -1910.000000)'
            fill='#DC2626'
            fillRule='nonzero'
          >
            <g id='4' transform='translate(50.000000, 1871.000000)'>
              <path
                d='M821.426657,39.5856848 L830.000001,48.1592624 L838.573343,39.5856848 C839.288374,38.8706535 840.421422,38.8040611 841.267835,39.4653242 L841.414315,39.5987208 C842.195228,40.3796338 842.195228,41.645744 841.414306,42.4266667 L832.840738,51 L841.414315,59.5733429 C842.129347,60.2883742 842.195939,61.4214224 841.534676,62.2678347 L841.401279,62.4143152 C840.620366,63.1952283 839.354256,63.1952283 838.573333,62.4143055 L830.000001,53.8407376 L821.426657,62.4143152 C820.711626,63.1293465 819.578578,63.1959389 818.732165,62.5346758 L818.585685,62.4012792 C817.804772,61.6203662 817.804772,60.354256 818.585694,59.5733333 L827.159262,51 L818.585685,42.4266571 C817.870653,41.7116258 817.804061,40.5785776 818.465324,39.7321653 L818.598721,39.5856848 C819.379634,38.8047717 820.645744,38.8047717 821.426657,39.5856848 Z'
                id='cancel'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
