import React from 'react';
import profile from '../../../../Asset/img/profile.jpg';
import './About.css';

const About = () => {
	return (
		<section className='py-4'>
			 <h1 className='text-center text-2xl pb-4'> About Me </h1>
			<div className=" about-wrap">
				<div className='about-img'>
					<img src={profile} alt="This is my profile picture" className=''/>
				</div>
				<article className='w-3/4 mx-auto text-justify about-info'>
					<p className=''>
						My name is Raton Chandro Roy and I am a front end developer. I have completed my honours in physics from Shahjalal University of Science and Technology, Sylhet and continune M.Sc in IT on the  IICT institute of the same University. I always try to learn new Technology whenever I get the opportunity. 
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;