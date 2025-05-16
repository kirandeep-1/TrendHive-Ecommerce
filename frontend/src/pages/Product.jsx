import React, { useActionState, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; // ✅ make sure this path is correct
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  const [size,setSize] =useState('');

  const fetchProductData = () => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
      return null;
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row gap-8'>
        
        {/* Left: Thumbnail Images */}
        <div className='w-full sm:w-[15%] flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto'>
          {productData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)}
              key={index}
              src={item}
              className={`w-24 h-24 object-cover cursor-pointer border ${image === item ? 'border-black' : 'border-gray-300'}`}
              alt={`thumb-${index}`}
            />
          ))}
        </div>

        {/* Center: Main Image */}
        <div className='w-full sm:w-[45%]'>
          <img src={image} className='w-full h-auto object-contain' alt="Main product" />
        </div>

        {/* Right: Product Info */}
        <div className='w-full sm:w-[40%] flex flex-col justify-start'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''}`} key={index}>{item}</button>
              ))}
            </div>

          </div>

          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white w-fit px-8 py-3 text-sm active.bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product. </p>
                <p>Easy return and exchange policy within 7 days.</p>

              </div>
        </div>

      </div>

      {/* Description */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
              <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>Experience unmatched comfort and modern design with our latest collection. Crafted with high-quality materials and attention to detail, this product is perfect for everyday use. Whether you're stepping out or staying in, enjoy style, durability, and functionality all in one. Available in multiple sizes and colors to suit your unique preference.</p>
                <p>Stay comfortable and stylish all day long with our premium fabric collection. Designed to fit perfectly and feel even better, this piece is ideal for casual outings or weekend lounging. Breathable, lightweight, and easy to care for—your wardrobe’s new favorite</p>


              </div>
      </div>

     {/* Display related products */}

     <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
