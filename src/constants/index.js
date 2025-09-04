export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases of fresh vegetables, fruits, and grains from farmers and suppliers, enabling customers to shop online and have products delivered directly to their doorstep.",
    subDescription: [
      "Built a scalable application with Python and Django for managing online transactions.",
      "Implemented secure authentication and database management with PostgreSQL.",
      "Designed a responsive frontend with React for better user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/vegefoods-1.jpg",
    tags: [
      { id: 1, name: "Python", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { id: 2, name: "Django", path: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "PostgreSQL", path: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
    ],
  },
  {
    id: 2,
    title: "AI-Powered Chatbot System",
    description:
      "An AI-powered chatbot system designed to provide intelligent, real-time responses to user queries. Built with Natural Language Processing (NLP) and Machine Learning models.",
    subDescription: [
      "Built using NLP and ML models to understand user queries and context.",
      "Implemented multi-turn conversations with intent recognition.",
      "Integrated with external APIs and databases for real-time information.",
      "Developed a React-based frontend for seamless interaction.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/chatbot.webp",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-original.svg" },
      { id: 2, name: "TensorFlow", path: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "SQLite", path: "/assets/logos/sqlite.svg" },
    ],
  },
  {
    id: 3,
    title: "Healthcare AI Assistant",
    description:
      "An AI-powered healthcare assistant designed to provide medical guidance, symptom analysis, and patient support using NLP and ML models.",
    subDescription: [
      "Developed an AI-powered assistant capable of answering health-related queries.",
      "Integrated NLP and ML models to provide personalized healthcare recommendations.",
      "Implemented secure APIs for patient data handling.",
      "Built a real-time chat interface for patient interaction.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/heathcare.webp",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-original.svg" },
      { id: 2, name: "TensorFlow", path: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "HTML5", path: "/assets/logos/html5.svg" },
    ],
  },
  {
    id: 4,
    title: "Daily News Email Automation",
    description:
      "An automated system that collects, curates, and delivers personalized daily news updates directly to users’ email inboxes.",
    subDescription: [
      "Developed an automated pipeline to collect and curate news from multiple sources.",
      "Implemented NLP models to summarize long articles into concise updates.",
      "Integrated scheduling to ensure daily delivery.",
      "Ensured reliable email delivery using SMTP protocols.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/email.webp",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-original.svg" },
      { id: 2, name: "Spacy", path: "/assets/logos/Spacy.png" },
      { id: 3, name: "Pandas", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { id: 4, name: "Gmail API", path: "https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" },
    ],
  },
  {
    id: 5,
    title: "Earthquake Prediction System",
    description:
      "An AI-powered earthquake prediction system designed to analyze seismic data, detect patterns, and provide early warnings.",
    subDescription: [
      "Developed AI/ML models to analyze seismic data and detect early warning signals.",
      "Implemented real-time data ingestion pipelines.",
      "Applied predictive analytics and pattern recognition for forecasting.",
      "Built an alert system to provide timely warnings.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/earthquake.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-original.svg" },
      { id: 2, name: "TensorFlow", path: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
      { id: 3, name: "Numpy", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { id: 4, name: "Matplotlib", path: "/assets/logos/Matplotlib.svg" },
    ],
  },
  {
    id: 6,
    title: "Fake News Detection System",
    description:
      "An AI-powered system that detects and classifies fake news articles using NLP and ML techniques.",
    subDescription: [
      "Built using NLP for accurate fake news classification.",
      "Implemented preprocessing pipelines like tokenization and TF-IDF.",
      "Trained ML models to improve accuracy and reduce false positives.",
      "Developed a real-time detection system with visualization.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/fake news.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-original.svg" },
      { id: 2, name: "Scikit-learn", path: "/assets/logos/Scikit_learn.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/srijan-roy-iemians/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/its_ur_roy123/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Github",
    href: "https://github.com/SrijanRoy12",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export const experiences = [
  {
    title: "ML & Data Science Enthusiast",
    job: "Foundation & Exploration",
    date: "2021-2023",
    contents: [
      "Built strong foundations in programming, algorithms, and data structures.",
      "Explored core concepts in Data Science, Machine Learning, and AI.",
      "Worked on projects involving Python, R, and SQL for data preprocessing, EDA, and statistical analysis.",
      "Developed data visualization dashboards using Matplotlib, Seaborn, and Power BI.",
      "Strengthened analytical and problem-solving skills through applied research and coding challenges.",
    ],
  },
  {
    title: "AI/ML Project Developer",
    job: "Applied Research & Projects",
    date: "2023-2024",
    contents: [
      "Designed ML pipelines for scalable data ingestion, preprocessing, and model training.",
      "Implemented predictive analytics for automotive telematics and anomaly detection.",
      "Built deep learning models for image and signal processing using TensorFlow and PyTorch.",
      "Applied MLOps practices such as model versioning, experiment tracking, and deployment.",
      "Explored AI applications in autonomous systems, cloud-based communication, and real-time decision-making.",
    ],
  },
  {
    title: "ML Engineer & Intern",
    job: "TATA, Deloitte, TechSd",
    date: "2025-Present",
    contents: [
      "Working on end-to-end ML and data-driven projects with real-world industry impact.",
      "Contributed to AI/ML-powered enterprise solutions during internships.",
      "Created a personal AI-driven portfolio using Three.js, React, Vite, and Web APIs.",
      "Exploring advanced areas like Generative AI, NLP, and Computer Vision.",
      "Continuously enhancing skills in modern ML frameworks, LLM tools, and backend technologies.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
