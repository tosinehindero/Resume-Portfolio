import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a results-driven Full-Stack Developer and US Navy Veteran with an MBA in Information Security and over four years of specialized experience in developing scalable software solutions. Proficient in a wide range of technologies, including React.js, Node.js, Express.js, PostgreSQL, Microsoft SQL, and the .NET platform. Adept at both front-end and back-end development, with a strong foundation in Agile and Scrum methodologies, enabling efficient project delivery and enhanced team collaboration.
Currently advancing expertise in DevOps and modern software engineering practices in utilizing tools such as GitHub Actions, Docker, Kubernetes, and CI/CD pipelines to streamline development processes. Leveraging military discipline and strategic thinking, combined with an extensive technical skill set, to deliver high-impact solutions in fast-paced and dynamic environments.
.. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
   {
      year: "May 2024 - July 2024",
      role: "Full Stack Developer",
      company: "Booz Allen Hamilton – Hiring Our Heroes Fellowship.",
      description: `Developed a web application to provide mental health resources, learning paths, and job boards for future fellowship cohorts.
Built a robust and scalable server-side architecture using Express.js and Node.js, ensuring efficient request handling and seamless front-end integration.
Created dynamic and responsive user interfaces with React.js, enhancing user experience and accessibility.
Managed and stored user data using MongoDB, ensuring high availability and performance.
Configured CI/CD pipelines for automated testing, building, and deployment, ensuring consistent updates.
Containerized the application with Docker, simplifying deployment and enhancing scalability.
Applied Kubernetes principles to orchestrate containerized applications, improving scalability and resilience.
Collaborated with cross-functional teams to ensure seamless project integration and milestone delivery
`,
      technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Tailwind css", "AWS", "Dockers", "GithubAction"],
   },
   {
      year: "August 2023 - January 2024",
      role: "Software Developer Academy Associate",
      company: "Capital One, Richmond",
      description: `Developed interactive front-end applications using HTML, CSS, and React.js.
Built back-end applications and web APIs using Node.js, Express.js, and Knex.
Managed databases with PostgreSQL, ensuring efficient data handling.
Wrote unit tests to enhance process efficiency and application reliability.
Developed new functionalities for existing software, aligning with stakeholder requirements.
Implemented Agile methodologies, fostering collaboration and meeting project objectives.
Created a RESTful API to integrate systems seamlessly.
Documented technical architecture, providing clear guidance for future development.
Implemented responsive UI/UX design, ensuring accessibility across all devices.
Refactored legacy code to improve scalability and maintainability.
Participated in team code reviews and implemented unit testing with Jest
.`,
      technologies: ["HTML", "CSS", "React.js", "PostgreSQL","Node.js", "Express.js"],
   },
   {
      year: "August 2022 - March 2023",
      role: "Software Developer",
      company: "Muffler City, Atlanta -Freelance unpaid project",
      description: `Developed responsive dynamic pages for user-intake forms using Formik, focusing on input validation and error handling.
Created visually appealing front-end designs with Material UI and JavaScript.
Built and managed a local Microsoft SQL database server for small business API connectivity.
Developed a secure authentication system, adhering to industry data protection standards.
Wrote unit tests to ensure code integrity and minimize production bugs.
Employed AJAX and JSON for seamless data exchange between front-end and back-end.
Utilized Git for version control, ensuring effective code management and collaboration
.`,
      technologies: ["React.js", "Node.js", "Express.js", "Postgres", "Knex"],
   },
   {
      year: "January 2022 - July 2022",
      role: "Software Developer",
      company: "The Institute to Advance Diversity (SABIO Enterprises)",
      description: `Collaborated with the product team to translate business requirements into technical specifications.
Developed a FAQ page and administrative input form using Formik and React.js, incorporating input validation and error handling.
Utilized Material UI for component development, enhancing the overall user interface.
.`,
      technologies: ["ASP.Net Core", "React.js", "MicrosoftSQL"],
   },
   {
    year: "April 2018 - November 2021",
    role: "System Support",
    company: "Innovative Vision Technologies, Inc, Atlanta",
    description: `Analyzed requirements to plan and install new systems or modify existing ones.
Consulted with customers and departments on technical issues and project status.
Collaborated with front-end developers to maintain UI integrity throughout the development lifecycle.
Integrated CRM tools with marketing and onboarding teams, leading to a 20% increase in student class registration.
.`,
    technologies: ["Windows Active directory", "Outlook", "Win 10"],
 },
 {
  year: "January 2015 - April 2017",
  role: "System Support Manager",
  company: "Breakthrough Schools, Cleveland OH",
  description: `Executed customer requests/projects.End-to-end management and evaluation of project outcomes.Collaborated with internal and external stakeholders.Oversight of operations and maintenance for assigned tools.Tracked, developed, and documented procedural changes.Utilized MSSQL/IIS for system management.Juggled multiple tasks and projects concurrently.
.`,
  technologies: ["MSexcel", "Windows Active directory", "Outlook"],
},
{
  year: "June 2008 - June 2014",
  role: "Personnel Specialist",
  company: "United States Navy, Virginia Beach",
  description: `Developed training materials and procedures for network systems for a department of 30 sailors.
Served as a help desk specialist, resolving over 5,000 technical tickets.
Installed and maintained hardware, ensuring compliance with safety protocols.
Improved document retrieval time by 10% through an efficient filing system.
`,
  technologies: ["MSexcel",],
},
];

export const PROJECTS = [
   {
      title: "E-Commerce Website",
      image: project1,
      description:
         "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
   },
   {
      title: "Task Management App",
      image: project2,
      description:
         "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["HTML", "CSS", "Angular", "Firebase"],
   },
   {
      title: "Portfolio Website",
      image: project3,
      description:
         "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Bootstrap"],
   },
   {
      title: "Blogging Platform",
      image: project4,
      description:
         "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
   },
];

export const CONTACT = {
   address: "2321 pearlmeadow CT, Douglasville, GA ",
   phoneNo: "757.597.5705 ",
   email: "Tosin.Ehindero@Gmail.com",
};
