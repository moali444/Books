import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import IMAGES from '@assets/images/images';
import './BannerSection.scss';

const BannerSection = () => {

    const { t } = useTranslation();

    return (
        <section id='banner_section' className='container_bx'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                id='banner_section_slider'
            >
                <SwiperSlide>
                    <div className='slider_item'>
                        <div className='text'>
                            <h3>ipsum dolor si</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                                Amet, quis urna, a eu.
                            </p>
                            <Link to='/home' className='slider_btn'>
                                {t('read_more')} <img src={IMAGES.rightArrow} alt='pic' />
                            </Link>
                        </div>
                        <div className='slider_img'>
                            <img src={IMAGES.bookSlider} alt='pic' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider_item'>
                        <div className='text'>
                            <h3>ipsum dolor si</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                                Amet, quis urna, a eu.
                            </p>
                            <Link to='/home' className='slider_btn'>
                                {t('read_more')} <img src={IMAGES.rightArrow} alt='pic' />
                            </Link>
                        </div>
                        <div className='slider_img'>
                            <img src={IMAGES.bookSlider} alt='pic' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider_item'>
                        <div className='text'>
                            <h3>ipsum dolor si</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                                Amet, quis urna, a eu.
                            </p>
                            <Link to='/home' className='slider_btn'>
                                {t('read_more')} <img src={IMAGES.rightArrow} alt='pic' />
                            </Link>
                        </div>
                        <div className='slider_img'>
                            <img src={IMAGES.bookSlider} alt='pic' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider_item'>
                        <div className='text'>
                            <h3>ipsum dolor si</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                                Amet, quis urna, a eu.
                            </p>
                            <Link to='/home' className='slider_btn'>
                                {t('read_more')} <img src={IMAGES.rightArrow} alt='pic' />
                            </Link>
                        </div>
                        <div className='slider_img'>
                            <img src={IMAGES.bookSlider} alt='pic' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default BannerSection