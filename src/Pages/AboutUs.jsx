import React from 'react';

const AboutUs = () => {
    return (
        <section className="my-8 mb-14 bg-green-100 rounded-2xl container mx-auto animate__animated animate__pulse ">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
	</div>
	<div className="container mx-auto gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic font-neon">At Your BeHome, we understand that finding the perfect home is not just about the physical structure; it's about finding a place where you can truly thrive. Our mission is to simplify the process of finding your dream home by providing a comprehensive platform that showcases stunning properties, complete with detailed descriptions and immersive virtual tours. Beyond the walls of the property, we strive to offer valuable insights into the surrounding neighborhoods, ensuring that you not only find the perfect house but also the ideal community to call home. With a commitment to excellence and responsive customer support, we are dedicated to helping you every step of the way on your journey to finding your next residence."

Feel free to customize it to better fit the tone and message you want to convey on your website!</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>


            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center mt-6">Why Us</h1>
	</div>
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic font-neon">At Your BeHome, we pride ourselves on being more than just a platform for buying or renting properties. What sets us apart is our dedication to providing an exceptional experience for our users. From the moment you start your search to the day you move into your new home, we are committed to making the process as smooth and stress-free as possible. Our team of experts is here to assist you at every step, offering personalized support and guidance to help you find the perfect property that meets your needs and exceeds your expectations. With a user-friendly interface, comprehensive property listings, and a focus on customer satisfaction, we strive to be your trusted partner in your journey to finding your ideal residential space."

Feel free to modify it according to your specific values and offerings!</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
		
		</div>
		
	</div>
</section>
    );
};

export default AboutUs;