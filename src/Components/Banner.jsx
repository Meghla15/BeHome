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
      <div className=' relative'>
      <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://www.sequoiavacationrentals.com/uploads/3/4/9/2/34921155/kadikc-42_orig.jpg" />
      <h1 className='lg:text-4xl text-2xl top-10 absolute lg:top-[10%] lg:left-[23%] md:left-[18%] mx-auto bg-slate-300 opacity-70 p-4 rounded-3xl font-bold  font-neon text-center'> Where Dreams Meet Reality <br />Explore Residential Properties with Us</h1>
      <p className=' absolute top-[35%] mx-auto w-2/3 left-[15%] bg-slate-300 opacity-70 p-4 rounded-3xl font-neon text-center'>Find your dream home with us. Our diverse range of residential properties offers something for every lifestyle. Let our dedicated team guide you through the process. Start your journey to homeownership today!</p>
      

     {/* <div className=" absolute top-[53%] mx-auto w-1/3 left-[38%] md:left-[35%] md:top-[60%]">
     <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">Explore our Offers!!</span>
</a>
     </div> */}




      
      </SwiperSlide>
      <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://www.lanciahomes.com/sites/default/files/blog-files/lancia_homes_reasons_why_millennials_prefer_single-family_homes_image1.jpeg" />
      <h1 className='lg:text-4xl text-2xl top-10 absolute lg:top-[10%] lg:left-[23%] md:left-[18%] mx-auto bg-slate-300 opacity-70 p-4 rounded-3xl font-bold  font-neon text-center text-blue-800'> Where Dreams Meet Reality <br />Explore Residential Properties with Us</h1>
      <p className=' absolute top-[35%] mx-auto w-2/3 left-[15%] bg-slate-300 opacity-70 p-4 rounded-3xl font-neon text-center'>Find your dream home with us. Our diverse range of residential properties offers something for every lifestyle. Let our dedicated team guide you through the process. Start your journey to homeownership today!</p>

      </SwiperSlide>
        <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://media.istockphoto.com/id/1279204567/photo/colorful-townhouses-in-calgary-alberta-canada.jpg?s=612x612&w=0&k=20&c=hxBTNWm5u4pgJCCks4VXq0jXOeA92qUF4sV6Ppp6dxU=" />
        <h1 className='lg:text-4xl text-2xl top-10 absolute lg:top-[10%] lg:left-[23%] md:left-[18%] mx-auto bg-slate-300 opacity-70 p-4 rounded-3xl font-bold  font-neon text-center text-red-500'> Where Dreams Meet Reality <br />Explore Residential Properties with Us</h1>
      <p className=' absolute top-[35%] mx-auto w-2/3 left-[15%] bg-slate-300 opacity-70 p-4 rounded-3xl font-neon text-center'>Find your dream home with us. Our diverse range of residential properties offers something for every lifestyle. Let our dedicated team guide you through the process. Start your journey to homeownership today!</p>

      </SwiperSlide>
        <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://www.chapman.edu/students/new-students/_files/new-student-housing-masthead.jpg" />
        <h1 className='lg:text-4xl text-2xl top-10 absolute lg:top-[10%] lg:left-[23%] md:left-[18%] mx-auto bg-slate-300 opacity-70 p-4 rounded-3xl font-bold  font-neon text-center text-rose-800'> Where Dreams Meet Reality <br />Explore Residential Properties with Us</h1>
      <p className='absolute top-[35%] mx-auto w-2/3 left-[15%] bg-slate-300 opacity-70 p-4 rounded-3xl font-neon text-center'>Find your dream home with us. Our diverse range of residential properties offers something for every lifestyle. Let our dedicated team guide you through the process. Start your journey to homeownership today!</p>
      </SwiperSlide>
        <SwiperSlide><img className='container h-[550px] mx-auto rounded-2xl' src="https://www.cedarhurstliving.com/hubfs/Blog%20%2392%20-%20How%20to%20Find%20the%20Best%20Senior%20Living%20Community%20For%20Your%20Parents%201200%20x%20600%20%281%29.png" />
        <h1 className='lg:text-4xl text-2xl top-10 absolute lg:top-[10%] lg:left-[23%] md:left-[18%]  mx-auto bg-slate-300 opacity-70 p-4 rounded-3xl font-bold  font-neon text-center text-lime-900'> Where Dreams Meet Reality <br />Explore Residential Properties with Us</h1>
      <p className=' absolute top-[35%] mx-auto w-2/3 left-[15%] bg-slate-300 opacity-70 p-4 rounded-3xl font-neon text-center'>Find your dream home with us. Our diverse range of residential properties offers something for every lifestyle. Let our dedicated team guide you through the process. Start your journey to homeownership today!</p>
      </SwiperSlide>
        
       
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