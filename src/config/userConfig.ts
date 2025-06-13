export const userConfig = {
    // Personal Information  C:\Users\yasse\OneDrive\Bureau\allFolders\latestPortfolio\astroPortfolio\macporfolio\portfolio\src\config\projects\etl_energy_consumption.json
    name: 'Yasser Chouket',
    role: 'Software Engineering Student',
    location: 'Tunis, Tunisia',
    email: 'yasserchouket2101@gmail.com',
    website: 'yasser',
    roleFocus: 'AI, Data Engineering, Full Stack Development using react, Next.js and Spring Boot',
    age: 20,    

    // Social Links
    social: {
        github: 'https://github.com/chouket0102',
        linkedin: 'https://www.linkedin.com/in/yasser-chouket-9b15b8285/', 
    },


    // Contact Information
    contact: {
        email: 'yasserchouket2101@gmail.com',
        phone: '+21654574039', 
        calendly: 'https://calendly.com/aabdoo2304', 
    },

    

    // Resume Configuration
    resume: {
        url: 'https://drive.google.com/drive/folders/1gtsg_s_u8OVQ3ApvvjAz8uFJNNubO5ve/view',
        localPath: '/resume.pdf',
    },

    // Education Background
    education: [
        {
            degree: "Bachelor of Computer Science",
            major: "Software Engineering",
            institution: "National Institute of Applied Science and Technology",
            location: "Tunis, Tunisia",
            year: "2023-2028",
           
        }
    ],

    

    
// ...existing code...
skills: [
    {
        name: "Python",
        image: "/svg/python.svg"
    },
    {
        name: "Tensorflow",
        image: "/svg/tensorflow.svg"
    },
    {
        name: "Pytorch",
        image: "/svg/pytorch.svg"
    },
    {
        name: "PostgreSQL",
        image: "/svg/postgresql (1).svg"
    },
    {
        name: "C",
        image: "/svg/c.svg"
    },
    {
        name: "Java",
        image: "/svg/java.svg"
    },
    
   
    {
        name: "JavaScript",
        image: "/svg/javascript.svg"
    },

    {
        name: "MongoDB",
        image: "/svg/mongodb.svg"
    },
    {
        name: "MySQL",
        image: "/svg/mysql.svg"
    },
    {
        name: "Docker",
        image: "/svg/docker.svg"
    },
    {
        name:"Apache Airflow",
        image: "/svg/airflow.svg"
    },
    {
        name: "HTML5",
        image: "/svg/html5.svg"
    },
    {
        name: "Bash",
        image: "/svg/bash.svg"
    },
    {
        name: "DBT",
        image: "/svg/dbt.svg"
    },
    {
        name: "Raspberry Pi",
        image: "/svg/raspberry_pi.svg"
    }
],


    

    
    competitions: [
        
       
        
       
    ],

    
    experience: [
        {
            title: "",
            company: "",
            location: "",
            period: "",
            description: "",
            technologies: [],
            images: [
                {
                    url:"",
                    alt:""
                    
                }
            ]
        },
        
    ],

    // SEO Configuration
    seo: {
        title: 'Yasser Chouket - Software Engineer',
        description: 'Software Engineering Student  based in Tunisia specializing in AI, Data Engineering, and Full Stack Development. Passionate about building innovative solutions using Java, Python, and SQL.',
        keywords: ['Software Engineer','Java','Spring Boot', 'ETL', 'Python', 'SQL', 'Tunisia'],
    },
     projects :[
  {
    title: "Virtual Interview Coach",
    description:
      "An AI-powered interview preparation platform that provides personalized coaching and feedback for job seekers. Features real-time interview simulations with instant analysis of responses and industry-specific question preparation.",
    techStack: [
      { name: "Next.js", icon: "/svg/next.svg" },
      { name: "FireBase", icon: "/svg/firebase.svg" },
      { name: "Gemini AI", icon: "/svg/gemini.svg" },
    ],
    link: "https://github.com/chouket0102/",
    preview: "#",
    status: "Completed",
  },
  {
    title: "Patient Management System",
    description:
      "A sophisticated microservices-based healthcare platform built with Spring Boot, React, and Kafka for real-time data synchronization. The system implements a robust architecture with dedicated services for patient management, billing, authentication, and notifications, all communicating through gRPC and Kafka event streaming. Features include JWT-based authentication, PostgreSQL persistence with JPA/Hibernate, and containerized deployment with Docker.",
    techStack: [
      { name: "Spring Boot", icon: "/svg/spring.svg" },
      { name: "React", icon: "/svg/react.svg" },
      { name: "PostgreSQL", icon: "/svg/postgreSQL.svg" },
      { name: "Kafka", icon: "/svg/kafka.png" },
    ],
    link: "https://github.com/chouket0102",
    preview: "#",
    status: "Completed",
  },
  {
    title: "AI Email Reply Extension",
    description:
      "A productivity-enhancing Chrome extension that transforms email communication through AI-powered response suggestions. The tool analyzes incoming emails for context and intent, then generates appropriate reply options based on previous communication patterns and best practices. Integration with Gemini API enables natural language processing for human-like responses, helping users manage their inbox more efficiently.",
    techStack: [
      { name: "Spring Boot", icon: "/svg/spring.svg" },
      { name: "JavaScript", icon: "/svg/javaScript.svg" },
      { name: "Gemini AI", icon: "/svg/gemini.svg" },
      {name:"",icon:"/svg/extension.svg"}
    ],
    link: "https://github.com/chouket0102",
    preview: "#",
    status: "On Development",
  },
  {
    title: "Banking DataWarehouse",
    description:
      "This project implements a comprehensive data warehouse for a banking environment using a modern medallion architecture approach.",
    techStack: [
      { name: "PySpark", icon: "/svg/spark.svg" },
      { name: "Azure", icon: "/svg/azure.svg" },
      
    ],
    link: "https://github.com/chouket0102",
    preview: "#",
    status: "Completed",
  },
]

    
   
    
} as const; 