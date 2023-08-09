import Image from "next/image"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide} from "swiper/react"

export default function Testimonials() {
    return (
        <section>    
                <div className="cknuf chyag ck7tl cj5a0">
                    <div className="csaom cksyi">
            
                        {/* <!-- Section header --> */}
                        <div className="cknuf cz30m cz74e c1xp8 cpnha">
                            <div>
                                <div className="cwkz6 cmmug cpb1t c6mtw cicf4 c0xld ciph8 cjeaj">The security first platform</div>
                            </div>
                            <h2 className="cr09c cmmug cr2fi chaw1 ch3zp cicf4 ckopp cjeaj">Spot issues faster</h2>
                            <p className="cd2du cfoch">All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        </div>
            
                        {/* <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
                        <!-- * Initialized in src/js/main.js -->
                        <!-- * Custom styles in src/css/additional-styles/theme.scss --> */}
                        <div className="ca60c cc4v0 cqez1 c0xhb chxq1 ckrgn c80l1 cxbfo cy3ub cysd2 cgxgf cur8q cdlvo ct9mr ckqgz corv8 cgemu">
                            <div className="testimonials-carousel swiper-container cxxlx">
                                <Swiper 
                                modules={[Navigation]}
                                className="swiper-wrapper cn7ud"
                                breakpoints = {{
                                    320: {
                                      slidesPerView: 1
                                    },
                                    640: {
                                      slidesPerView: 2
                                    },
                                    1024: {
                                      slidesPerView: 3
                                    }
                                  }}
                                  grabCursor={true}
                                  loop={false}
                                  centeredSlides={false}
                                  initialSlide={0}
                                  spaceBetween={24}
                                  navigation={{
                                    nextEl: '.carousel-next',
                                    prevEl: '.carousel-prev',
                                  }}
                                >
                                    {/* <!-- Carousel items --> */}
                                    <SwiperSlide className="swiper-slide ca60c c4im5 co970 cjbis ctqkp cdgtm cm39l cc4v0 cuze9 cvrel czub9 cu486 cp5f4 cs5rb cprit ch9g6 cpt2o cb0qf c2vtn chx0y c1e1k cysd2 cgxgf cv2ch caiin cegds cb5el cd6it cxa15 chaq6 c7nu9 cahiq">
                                        <div className="ca60c c64tv c0tib co970 chrb3 cp73f">                                         
                                            {/* <!-- Radial gradient --> */}
                                            <div className="c431g cl2cn cl2el cddhp c0mvq cmfhc cmd0z cbixb cqedr" aria-hidden="true">
                                                <div className="c0wqh cl2cn c9pxh cky3t ctqkp c07gv cmltl cqp1f c2rol cx92y"></div>
                                            </div>
                                            <div className="cs2x1 c0tib c8rkc clcaa">
                                                <Image className="c8p73" src="https://preview.cruip.com/stellar/images/carousel-icon-01.svg" width="56" height="56" alt="Icon 01"/>
                                                <div className="cfck1">
                                                    <div className="ceq85 cd2du cokyf">Anonymous User</div>
                                                    <div className="c8p73 cfoch">Incorporate rich user profiling, and facilitate more transactions.</div>
                                                </div>
                                                <div className="ce3al">
                                                    <a className="cwkz6 cxwsr cqnsz ciph8 cuxtl cco4s cykc9 c2rol c5dkl cxxlx" href="#0">Learn More <span className="ctkza ctfx3 ct2xv cot2b cykc9 c2rol c8087">-&gt;</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide> 
                                    <SwiperSlide className="swiper-slide ca60c c4im5 co970 cjbis ctqkp cdgtm cm39l cc4v0 cuze9 cvrel czub9 cu486 cp5f4 cs5rb cprit ch9g6 cpt2o cb0qf c2vtn chx0y c1e1k cysd2 cgxgf cv2ch caiin cegds cb5el cd6it cxa15 chaq6 c7nu9 cahiq">
                                        <div className="ca60c c64tv c0tib co970 chrb3 cp73f">
                                            {/* <!-- Particles animation --> */}
                                            <div className="cl2cn c9pxh c0mvq c11y1 cd1bq cqp1f c2rol cffk1 cxlvw" aria-hidden="true">
                                                <canvas data-particle-animation="" data-particle-quantity="3"></canvas>
                                            </div>                                            
                                            {/* <!-- Radial gradient --> */}
                                            <div className="c431g cl2cn cl2el cddhp c0mvq cmfhc cmd0z cbixb cqedr" aria-hidden="true">
                                                <div className="c0wqh cl2cn c9pxh cky3t ctqkp c07gv cmltl cqp1f c2rol cx92y"></div>
                                            </div>
                                            <div className="cs2x1 c0tib c8rkc clcaa">
                                                <Image className="c8p73" src="https://preview.cruip.com/stellar/images/carousel-icon-02.svg" width="56" height="56" alt="Icon 01"/>
                                                <div className="cfck1">
                                                    <div className="ceq85 cd2du cokyf">Bot Detection</div>
                                                    <div className="c8p73 cfoch">Incorporate rich user profiling, and facilitate more transactions.</div>
                                                </div>
                                                <div className="ce3al">
                                                    <a className="cwkz6 cxwsr cqnsz ciph8 cuxtl cco4s cykc9 c2rol c5dkl cxxlx" href="#0">Learn More <span className="ctkza ctfx3 ct2xv cot2b cykc9 c2rol c8087">-&gt;</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide ca60c c4im5 co970 cjbis ctqkp cdgtm cm39l cc4v0 cuze9 cvrel czub9 cu486 cp5f4 cs5rb cprit ch9g6 cpt2o cb0qf c2vtn chx0y c1e1k cysd2 cgxgf cv2ch caiin cegds cb5el cd6it cxa15 chaq6 c7nu9 cahiq">
                                        <div className="ca60c c64tv c0tib co970 chrb3 cp73f">
                                            {/* <!-- Particles animation --> */}
                                            <div className="cl2cn c9pxh c0mvq c11y1 cd1bq cqp1f c2rol cffk1 cxlvw" aria-hidden="true">
                                                <canvas data-particle-animation="" data-particle-quantity="3"></canvas>
                                            </div>                                            
                                            {/* <!-- Radial gradient --> */}
                                            <div className="c431g cl2cn cl2el cddhp c0mvq cmfhc cmd0z cbixb cqedr" aria-hidden="true">
                                                <div className="c0wqh cl2cn c9pxh cky3t ctqkp c07gv cmltl cqp1f c2rol cx92y"></div>
                                            </div>
                                            <div className="cs2x1 c0tib c8rkc clcaa">
                                                <Image className="c8p73" src="https://preview.cruip.com/stellar/images/carousel-icon-03.svg" width="56" height="56" alt="Icon 01"/>
                                                <div className="cfck1">
                                                    <div className="ceq85 cd2du cokyf">Social integrations</div>
                                                    <div className="c8p73 cfoch">Incorporate rich user profiling, and facilitate more transactions.</div>
                                                </div>
                                                <div className="ce3al">
                                                    <a className="cwkz6 cxwsr cqnsz ciph8 cuxtl cco4s cykc9 c2rol c5dkl cxxlx" href="#0">Learn More <span className="ctkza ctfx3 ct2xv cot2b cykc9 c2rol c8087">-&gt;</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide ca60c c4im5 co970 cjbis ctqkp cdgtm cm39l cc4v0 cuze9 cvrel czub9 cu486 cp5f4 cs5rb cprit ch9g6 cpt2o cb0qf c2vtn chx0y c1e1k cysd2 cgxgf cv2ch caiin cegds cb5el cd6it cxa15 chaq6 c7nu9 cahiq">
                                        <div className="ca60c c64tv c0tib co970 chrb3 cp73f">
                                            {/* <!-- Particles animation --> */}
                                            <div className="cl2cn c9pxh c0mvq c11y1 cd1bq cqp1f c2rol cffk1 cxlvw" aria-hidden="true">
                                                <canvas data-particle-animation="" data-particle-quantity="3"></canvas>
                                            </div>                                            
                                            {/* <!-- Radial gradient --> */}
                                            <div className="c431g cl2cn cl2el cddhp c0mvq cmfhc cmd0z cbixb cqedr" aria-hidden="true">
                                                <div className="c0wqh cl2cn c9pxh cky3t ctqkp c07gv cmltl cqp1f c2rol cx92y"></div>
                                            </div>
                                            <div className="cs2x1 c0tib c8rkc clcaa">
                                                <Image className="c8p73" src="https://preview.cruip.com/stellar/images/carousel-icon-04.svg" width="56" height="56" alt="Icon 01"/>
                                                <div className="cfck1">
                                                    <div className="ceq85 cd2du cokyf">Progressive Profiling</div>
                                                    <div className="c8p73 cfoch">Incorporate rich user profiling, and facilitate more transactions.</div>
                                                </div>
                                                <div className="ce3al">
                                                    <a className="cwkz6 cxwsr cqnsz ciph8 cuxtl cco4s cykc9 c2rol c5dkl cxxlx" href="#0">Learn More <span className="ctkza ctfx3 ct2xv cot2b cykc9 c2rol c8087">-&gt;</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide ca60c c4im5 co970 cjbis ctqkp cdgtm cm39l cc4v0 cuze9 cvrel czub9 cu486 cp5f4 cs5rb cprit ch9g6 cpt2o cb0qf c2vtn chx0y c1e1k cysd2 cgxgf cv2ch caiin cegds cb5el cd6it cxa15 chaq6 c7nu9 cahiq">
                                        <div className="ca60c c64tv c0tib co970 chrb3 cp73f">
                                            {/* <!-- Particles animation --> */}
                                            <div className="cl2cn c9pxh c0mvq c11y1 cd1bq cqp1f c2rol cffk1 cxlvw" aria-hidden="true">
                                                <canvas data-particle-animation="" data-particle-quantity="3"></canvas>
                                            </div>
                                            {/* <!-- Radial gradient --> */}
                                            <div className="c431g cl2cn cl2el cddhp c0mvq cmfhc cmd0z cbixb cqedr" aria-hidden="true">
                                                <div className="c0wqh cl2cn c9pxh cky3t ctqkp c07gv cmltl cqp1f c2rol cx92y"></div>
                                            </div>
                                            <div className="cs2x1 c0tib c8rkc clcaa">
                                                <Image className="c8p73" src="https://preview.cruip.com/stellar/images/carousel-icon-05.svg" width="56" height="56" alt="Icon 05"/>
                                                <div className="cfck1">
                                                    <div className="ceq85 cd2du cokyf">Secure Access</div>
                                                    <div className="c8p73 cfoch">Incorporate rich user profiling, and facilitate more transactions.</div>
                                                </div>
                                                <div className="ce3al">
                                                    <a className="cwkz6 cxwsr cqnsz ciph8 cuxtl cco4s cykc9 c2rol c5dkl cxxlx" href="#0">Learn More <span className="ctkza ctfx3 ct2xv cot2b cykc9 c2rol c8087">-&gt;</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        
                        {/* <!-- Arrows --> */}
                        <div className="cxce1 cs2x1 coq9a">
                            <button className="carousel-prev ca60c c64tv cs2x1 c2hko c87jw cxwsr crt5c cxxlx">
                                <span className="cs8a6">Previous</span>
                                <svg className="cn056 cwn2x cqpoa cco4s cykc9 c2rol ca7b4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path>
                                </svg>
                            </button>
                            <button className="carousel-next ca60c c64tv cs2x1 c2hko c87jw cxwsr crt5c cxxlx">
                                <span className="cs8a6">Next</span>
                                <svg className="cn056 cwn2x cqpoa cco4s cykc9 c2rol ca7b4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"></path>
                                </svg>
                            </button>
                        </div>
            
                    </div>
                </div>
        </section>

    )
}