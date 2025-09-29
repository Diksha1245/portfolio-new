export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Computer Science & Engineering student at VIT with expertise in Deep Learning & AI",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/cyberpunk-setup.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available for collaboration across different time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "technologies",
    description: "My tech stack includes",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about AI, Deep Learning, and Web Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Building ML models and AI-powered applications for real-world impact",
    description: "What I'm currently working on",
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "absolute right-0 bottom-0 md:w-96 w-60 opacity-20 xl:opacity-70",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Voter Face Recognition System",
    des: "Secure voter identification system using deep CNN embeddings with Firebase integration and Google Authentication. Achieved 95%+ accuracy.",
    img: "/voter.jpeg",
    iconLists: ["/python.svg", "/tensorflow.svg", "/firebase.svg", "/opencv.svg"],
    link: "https://github.com/diksha1245",
  },
  {
    id: 2,
    title: "Transformer Time Series Prediction",
    des: "AI-powered forecasting system for multivariate time series data using Transformer architecture with multi-head attention.",
    img: "/transformer.jpeg",
    iconLists: ["/pytorch.svg", "/python.svg", "/pandas.svg", "/scikit.svg"],
    link: "https://github.com/diksha1245",
  },
  {
    id: 3,
    title: "Pneumonia Detection Model",
    des: "Deep learning model using VGG16 for chest X-ray analysis achieving 90%+ validation accuracy with advanced preprocessing.",
    img: "/cnn.jpeg",
    iconLists: ["/python.svg", "/tensorflow.svg", "/opencv.svg", "/numpy.svg"],
    link: "https://github.com/diksha1245",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    des: "Responsive portfolio website built with Next.js and Tailwind CSS showcasing projects, experience, and skills.",
    img: "/portfolio.jpeg",
    iconLists: ["/nextjs.svg", "/react.svg", "/tailwind.svg", "/vercel.svg"],
    link: "https://github.com/diksha1245",
  },
    {
      id: 5,
      title: "Autonomous Vehicle Navigation",
      des: "Research on AI algorithms for real-time autonomous vehicle navigation using nuScenes dataset, published in IEEE conference.",
      img: "/autonomous.jpeg",
      iconLists: ["/python.svg", "/pytorch.svg", "/opencv.svg", "/numpy.svg"],
      link: "https://github.com/diksha1245",
    },
    {
      id: 6,
      title: "AI Blog Writer - Full Stack Application",
      des: "Developed a full-stack AI blog writer application with React, Node.js, and MongoDB featuring user authentication and content management.",
      img: "/ecommerce.jpeg",
      iconLists: ["/react.svg", "/nodejs.svg", "/mongodb.svg", "/express.svg"],
      link: "https://github.com/diksha1245",
    }
];

export const testimonials = [
  {
    quote: "Diksha demonstrated exceptional technical skills and dedication during her internship. Her work on deep learning models was impressive.",
    name: "Technical Mentor",
    title: "Yokogawa Middle East",
  },
  {
    quote: "Outstanding problem-solving abilities and attention to detail. The pneumonia detection model achieved remarkable accuracy.",
    name: "Project Supervisor",
    title: "Deep Learning Research",
  },
  {
    quote: "Great leadership skills and excellent communication. Led our club to new heights with innovative initiatives.",
    name: "Club Member",
    title: "BrisaVIT Toastmasters",
  },
  {
    quote: "Professional web development work with modern UI design. Delivered quality results on time.",
    name: "Client Feedback",
    title: "FluidTech Trading",
  },
  {
    quote: "Innovative research approach in autonomous vehicle navigation. The published work shows great potential.",
    name: "Research Reviewer",
    title: "IEEE Conference",
  },
];

export const companies = [
  {
    id: 1,
    name: "FluidTech",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Yokogawa",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "VIT",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "IEEE",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "AWS",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "FluidTech Trading and Est",
    title: "Frontend Developer Intern",
    desc: "Designed and deployed company website with responsive UI. Created Google Business Profile and integrated SEO best practices for improved visibility.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    company: "Yokogawa Middle East",
    title: "Deep Learning Intern",
    desc: "Implemented CNNs and YOLOv4 for object detection. Built pneumonia detection model using VGG16 achieving 90%+ validation accuracy.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    company: "BrisaVIT Toastmasters Club",
    title: "President",
    desc: "Led public speaking initiatives and mentoring sessions. Organized events and workshops to develop communication skills among members.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    company: "IEEE Research",
    title: "Research Author",
    desc: "Published research on autonomous vehicle navigation algorithms. Tested AI algorithms against nuScenes dataset for improved real-time performance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/diksha1245",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/diksha",
  },
];
