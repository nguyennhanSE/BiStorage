'use client';
import React from 'react';

export default function TwoCardSwitch({setActivePrice} : {setActivePrice: (price: boolean) => void}) {
  const [active, setActive] = React.useState<'left' | 'right'>('left');

  const common =
    'absolute top-0 h-[360px] w-[280px] rounded-2xl bg-white text-slate-900 ' +
    'border border-slate-200 shadow-xl transition-[transform,opacity,filter] duration-500 ease-out ' +
    'cursor-pointer select-none';

  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="relative h-[380px] w-[520px] [perspective:1000px] flex justify-center items-center">

        {/* LEFT CARD */}
        <div
          onClick={() => {
            setActive('left');
            setActivePrice(false);
          }}
          className={
            common +
            (active === 'left'
              ? ' z-20 opacity-100 [transform:translateX(-32px)_translateY(-8px)_translateZ(40px)_rotate(-6deg)_scale(1)]'
              : ' z-10 opacity-45 blur-[1px] [transform:translateX(-48px)_translateY(6px)_rotate(-10deg)_scale(0.95)]')
          }
          style={{ transformStyle: 'preserve-3d' }}
        >
          <CardBody
            title="Starter"
            price="$39"
            items={[
              'Up to 10,000 units/mo',
              '24/7 support',
              'Dashboard access',
            ]}
          />
        </div>

        {/* RIGHT CARD */}
        <div
          onClick={() => {
            setActive('right');
            setActivePrice(true);
          }}
          className={
            common +
            (active === 'right'
              ? ' z-20 opacity-100 [transform:translateX(32px)_translateY(-8px)_translateZ(40px)_rotate(6deg)_scale(1)]'
              : ' z-10 opacity-45 blur-[1px] [transform:translateX(48px)_translateY(6px)_rotate(10deg)_scale(0.95)]')
          }
          style={{ transformStyle: 'preserve-3d' }}
        >
          <CardBody
            title="Enterprise"
            price="$99"
            items={[
              'Unlimited units',
              'Account manager',
              'Predictive optimization',
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function CardBody({
  title,
  price,
  items,
}: {
  title: string;
  price: string;
  items: string[];
}) {
  return (
<div
  className="p-6 h-full flex flex-col 
  bg-white border border-gray-200 
  rounded-2xl shadow-lg text-slate-900"
>
  <div className="flex items-center justify-between">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="text-2xl font-bold">
      {price}
      <span className="text-sm font-normal text-slate-500">/month</span>
    </div>
  </div>

  <div className="mt-4 h-px bg-gray-200" />

  <ul className="mt-4 space-y-2 text-sm text-slate-600">
    {items.map((it) => (
      <li key={it} className="flex gap-2">
        <span className="mt-[3px] inline-block h-3 w-3 rounded-full border border-gray-400" />
        <span>{it}</span>
      </li>
    ))}
  </ul>

  {/* ánh sáng gradient đa màu */}
  <div
    className="pointer-events-none mt-auto rounded-xl h-16
    bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 to-purple-400
    opacity-70 blur-[8px]"
  />
</div>


  );
}
