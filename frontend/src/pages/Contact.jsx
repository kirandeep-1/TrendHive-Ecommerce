import React from 'react';
import Title from '../components/Title';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10'>
        <img className='w-full md:max-w-[480px]' src={ass} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
