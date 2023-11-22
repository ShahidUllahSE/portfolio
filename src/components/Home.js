// import ShahidUllah2 from "../Assets/ShahidUllah2.png";
import ShahidUllah from '../Assets/New folder/ShahidUllah.jpg'

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="Home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 w-full">
          <img src={ShahidUllah} alt="" className="w-15 h-22" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-4xl text-headingcolor font-semibold mb-5">
            Shahid Ullah - Frontend Web Developer
          </p>
          <h1 className="md:text-3xl text-xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I create{" "}
            <span className="text-primary">User Centric Web Experiences</span>{" "}
            And Deliver Engaging Digtal Solutions
          </h1>
          <p className="text-2xl text-body leading-9 mb-7">
            I'm a passionate frontend web developer with expertise in crafting
            captivating web experiences. With a toolbox filled with HTML, CSS,
            Bootstrap, Tailwind CSS, and JavaScript and mainly <strong>React.js</strong>  Let's collaborate and build something remarkable
            together. Your next web project is just a click away!
          </p>
       
        </div>
        {/* rigth side */}
      </div>
    </div>
  );
};

export default Home;
