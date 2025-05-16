import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>TrendHive is a dynamic platform that curates and showcases the latest and most exciting trends across fashion, technology, and lifestyle. It serves as a one-stop destination for trendsetters, innovators, and curious minds seeking inspiration and insights into what’s new and next. By blending expert analysis with real-time updates, TrendHive helps users stay ahead of the curve, make informed choices, and express their unique style in an ever-evolving world.</p>
         <p>TrendHive is your go-to hub for discovering the newest trends in fashion, tech, and lifestyle. It keeps you updated with fresh, inspiring content tailored to modern tastes, helping you stay ahead of the curve and express your unique style with confidence.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>TrendHive's mission is to inspire and empower individuals by curating the latest trends that shape modern lifestyle, fashion, and technology. We aim to be a trusted source of innovation and creativity, helping people stay informed, express themselves confidently, and make smart choices in a constantly evolving world. Through carefully selected content and trend insights, TrendHive strives to spark curiosity, encourage individuality, and connect a community of forward-thinking trend enthusiasts.</p>

      </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p>At TrendHive, quality is our top priority. We ensure that every trend, product, or insight we share is thoroughly researched, relevant, and curated with care. Our commitment to excellence helps our audience trust and rely on us for accurate, stylish, and meaningful content.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p>At TrendHive, convenience is at the core of our experience. We deliver the latest trends in fashion, tech, and lifestyle in a simple, accessible, and user-friendly way, saving you time while keeping you effortlessly updated.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Services:</b>
            <p>TrendHive is known for its exceptional customer service, offering quick responses, personalized assistance, and a commitment to customer satisfaction. Whether it's product inquiries, returns, or support, TrendHive ensures a smooth and positive experience.</p>
        </div>
    </div>
    </div>
  );
};

export default About;
