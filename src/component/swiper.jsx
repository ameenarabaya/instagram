import './smallstore.css'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import Test from './Test';
import { Pagination } from "swiper";
function SmallStore() {
    return (
        <div className='mb-5'>
            <div className='mb-5'>
                <h3 className="smallstore_p fs-1">Baby Accessories</h3>
            </div>
            <div id='smallStore'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><Test index='1' name='Eulers Spinning Disk' price='300$' /></SwiperSlide>
                    <SwiperSlide><Test index='2' name='Rattle ’n Rock Maracas' price='900$' /></SwiperSlide>
                    <SwiperSlide><Test index='3' name='Learn with Me Zebra Walker' price='200$' /></SwiperSlide>
                    <SwiperSlide><Test index='4' name='Lace table tennis bard' price='900$' /></SwiperSlide>
                    <SwiperSlide><Test index='5' name=' Kick & Play Piano' price='890$' /></SwiperSlide>
                    <SwiperSlide><Test index='6' name='Link’n Go Play Pack' price='800$' /></SwiperSlide>
                    <SwiperSlide><Test index='7' name='GM Sting Kashmir Willow' price='100$' /></SwiperSlide>
                    <SwiperSlide><Test index='8' name='Gloria Wardrobe and Mirror' price='900$' /></SwiperSlide>
                    <SwiperSlide><Test index='9' name='Funworld Canvas Shoes' price='900$' /></SwiperSlide>
                    <SwiperSlide><Test index='10' name='Cosco Rio Size 3' price='100$' /></SwiperSlide>
                    <SwiperSlide><Test index='11' name='Crinkle Leaf' price='340$' /></SwiperSlide>
                    <SwiperSlide><Test index='12' name='Critter Clinic Shoes' price='300$' /></SwiperSlide>
                    <SwiperSlide><Test index='13' name='Baby Pacifiers' price='200$' /></SwiperSlide>
                    <SwiperSlide><Test index='14' name='Htincidunt molesti' price='200$' /></SwiperSlide>
                    <SwiperSlide><Test index='15' name='Woollen caps with strings' price='300$' /></SwiperSlide>
                    <SwiperSlide><Test index='16' name='Armour Football Shoes' price='100$' /></SwiperSlide>
                    <SwiperSlide><Test index='17' name='Euler’s Spinning Disk' price='300$' /></SwiperSlide>
                    <SwiperSlide><Test index='18' name='Transformers Generations' price='300$' /></SwiperSlide>
                    <SwiperSlide><Test index='19' name='Sensory Activity Apple' price='300$' /></SwiperSlide>
                    <SwiperSlide><Test index='20' name='Sensory Sweet Peas' price='300$' /></SwiperSlide>
                    <SwiperSlide><Test index='21' name='Shake & Spin Lion' price='300$' /></SwiperSlide>
                    <SwiperSlide><Test index='22' name='SIM Clogs for Kids' price='300$' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
export default SmallStore;