import { anime, booking, css, ecom, git, html, ip, javascript, logistic, movie, music, quiz, reactjs, redux, rps, santa1, santa2, santa3, santa4, sass, tailwind } from "../assets";


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
    id: 3,
    name: "Web Music",
    description:
      "Music web page built with React, Tailwind CSS, React Redux, Redux Toolkit, Shazam API, and Vite. Features include listening to songs, searching songs, viewing song lyrics, and accessing trending songs and artists.",
    image: music,
    source_code_link: "https://github.com/PrtHub/Musix",
    project_live_link: "https://musix-pr.netlify.app",
  },
  {
    id: 4,
    name: "Logistic and Transport",
    description:
      "Sleek and user-friendly Logistics and Transportation UI built with React and Tailwind CSS. Features responsive design, easy customization, and well-structured codebase.",
      image: logistic,
    source_code_link: "https://github.com/PrtHub/TransitFlow",
    project_live_link: "https://github.com/PrtHub/TransitFlow",
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