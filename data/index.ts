export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Prizia",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Goodnews was a great experience. He understood the requirements quickly, communicated clearly, and delivered a reliable solution. His attention to detail and problem-solving skills really stood out throughout the project.",
    name: "Chinedu Okafor",
    title: "Product Manager at TechNova Africa",
  },
  {
    quote:
      "I was impressed by Goodnews's ability to turn ideas into functional, well-structured applications. He was proactive, easy to work with, and consistently focused on delivering quality results.",
    name: "Sarah Williams",
    title: "Founder of BrightLabs",
  },
  {
    quote:
      "Goodnews brought strong technical skills and a great attitude to our project. From backend development to API integration, he handled challenges professionally and made sure everything worked as expected.",
    name: "Emeka Nwosu",
    title: "Software Engineer at CloudBridge",
  },
  {
    quote:
      "It was a pleasure collaborating with Goodnews. He is a fast learner, communicates effectively, and takes ownership of his work. I would definitely recommend him to anyone looking for a dedicated software developer.",
    name: "James Anderson",
    title: "Engineering Manager at DevCore",
  },
  {
    quote:
      "Goodnews consistently demonstrated creativity, technical ability, and attention to detail. He contributed valuable ideas to the project and delivered solutions that exceeded our expectations.",
    name: "Amaka Eze",
    title: "Project Lead at InnovateHub",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Instructor — Ann Notch Digital Academy",
    desc: "Teach students practical software development and cloud computing concepts, including AWS, helping learners build hands-on technical skills.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Engineer — Kingdom Scripts Tech Solutions",
    desc: "Worked as a backend engineer intern, developing and maintaining backend services using C# and LINQ while contributing to application functionality and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Backend Engineer — Dive Africa",
    desc: "Built secure REST APIs with Node.js, implementing OTP authentication, refresh tokens, email verification, RBAC, rate limiting, structured logging, and Swagger API documentation.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer — Coriftech Solutions",
    desc: "Developed responsive web interfaces using HTML5, CSS, and modern frontend technologies while contributing to real-world client projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ideategudy/"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/ideategudy/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ideategudy/"
  },
];