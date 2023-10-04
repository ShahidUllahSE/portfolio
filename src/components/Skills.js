// import logo1 from '../components/logo1.jpg'
const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML & CSS",
      description:
        "Proficient in HTML and CSS, I excel at creating clean and structured web layouts. My skills extend to CSS frameworks like Bootstrap and Tailwind CSS, allowing me to craft responsive and visually appealing websites.",
      image: "../components/logo1.jpg",
    },
    {
      id: 2,
      name: "JavaScript",
      description:
        "I have strong command of JavaScript, I bring interactivity to web applications. I specialize in creating dynamic and responsive user interfaces that enhance the user experience.",
      image: "src/Assets/HTML_CSS.png",
    },
    {
      id: 3,
      name: "React.Js",
      description:
        "I'm well-versed in React.js, a powerful library for building modern web applications. I leverage React's component-based architecture to create interactive and scalable user interfaces, providing seamless user experiences.",
      image: "src/assets/skills-3.png",
    },
    {
      id: 4,
      name: "Problem Solving",
      description:
        "I excel in problem-solving, approaching challenges with creativity and precision. I have a knack for dissecting complex issues, finding efficient solutions, and delivering results that enhance project functionality.",
      image: "/src/assets/skills-4.png",
    },
    {
      id: 5,
      name: "Data Structure",
      description:
        "I have a strong grasp of data structures, enabling me to optimize code and improve application efficiency. I leverage data structures to manage and manipulate data seamlessly, enhancing the performance of web applications.",
      image: "/src/assets/skills-4.png",
    },
    {
      id: 5,
      name: "Algorithm",
      description:
        "I possess advanced algorithmic knowledge, allowing me to devise efficient solutions to complex problems. I apply algorithms to optimize code performance, ensuring web applications run smoothly and effectively.",
      image: "/src/assets/skills-4.png",
    },
  ];

  return (
    <div className="lg:mx-12 mx-4 py-20" id="Skills">
      <div className="mb-20">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          My Skills
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          My Expertise
        </h2>
      </div>

      {/* skillis card */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300 skillcard"
          >
            <img
              src={skill.image}
              alt=""
              className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"
            />
            <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
