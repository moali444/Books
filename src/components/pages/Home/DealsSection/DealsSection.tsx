import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import IMAGES from '@assets/images/images';
import './DealsSection.scss';

const DealsSection = () => {

    const { t } = useTranslation();

    return (
        <section id='deals_section' className='container_bx'>
            <div className='content_bx'>
                <Swiper
                    cssMode={true}
                    navigation={false}
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                    id='deals_section_slider'
                >
                    <SwiperSlide>
                        <div className='slider_item'>
                            <div className='text'>
                                <h3>{t('deals_title_1')} <br /> {t('deals_title_2')}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                    libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                                    Amet, quis urna, a eu.
                                </p>
                                <div className='details_bx'>
                                    <div className='item'>
                                        <span className='num'>768</span>
                                        <span className='data'>Days</span>
                                    </div>
                                    
                                    <div className='item'>
                                        <span className='num'>01</span>
                                        <span className='data'>Hour</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>27</span>
                                        <span className='data'>Mint</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>55</span>
                                        <span className='data'>Sec</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_img'>
                                <img src={IMAGES.deals_book_1_png} alt='pic' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slider_item'>
                            <div className='text'>
                                <h3>All books are 50% off now! <br /> Don't miss such a deal!</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                    libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                                    Amet, quis urna, a eu.
                                </p>
                                <div className='details_bx'>
                                    <div className='item'>
                                        <span className='num'>768</span>
                                        <span className='data'>Days</span>
                                    </div>
                                    
                                    <div className='item'>
                                        <span className='num'>01</span>
                                        <span className='data'>Hour</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>27</span>
                                        <span className='data'>Mint</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>55</span>
                                        <span className='data'>Sec</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_img'>
                                <img src={IMAGES.deals_book_1_png} alt='pic' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slider_item'>
                            <div className='text'>
                                <h3>All books are 50% off now! <br /> Don't miss such a deal!</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                    libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                                    Amet, quis urna, a eu.
                                </p>
                                <div className='details_bx'>
                                    <div className='item'>
                                        <span className='num'>768</span>
                                        <span className='data'>Days</span>
                                    </div>
                                    
                                    <div className='item'>
                                        <span className='num'>01</span>
                                        <span className='data'>Hour</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>27</span>
                                        <span className='data'>Mint</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>55</span>
                                        <span className='data'>Sec</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_img'>
                                <img src={IMAGES.deals_book_1_png} alt='pic' />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default DealsSection