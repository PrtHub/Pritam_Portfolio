import { booking, css, ecom, git, html, javascript, logistic, movie, music, reactjs, redux, santa1, santa2, santa3, santa4, sass, tailwind } from "../assets";


export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "project",
      title: "Project",
    },
  ];


  export const skills = [
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
      name: "git",
      icon: git,
    },
    {
      name: "sass",
      icon: sass,
    },
  ]

 export const services = [
    {
      title: "Frontend Developer",
      description: "If you have a unique web application idea, I can turn it into reality.",
      icon: santa3,
    },
    {
      title: "React Developer",
      description: "I can build powerful single-page applications (SPAs) and dynamic user interfaces.",
      icon: santa2,
    },
    {
      title: "Responsive Web development",
      description: "I specialize in creating visually appealing and responsive web applications.",
      icon: santa1,
    },
    {
      title: "User Interface Design",
      description: "With my keen eye for design and understanding of user experience principles, I can create captivating and user-friendly interfaces.",
      icon: santa4,
    },
  ];

 export const projects = [
  {
    name: "Ecommerce Store",
    description:
      "E-commerce Store offering features like shopping cart management, filter products, search products, order placement, persisted state, smooth animations, beautiful icons, and responsive design.",
    image: ecom,
    source_code_link: "https://github.com/PrtHub/Euphoria-EcommerceApplication",
    project_live_link: "https://euphoria-fashion.netlify.app/",
  },
  {
    name: "Movie Application",
    description:
      "Movie Application offering features like filtering movies and tv shows by genre, get details about movies and tv shows, get filmography of every person related to the movie and tv shows, etc.",
    image: movie,
    source_code_link: "https://github.com/PrtHub/Movie-Application",
    project_live_link: "https://tmdb-pr.netlify.app/",
  },
  {
    name: "Web Music",
    description:
      "Music web page built with React, Tailwind CSS, React Redux, Redux Toolkit, Shazam API, and Vite. Features include listening to songs, searching songs, viewing song lyrics, and accessing trending songs and artists.",
    image: music,
    source_code_link: "https://github.com/PrtHub/Musix",
    project_live_link: "https://musix-pr.netlify.app",
  },
  {
    name: "Logistic and Transport",
    description:
      "Sleek and user-friendly Logistics and Transportation UI built with React and Tailwind CSS. Features responsive design, easy customization, and well-structured codebase.",
      image: logistic,
    source_code_link: "https://github.com/PrtHub/TransitFlow",
    project_live_link: "https://github.com/PrtHub/TransitFlow",
  },
  {
    name: "Booking UI",
    description:
      "Sleek Flight Booking UI template built with React and Tailwind CSS. Features user-friendly interface, responsive design, easy customization, well-structured codebase, and warning/success messages.",
    image: booking,
    source_code_link: "https://github.com/PrtHub/Tripma",
    project_live_link: "https://tripma-pr.netlify.app/",
  },
  ]