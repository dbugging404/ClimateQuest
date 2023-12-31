import React from 'react';
import { iconUrlFromCode } from '@/lib/openWeather';
import Image from 'next/image';

type Props = {
  title: string;
  items: any;
};

function Forecast({ title, items }: Props) {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />

      <div className='flex flex-row items-center justify-between pb-6'>
        {items?.map((item: any, index: any) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center'
          >
            <p className='font-light text-sm'>{item.title}</p>
            <Image
              src={iconUrlFromCode(item.icon)}
              width={500}
              height={500}
              className='w-12 my-1'
              alt='forecast icons'
            />
            <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
