import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';



const Banner = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper bg-opacity-60 p-4"
      >
      <div className='bg-opacity-60 p-4'>
      <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://www.sequoiavacationrentals.com/uploads/3/4/9/2/34921155/kadikc-42_orig.jpg" /></SwiperSlide>
      <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://www.lanciahomes.com/sites/default/files/blog-files/lancia_homes_reasons_why_millennials_prefer_single-family_homes_image1.jpeg" /></SwiperSlide>
        <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://media.istockphoto.com/id/1279204567/photo/colorful-townhouses-in-calgary-alberta-canada.jpg?s=612x612&w=0&k=20&c=hxBTNWm5u4pgJCCks4VXq0jXOeA92qUF4sV6Ppp6dxU=" /></SwiperSlide>
        <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://www.chapman.edu/students/new-students/_files/new-student-housing-masthead.jpg" /></SwiperSlide>
        <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://www.cedarhurstliving.com/hubfs/Blog%20%2392%20-%20How%20to%20Find%20the%20Best%20Senior%20Living%20Community%20For%20Your%20Parents%201200%20x%20600%20%281%29.png" /></SwiperSlide>
        
       
      </div>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          </svg>
          <span ref={progressContent}></span>
        </div>
        
      </Swiper>
    );
};

export default Banner;