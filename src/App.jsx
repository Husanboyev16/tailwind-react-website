import React from 'react';
import './App.css';
import {
  SearchOutlined,
  PhoneOutlined,
  ShoppingOutlined,
  PlayCircleFilled,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Flex, Rate } from 'antd';
const App = () => {
  return (
    <>
      {/* Header Start */}
      <div className="w-[1250px] max-w-[100%] h-[auto] div mx-auto pt-[50px]">
        <nav className="w-[1250px] lg:bg-red-600 max-w-[100%] h-[auto] div mx-auto flex justify-between items-center">
          {' '}
          {/* Navbar */}
          <a href="/" className="flex">
            <img src="./src/assets/f.png" alt="" />
            <h2 className="font-bold text-[32px]">OODI</h2>
            {/* <img src="./src/assets/oodi.png" alt="" className='bg-contain'/> */}
          </a>
          <ul className="flex w-[auto] gap-[60px]">
            <p className="text-[#39DB4A] pointer">Home</p>
            <select className="outline-none pointer">
              <option value="">Menu</option>
              <option value="">Menu2</option>
              <option value="">Menu3</option>
              <option value="">Menu4</option>
            </select>
            <select className="outline-none pointer">
              <option value="">Services</option>
              <option value="">Services1</option>
              <option value="">Services2</option>
              <option value="">Services3</option>
              <option value="">Services4</option>
            </select>
            <li className="pointer">Offers</li>
          </ul>
          <div className="flex justify-between items-center gap-[45px]">
            <i>
              <SearchOutlined className="pointer text-[20px]" />
            </i>
            <i>
              <ShoppingOutlined className="pointer text-[20px]" />
            </i>
            <button className="green-button">
              <PhoneOutlined />
              Contact
            </button>
          </div>
        </nav>
      </div>
      {/* Header End */}

      {/* Main Start */}
      <main className="w-100% h-[500px] mt-[100px]">
        {/* Hero Start */}
        <section className="w-[1250px] max-w-[100%] h-[auto] mt-[100px] m-auto flex  ">
          {/* Left Box */}
          <div className="w-[50%]">
            <h1 className="text-[62px] font-bold pb-[70px] ">
              Dive into Delights Of Delectable{' '}
              <span className="text-[#39DB4A]">Food</span>
            </h1>
            <p className="text-[26px] text-[#4A4A4A] font-[500] pb-[70px] ">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div className="flex gap-[25px] items-center">
              <button className="green-button">Order Now</button>
              <a
                href="https://www.youtube.com/live/ORVTFm9Junk?si=DLi_fL6CKUYxjEo3"
                target="_blank"
                className="font-bold text-[#4D4D4D] "
              >
                Watch Video
              </a>
              <button className=" rounded-[100px] w-[70px] h-[70px] shadow-custom">
                <PlayCircleFilled className="text-[40px]" />
              </button>
            </div>
          </div>

          {/* Right Box */}
          <div className="w-[50%] right-box">
            <span
              className=" w-[150px] h-[50px] text-center flex items-center justify-center
             text-red-600 font-bold shadow-custom rounded-[25px]"
            >
              Hot spicy Food 🌶
            </span>
            <div className="flex gap-[55px] items-end mt-[300px]">
              <div
                className="flex justify-around align-center w-[50%] h-auto py-[17px] rounded-[25px] bg-white
              shadow-custom"
              >
                <img
                  className="rounded-[20px] "
                  src="./src/assets/noodles.png"
                  alt=""
                />
                <div>
                  <p className="text-22px font-[600]">Spicy noodles</p>
                  <Flex>
                    <Rate className="my-[10px]" />
                  </Flex>
                  <p className="font-bold text-[18px] text-[#515151]">
                    <span className="text-[#FF7979]">$</span>23.00
                  </p>
                </div>
              </div>
              <div
                className="flex justify-around align-center w-[50%] h-auto py-[17px] rounded-[25px] bg-white
              shadow-custom"
              >
                <img
                  className="rounded-[20px] "
                  src="./src/assets/noodles.png"
                  alt=""
                />
                <div>
                  <p className="text-22px font-[600]">Spicy noodles</p>
                  <Flex>
                    <Rate className="my-[10px]" />
                  </Flex>
                  <p className="font-bold text-[18px] text-[#515151]">
                    <span className="text-[#FF7979]">$</span>23.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero End */}

        {/* Catigories Start */}
        <section className="w-[1250px] max-w-[100%] mx-auto mt-[100px] text-center ">
          <p className="text-[#FF6868] font[700] text-[20px] ">
            Customer Favorites
          </p>
          <h1 className=" text-[60px] font-[700]  ">Popular Catagories</h1>
          <div className="flex justify-between mt-[78px] gap-[38px]">
            <div className="h-[326px] shadow-cards rounded-[40px] w-[326px] pb-[45px] pt-[40px]">
              <img
                className="block mx-auto "
                src="./src/assets/gamburger.png"
                alt=""
              />
              <h3 className="text-[30px] font-[600] my-[13px]">Main Dish</h3>
              <p className="text-[#555555] text-[22px] ">(86 dishes)</p>
            </div>
            <div className="h-[326px] shadow-cards rounded-[40px] w-[326px] pb-[45px] pt-[40px]">
              <img
                className="block mx-auto "
                src="./src/assets/break-fast.png"
                alt=""
              />
              <h3 className="text-[30px] font-[600] my-[13px]">Break Fast</h3>
              <p className="text-[#555555] text-[22px] ">(12 break fast)</p>
            </div>
            <div className="h-[326px] shadow-cards rounded-[40px] w-[326px] pb-[45px] pt-[40px]">
              <img
                className="block mx-auto "
                src="./src/assets/dessert.png"
                alt=""
              />
              <h3 className="text-[30px] font-[600] my-[13px]">Dessert</h3>
              <p className="text-[#555555] text-[22px] ">(48 dessert)</p>
            </div>
            <div className="h-[326px] shadow-cards rounded-[40px] w-[326px] pb-[45px] pt-[40px]">
              <img
                className="block mx-auto "
                src="./src/assets/juice.png"
                alt=""
              />
              <h3 className="text-[30px] font-[600] my-[13px]">Browse All</h3>
              <p className="text-[#555555] text-[22px] ">(255 Items)</p>
            </div>
          </div>
        </section>
        {/* Catigories End */}

        {/* Dishes Start */}
        <section className="w-[1250px] max-w-[100%] h-auto mx-auto mt-[100px]">
          <p className="text-20px font-[700] mb-[30px] text-[#FF6868]">
            Special Dishes
          </p>
          <div className="w-[95%] flex justify-between">
            <h1 className="font-[700] text-[60px] mb-[60px] ">
              Standout Dishes <br /> From Our Menu
            </h1>
            <div className="flex gap-[25px] items-center">
              <div className="w-[50px] h-[50px] text-[22px] bg-gray-300 rounded-full text-center flex justify-center text-gray-700 items-center pointer">
                <LeftOutlined />
              </div>
              <div className="w-[50px] h-[50px] text-[22px] bg-[#39DB4A] rounded-full text-center flex justify-center  text-white items-center pointer">
                <RightOutlined />
              </div>
            </div>
          </div>
          {/* Wrapper */}
          <div className="flex gap-[40px]">
            <div className="h-[523px] shadow-cards rounded-[40px] w-[446px] pb-[45px] pt-[40px] px-[46px]">
              <img
                className="block mx-auto "
                src="./src/assets/salad.png"
                alt=""
              />
              <h3 className="text-[30px] font-[600] uppercase my-[13px] mt-[25px]">
                Browse All
              </h3>
              <p className="text-[#555555] text-[22px] ">
                Description of the item
              </p>
              <div className="flex justify-between m-auto mt-[28px]">
                <p className="font-bold text-[18px] text-[#515151]">
                  <span className="text-[#FF7979]">$</span>23.00
                </p>
                <p className="border-none">⭐4.9</p>
              </div>
            </div>
            <div className="h-[523px] shadow-cards rounded-[40px] w-[446px] pb-[45px] pt-[40px] px-[46px]">
              <img
                className="block mx-auto "
                src="./src/assets/salad2.png"
                alt=""
              />
              <h3 className="text-[30px] font-[600] uppercase my-[13px] mt-[25px]">
                Browse All
              </h3>
              <p className="text-[#555555] text-[22px] ">
                Description of the item
              </p>
              <div className="flex justify-between m-auto mt-[28px]">
                <p className="font-bold text-[18px] text-[#515151]">
                  <span className="text-[#FF7979]">$</span>23.00
                </p>
                <p className="border-none">⭐4.9</p>
              </div>
            </div>
            <div className="h-[523px] shadow-cards rounded-[40px] w-[446px] pb-[45px] pt-[40px] px-[46px]">
              <img
                className="block mx-auto "
                src="./src/assets/salad3.png"
                alt=""
              />
              <h3 className="text-[30px] font-[600] uppercase my-[13px] mt-[25px]">
                Browse All
              </h3>
              <p className="text-[#555555] text-[22px] ">
                Description of the item
              </p>
              <div className="flex justify-between m-auto mt-[28px]">
                <p className="font-bold text-[18px] text-[#515151]">
                  <span className="text-[#FF7979]">$</span>23.00
                </p>
                <p className="border-none">⭐4.9</p>
              </div>
            </div>
          </div>
        </section>
        {/* Dishes End */}

        {/* Customer Feedback Start */}
        <section className="w-[1250px] max-w-[100%] h-[auto] mt-[100px] m-auto flex  ">
          {/* Left Box */}
          <div className="w-[50%] right-box-c flex justify-end items-end">
            <span
              className=" w-[150px] h-[50px] text-center flex items-center justify-center
             text-[#202020] font-bold shadow-custom rounded-[25px]"
            >
              Our Best Chef 😁
            </span>
          </div>
          {/* Right Box */}
          <div className="w-[50%]">
            <h1 className="text-[62px] font-bold pb-[70px] ">
              What Our Customers Say About Us
            </h1>
            <p className="text-[26px] text-[#4A4A4A] font-[500] pb-[70px] ">
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </p>
            <div className="flex items-center justify-evenly">
              <div className="flex">
                <img src="./src/assets/mask.svg" alt="" />
                <img src="./src/assets/mask2.png" alt="" />
                <img src="./src/assets/mask3.png" alt="" />
              </div>
              <div>
                <h3 className="font-[700] text-[26px]">Customer Feedback</h3>
                <p>
                  <span className="text-black font-[600]">⭐4.9</span> (18.6k
                  Reviews)
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Customer Feedback End */}

        {/* Services Start */}
        <section className="w-[1270px] h-auto m-auto mt-[150px] flex items-center gap-[30px]">
          {/* Left Box */}
          <div className="w-[50%]">
            <p className="text-[#FF6868]">Our Story & Services</p>
            <h1 className="text-[62px] font-bold pb-[70px] ">
              Dive into Delights Of Delectable{' '}
              <span className="text-[#39DB4A]">Food</span>
            </h1>
            <p className="text-[26px] text-[#4A4A4A] font-[500] pb-[70px] ">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div className="flex gap-[25px] items-center">
              <button className="green-button">Order Now</button>
            </div>
          </div>
          {/* right box */}
          <section className="w-[50%] max-w-[100%] mx-auto text-center ">
            <div className="flex justify-between mt-[78px] gap-[38px] flex-wrap">
              <div className="h-[320px] shadow-cards rounded-[40px] w-[277px] pb-[45px] pt-[40px] block px-[20px]">
                <img
                  className="block mx-auto "
                  src="./src/assets/green.png"
                  alt=""
                />
                <h3 className="text-[30px] font-[600] my-[13px] text-[#5FE26C]">
                  Catering
                </h3>
                <p className="text-[#90BD95] text-[22px] ">
                  Delight your guests with our flavors and presentation
                </p>
              </div>
              <div className="px-[20px] h-[320px] shadow-cards rounded-[40px] w-[277px] pb-[45px] pt-[40px] block">
                <img
                  className="block mx-auto "
                  src="./src/assets/green2.png"
                  alt=""
                />
                <h3 className="text-[30px] font-[600] my-[13px] text-[#5FE26C]">
                  Fast delivery
                </h3>
                <p className="text-[#90BD95] text-[22px] ">
                  We deliver your order promptly to your door
                </p>
              </div>
              <div className="px-[20px] h-[320px] shadow-cards rounded-[40px] w-[277px] pb-[45px] pt-[40px] block">
                <img
                  className="block mx-auto "
                  src="./src/assets/green3.png"
                  alt=""
                />
                <h3 className="text-[30px] font-[600] my-[13px] text-[#5FE26C]">
                  Online Ordering
                </h3>
                <p className="text-[#90BD95] text-[22px] ">
                  Explore menu & order with ease using our Online Ordering{' '}
                </p>
              </div>
              <div className="px-[20px] h-[320px] shadow-cards rounded-[40px] w-[277px] pb-[45px] pt-[40px] block">
                <img
                  className="block mx-auto "
                  src="./src/assets/green4.png"
                  alt=""
                />
                <h3 className="text-[30px] font-[600] my-[13px] text-[#5FE26C]">
                  Gift Cards
                </h3>
                <p className="text-[#90BD95] text-[22px] ">
                  Give the gift of exceptional dining with Foodi Gift Cards
                </p>
              </div>
            </div>
          </section>

          <div></div>
        </section>
        {/* Services End */}
        <footer className="w-[1270px] h-auto mt-[150px] mx-auto flex justify-between ">
          <div>
            <a href="logo" className="flex">
              <img src="./src/assets/f.png" alt="" />
              <h2 className="font-bold text-[32px]">OODI</h2>
              {/* <img src="./src/assets/oodi.png" alt="" className='bg-contain'/> */}
            </a>
            <p className="text-[24px] font-[500] mt-[50px] text-[#555555]">
              Savor the artistry where <br /> every dish is a culinary <br />{' '}
              masterpiece
            </p>
          </div>
          <ul>
            <li className="font-[600] text-[26px]">Useful links</li>
            <li className="font-[500] text-[24px] text-[#555555]">About us</li>
            <li className="font-[500] text-[24px] text-[#555555">Events</li>
            <li className="font-[500] text-[24px] text-[#555555]">Blogs</li>
            <li className="font-[500] text-[24px] text-[#555555]">FAQ</li>
          </ul>
          <ul>
            <li className="font-[600] text-[26px]">Main Menu</li>
            <li className="font-[500] text-[24px] text-[#555555">Home</li>
            <li className="font-[500] text-[24px] text-[#555555">Offers</li>
            <li className="font-[500] text-[24px] text-[#555555">Menus</li>
            <li className="font-[500] text-[24px] text-[#555555">
              Reservation
            </li>
          </ul>
          <ul>
            <li className="font-[600] text-[26px]">Contact Us</li>
            <li className="font-[500] text-[24px] text-[#555555">
              example@email.com
            </li>
            <li className="font-[500] text-[24px] text-[#555555">
              +64 958 248 966
            </li>
            <li className="font-[500] text-[24px] text-[#555555">
              Social media
            </li>
          </ul>
        </footer>
        <div className="flex justify-around mt-[100px]">
          <div className="w-[1270px] h-auto mx-auto disabled:flex justify-between">
            <img
              className="inline-block"
              src="./src/assets/facebook.png"
              alt=""
            />
            <img
              className="inline-block"
              src="./src/assets/instagram.png"
              alt=""
            />
            <img
              className="inline-block"
              src="./src/assets/twitter.png"
              alt=""
            />
            <img
              className="inline-block"
              src="./src/assets/youtube.png"
              alt=""
            />
            <p className="inline-block mx-[200px] font-[500] text-[18px]">
              Copyright 2023 Dscode | All rights reserved
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
