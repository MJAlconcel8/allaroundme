import React from 'react';
import Image from 'next/image';
import Button from './Button';

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-12 lg:pb-20 xl:pb-32'>
      <div className="get-app">
        <div className='z-20 flex w-full flex-1 flex-col items-center lg:items-start justify-center gap-6 lg:gap-12'>
          <h2 className='font-bold text-2xl lg:text-4xl xl:max-w-[320px]'>Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div>
            <Button
              type="button"
              title="App Store"
              icon='/apple.svg'
              variant='btn_white'
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon='/android.svg'
              variant='btn_dark_green_outline'
              full
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetApp;

