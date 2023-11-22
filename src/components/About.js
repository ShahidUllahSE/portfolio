import { Link } from "react-scroll";
import ShahidUllah from "../Assets/New folder/ShahidUllah.jpg";

const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id="About">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2">
          <img src={ShahidUllah} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-xl text-headingcolor font-semibold mb-5"></p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            About Me
          </h2>
          <p className="mt-8 md:pr-8 mb-8">
            I am a final-year student pursuing a Bachelor's degree in Software
            Engineering at Islmia College University Peshawar. Alongside my
            academic journey, I have immersed myself in the world of frontend
            web development. As a dedicated frontend web developer, I've had the
            privilege of working on numerous real-world projects, gaining
            practical experience and honing my skills. My commitment to creating
            user-friendly and visually appealing web solutions drives my passion
            for this field.
            <br /> <br />
            I'm enthusiastic about the endless possibilities
            that technology offers, and I am always eager to take on new
            challenges and deliver exceptional results.
          </p>
          <div className='lg:block hidden'><Link to='Contact'spy={true} activeClass='active' smooth={true} offset={-100} className='outLineBtn cursor-pointer'> Contact me </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
