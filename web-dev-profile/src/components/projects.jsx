// import ProjectCard from "./projectCard.jsx";



// const Projects = () => {
//   return (
//     <section className="relative overflow-hidden  py-20 px-5">
      
//       {/* BACKDROP GRADIENT BLOBS */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] " />
//       <div className="absolute top-1/2 -right-40 w-[500px] h-[500px]" />

//       {/* CONTENT */}
//       <div className="relative max-w-6xl mx-auto space-y-24 md:space-y-40">
//         {/* project cards here */}

//         <ProjectCard
//           title="Example Project"
//           description="A web app for visualizing personalized Spotify data..."
//           image="/project1.png"
//         />

//         <ProjectCard
//           title="Example Project"
//           description="A web app for visualizing personalized Spotify data..."
//           image="/project2.png"
//           reverse
//         />
//       </div>

//     </section>
//   );
// };

// export default Projects;




import ProjectCard from "./projectCard.jsx";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";



const ProjectData = [
  
  {
    title: "LearnKeyToKeys Platform",
    description:
      "A full-stack course platform built with React, Express, MongoDB, and Paystack integration.",
    image: project1,
    status: "Completed",
    live: "https://learnkeytokeys.com",
    github: "https://github.com/yourusername/learnkeytokeys",
     tech: ["React", "Tailwind CSS", "Node.js", "expressjs", "MongoDB", "Paystack"],
  },
  {
    title: "Email Authentication System",
    description:
      "A backend authentication system featuring email verification, JWT-based auth, password hashing, and protected routes.",
    image: project2,
    reverse: true,
    status: "Completed",
    // live: "https://",
    github: "https://github.com/yourusername/email-authentication",
      tech: ["React","Tailwind CSS", "Node.js", "Express", "JWT", "MongoDB"],
      
  },
  {
    title: "Weather App",
    description:
      "A weather application using external APIs to fetch real-time weather data. Currently under development.",
    image: "/project3.png",
    status: "In Progress",
     tech: ["React", "API", "Tailwind CSS"],
  },
  {
    title: "Text to speech converter App",
    description:
      "An app that converts text to speech",
    image: "/project4.png",
    status: "In Progress",
     tech: ["HTML", "CSS", "JAVASCRIPT"],
  },
];




const Projects = () => {
  return (
    <section className="relative overflow-hidden  py-20 px-5">
      
      {/* BACKDROP GRADIENT BLOBS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] " />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px]" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto space-y-24 md:space-y-40">
        {/* project cards here */}

        {ProjectData.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ))}

      </div>

    </section>
  );
};

export default Projects;





