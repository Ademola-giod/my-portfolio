import ProjectCard from "./projectCard.jsx";


import AuthSystem from "../assets/AuthSystem.png";
import KeyToKeys from "../assets/KeyToKeys.png";
import FacultyNews from "../assets/FacultyNews.png";
import TextToSpeech from "../assets/TextToSpeech.png";




const ProjectData = [
  
  {
    title: "LearnKeyToKeys Platform",
    description:
      "A full-stack course platform built with React, Express, MongoDB, and Paystack integration.",
    image: KeyToKeys,
    status: "Completed",
    live: "https://learnkeytokeys.com",
    github: "https://github.com/Ademola-giod/learnkeytokeys",
     tech: ["React", "Tailwind CSS", "Node.js", "expressjs", "MongoDB", "Paystack"],
  },

  {
    title: "Faculty News App",
    description:
      "A backend authentication system featuring email verification, JWT-based auth, password hashing, and protected routes.",
    image: FacultyNews,
    reverse: true,
    status: "Completed",
     live: "https://faculty-newsapp.vercel.app",
    github: "https://github.com/Ademola-giod/email-authentication",
      tech: ["React","Tailwind CSS", "Node.js", "Express", "JWT", "AUTH0", "MongoDB",  "Cloudinary"],
    
  },
  {
    title: "MERN AUTH",
    description:
      "A backend authentication system featuring email verification, JWT-based auth, password hashing, and protected routes.",
    image: AuthSystem,
    reverse: true,
    status: "Completed",
   live: "https://mern-auth-six-nu.vercel.app",
    github: "https://github.com/Ademola-giod/email-authentication",
      tech: ["React","Tailwind CSS", "Node.js", "Express", "JWT", "MongoDB"],
      
  },


  {
    title: "Weather App",
    description:
      "A weather application using external APIs to fetch real-time weather data. Currently under development.",
    image: "/project3.png",
    status: "In Progress",
    github: "https://github.com/Ademola-giod/Weather-App",
     tech: ["React", "API", "Tailwind CSS"],
  },

  {
    title: "Text to speech converter App",
    description:
      "An app that converts text to speech",
    image: TextToSpeech,
    status: "In Progress",
       live: "https://mern-auth-six-nu.vercel.app",
        github: "https://github.com/Ademola-giod/Text-to-speech-converter",
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





