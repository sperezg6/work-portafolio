import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
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
    postgres,
    tensorflow,
    aws,
    fastapi,
    itam,
    gobravo,
    mattilda,
    lstm,
    photo_portafolio,
    premier,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
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
      name: "Python",
      icon: python,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Marketing Intern",
      company_name: "ITAM",
      icon: itam,
      iconBg: "#383E56",
      date: "November 2021 - October 2022",
      points: [
        "Conducted market research that identified key customer segments and generated new product ideas.",
        "Developed effective brand messaging that resonated with target consumers",
        "Automated email contacting to the different customers using Python"
      ],
    },
    {
      title: "Strategy Analyst",
      company_name: "Resuelve tu Deuda | Go Bravo",
      icon: gobravo,
      iconBg: "#E6DEDD",
      date: "October 2022 - May 2023",
      points: [
        "Developed a lead generation strategy that increased qualified leads -> Helped increased clients debt in 30%",
        "Developed dashboards and reports using SQL, LookerStudio and Metabase",
        "Developed a comprehensive employee segmentation strategy that increased sales by 25% over the course of 6 months"
      ],
    },
    {
      title: "Tech Analyst",
      company_name: "mattilda",
      icon: mattilda,
      iconBg: "#383E56",
      date: "May 2023 - present",
      points: [
        "Develop BackEnd endpoints usign AWS Lambda and FastAPI, for the software platform and internal use.",
        "Focused on automating different proccesses like the creation Down-Payments and invoicing process.",
        "Designed and implemented a business intelligence system that enabled data-driven decision-making, Databricks, Power BI and Tablue",
        "Developed a data ingestion process to automate the transfer of data from multiple sources into a single database, resulting in a 50% reduction in manual data entry",
        "Designed a Dasboards that as embedded into the platform in order to improve data visibility for customers."
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
      name: "LSTM for Music Generation",
      description:
        "A deep learning model that generates music using Long Short-Term Memory (LSTM) networks. The model was trained on a dataset of classical music compositions in MIDI format.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "keras",
          color: "green-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: lstm,
      source_code_link: "https://huggingface.co/collections/SantiagoPG/music-generation-model-66551bbe7491c508a139a0c4",
    },
    {
      name: "Evolutionary Calendar Algorithm",
      description:
        "Evolutionary Algorithm that generates a calendar for the Premier League. The algorithm uses a genetic algorithm to optimize the calendar based on different constraints. Like the distance between teams, the number of games played at home, and the number of games played in a row.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Evolutionary Algorithm",
          color: "green-text-gradient",
        },
        {
          name: "IA",
          color: "pink-text-gradient",
        },
      ],
      image: premier,
      source_code_link: "https://github.com/sperezg6/evolutionaty_calendar_algorithm",
    },
    {
      name: "Personal Photo Portfolio",
      description:
        "A personal portfolio website that showcases my photography work. The website features a gallery of photos, a contact form, and a blog. This was made using HTML, CSS, and JavaScript.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: photo_portafolio,
      source_code_link: "https://github.com/sperezg6/photo_portafolio.io",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };