import { anime, atlas, booking, css, ecom, express, facelink, git, html, ip, javascript, mongo, movie, next, node, post, prisma, quiz, reactjs, realo, redux, rps, santa1, santa2, santa3, santa4, sass, tailwind, typescript } from "../assets";


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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Node JS",
      icon: node,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "Mongo DB",
      icon: mongo,
    },
    {
      name: "Prisma",
      icon: prisma,
    },
    {
      name: "PostgreSQL",
      icon: post,
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
      description: "Transforming your unique web application ideas into visually stunning and user-friendly interfaces.",
      icon: santa3,
    },
    {
      title: "Next JS/React JS Developer",
      description: "Building powerful single-page applications (SPAs) and dynamic user interfaces with Next.js and React.js.",
      icon: santa2,
    },
    {
      title: "MERN Stack Developer",
      description: "Specializing in the full MERN stack to create visually appealing and responsive web applications.",
      icon: santa1,
    },
    {
      title: "Full Stack Developer",
      description: "Leveraging my skills in both frontend and backend development to create comprehensive and efficient web solutions.",
      icon: santa4,
    },
  ];

 export const projects = [
  {
    id: 11,
    name: "Realo",
    description:
      "This project is built using the MERN stack, Tailwind CSS, Redux Toolkit, and Firebase. It is a comprehensive solution for managing real estate properties, providing a seamless user experience for both property owners and seekers.",
    image: realo,
    source_code_link: "https://github.com/PrtHub/realo",
    project_live_link: "https://realo.onrender.com",
  },
  {
    id: 12,
    name: "FaceLink",
    description:
      "It's a video conference web application built with the latest Next.js and TypeScript. This project replicates Zoom, enabling users to securely log in, create meetings, and access various functionalities such as recording, screen sharing, and managing participants.",
    image: facelink,
    source_code_link: "https://github.com/PrtHub/FaceLink",
    project_live_link: "https://face-link-vc.vercel.app",
  },
  {
    id: 3,
    name: "Atlas - A LMS Platform",
    description:
      "Built on the latest tech stack, this LMS platform offers an intuitive learning experience with features like student dashboard, teacher mode, HLS video player, and CRUD functionality",
    image: atlas,
    source_code_link: "https://github.com/PrtHub/atlas-platform",
    project_live_link: "https://atlas-psi-khaki.vercel.app",
  },
  {
    id: 1,
    name: "Ecommerce Store",
    description:
      "E-commerce Store offering features like shopping cart management, filter products, search products, order placement, persisted state, smooth animations, beautiful icons, and responsive design.",
    image: ecom,
    source_code_link: "https://github.com/PrtHub/Euphoria-EcommerceApplication",
    project_live_link: "https://euphoria-fashion.netlify.app/",
  },
  {
    id: 2,
    name: "Movie Application",
    description:
      "Movie Application offering features like filtering movies and tv shows by genre, get details about movies and tv shows, get filmography of every person related to the movie and tv shows, etc.",
    image: movie,
    source_code_link: "https://github.com/PrtHub/Movie-Application",
    project_live_link: "https://tmdb-pr.netlify.app/",
  },
  {
    id: 5,
    name: "Booking UI",
    description:
      "Sleek Flight Booking UI template built with React and Tailwind CSS. Features user-friendly interface, responsive design, easy customization, well-structured codebase, and warning/success messages.",
    image: booking,
    source_code_link: "https://github.com/PrtHub/Tripma",
    project_live_link: "https://tripma-pr.netlify.app/",
  },
  {
    id: 6,
    name: "MyAnimeList",
    description:
      "MyAnimeList built with React and Tailwind CSS.It allows users to discover and keep track of their favorite anime shows, View details about each anime show, such as its description, rating, and number of episodes",
    image: anime,
    source_code_link: "https://github.com/PrtHub/MyAnimeList",
    project_live_link: "https://myanimelist-pr.netlify.app/",
  },
  {
    id: 7,
    name: "Quiz Application",
    description:
      "Quiz Application built with React using the Trivia-API by API Ninja. The application allows users to test their knowledge by answering questions from various categories. Users must solve each question before accessing the next one.",
    image: quiz,
    source_code_link: "https://github.com/PrtHub/Quiz-app",
    project_live_link: "https://quiz-ok.netlify.app/",
  },
  {
    id: 8,
    name: "Rock Paper Scissors ",
    description:
      "Play Rock, Paper, Scissors against the computer. If the player wins, they gain 1 point. If the computer wins, the player loses one point.View the optimal layout for the game depending on their device's screen size.",
    image: rps,
    source_code_link: "https://github.com/PrtHub/Rock-Paper-Scissors",
    project_live_link: "https://rock-paper-scissors-pri.netlify.app/",
  },
  {
    id: 9,
    name: "IP Address Tracker",
    description:
    "IP Address Tracker allows to search for any IP addresses or domains and see the key information and location. See hover states for all interactive elements on the page, See their own IP address on the map on the initial page load.",
    image: ip,
    source_code_link: "https://github.com/PrtHub/IP-Address-Tracker",
    project_live_link: "https://address-track.netlify.app/",
  },
  ]