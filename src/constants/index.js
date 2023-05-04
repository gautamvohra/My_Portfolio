import{
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "certifications",
      title: "Certifications",
    },
    {
      id:"projects",
      title:"Projects"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Certification",
      company_name: "Coding Ninjas",
      icon: tesla,
      iconBg: "#FFFFFF",
      date: "Jan 2021 - Feb 2022",
      points: [
        "This course taught me how to create stunning websites",
        "The course covers topics such as:",
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Mongo.db",
        "Express.js",
        "JSON",
        "AJAX",
      ],
    },
    {
      title: "Python Developer Certification",
      company_name: "Coding Ninjas",
      icon: tesla,
      iconBg: "#FFFFFF",
      date: "Jan 2021 - Feb 2022",
      points: [
        "This course taught me how to use the Python programming language to solve real-world problems.",
        "The course covers topics such as:",
        "Python",
        "Numpy",
        "Pandas",
        "This course mainly focused on Hands-on exercises and projects ",
      ],
    },
    {
      title: "Java Developer Certification",
      company_name: "Coding Ninjas",
      icon: tesla,
      iconBg: "#FFFFFF",
      date: "Jan 2021 - Feb 2022",
      points: [
        "This course taught me how to use the Java programming language to solve real-world problems.",
        "The course covers topics such as:",
        "Core Java",
        "Data structures and Algorithms",
        "Object Oriented Programming (OOPs)",
        "This course mainly focused on Hands-on exercises and projects ",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Interactive Panda Form",
      description:
        "This project involves creating an interactive form using HTML, CSS, and JavaScript. The form allows users to input information and interact with different fields in real-time, providing feedback as they enter data. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/gautamvohra/Interactive-Panda-Form",
    },
    {
      name: "Quiz App",
      description:
        "The app presents a series of questions to the user, records their answers, and provides a score at the end. It may also include features such as a timer, multiple choice questions, and feedback for incorrect answers..",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/gautamvohra/Quiz-App",
    },
    {
      name: "Tic Tac Toe Game",
      description:
        "This project involves creating a Tic Tac Toe game using HTML, CSS, and JavaScript. Players take turns marking Xs and Os on a 3x3 grid until one player gets three in a row or all spaces are filled, resulting in a tie..",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/gautamvohra/Tic-Tac-Toe-Game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };