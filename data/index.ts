export const contactEmail = "azonubigoodnews@gmail.com";
export const resumeUrl = "https://drive.google.com/file/d/131xzO3sfyHhDgA88GFlPxYf75mRwg8Wg/view?usp=drive_link";

export const navItems = [
  { name: "Home", link: "#home", icon: "home" },
  { name: "About", link: "#about", icon: "user" },
  { name: "Services", link: "#services", icon: "briefcase" },
  { name: "Projects", link: "#projects", icon: "folder" },
  { name: "Experience", link: "#experience", icon: "timeline" },
  { name: "Testimonials", link: "#testimonials", icon: "quote" },
  { name: "Contact", link: "#contact", icon: "envelope" },
];

export const services = [
  {
    id: 1,
    title: "Backend Architecture & Robust APIs",
    tagline: "High-Performance, Secure & Scalable",
    description:
      "Architect and implement production-grade server-side systems, high-throughput RESTful APIs, and database models with robust authentication (JWT/OAuth/OTP), rate limiting, and RBAC.",
    deliverables: [
      "RESTful APIs with Node.js, C#, Express/NestJS",
      "Authentication, authorization, OTP & token security",
      "Database schema design, indexing & Redis caching",
      "Structured logging, Swagger/OpenAPI documentation & testing",
    ],
    badge: "Core Specialty",
  },
  {
    id: 2,
    title: "DevOps & Cloud Infrastructure",
    tagline: "CI/CD, Automation & Cloud Deployment",
    description:
      "Streamline deployment lifecycles and infrastructure reliability through containerization, automated CI/CD workflows, cloud environments (AWS, Docker, Terraform), and proactive monitoring.",
    deliverables: [
      "Docker containerization & multi-environment setups",
      "AWS cloud provisioning & serverless deployments",
      "CI/CD pipeline automation (GitHub Actions / GitLab)",
      "Infrastructure as Code (Terraform) & performance monitoring",
    ],
    badge: "DevOps",
  },
  {
    id: 3,
    title: "Fullstack Web Applications",
    tagline: "End-to-End Modern Architecture",
    description:
      "Deliver full-cycle web applications connecting rock-solid backend services and APIs with modern, responsive Next.js/React frontends, payments, and real-time syncing.",
    deliverables: [
      "Type-safe Next.js / TypeScript end-to-end applications",
      "Real-time data flow with WebSockets & message queues",
      "Payment gateway integrations & webhook handlers",
      "High Core Web Vitals & responsive UI delivery",
    ],
    badge: "Fullstack",
  },
];


export const gridItems = [
  {
    id: 1,
    title: "Collaborative engineering with open, direct communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
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
    title: "Fullstack developer passionate about building reliable software",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building modern fullstack & cloud solutions",
    description: "Current Focus",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.webp",
    spareImg: "/grid.webp",
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
    img: "/p1.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.webp"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Goodnews restructured our entire payment settlement pipeline and Redis caching layer. Under peak load during our holiday campaign, our API latency dropped from 840ms down to 110ms with zero failed transactions. He's easily one of the most dependable backend engineers I've partnered with.",
    name: "Tunde Balogun",
    title: "Head of Engineering at PayPulse Africa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    roleTag: "Fintech Platform",
    rating: 5,
    highlight: "840ms → 110ms API Latency",
  },
  {
    quote:
      "We brought Goodnews in to rescue a messy monolithic deployment. Within 3 weeks, he containerized the entire stack with Docker, automated our CI/CD pipelines via GitHub Actions, and migrated our staging environment to AWS ECS. Deployments went from stressful 2-hour manual rituals to automated 4-minute rollouts.",
    name: "Marcus Vance",
    title: "VP of Product at ScaleGrid Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    roleTag: "Cloud & DevOps",
    rating: 5,
    highlight: "4-Minute Automated CI/CD",
  },
  {
    quote:
      "Goodnews delivered our fullstack enterprise dashboard using Next.js and Node.js. He didn't just write code—he challenged our architectural assumptions, built rigorous role-based access control, and ensured our database queries were properly indexed. The finished product feels snappy and bulletproof.",
    name: "Claire Moreau",
    title: "Co-Founder & CTO at OmniTrack Health",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    roleTag: "SaaS Application",
    rating: 5,
    highlight: "99.9% Uptime & RBAC Security",
  },
  {
    quote:
      "What stands out about Goodnews is his deep ownership. When our database hit concurrent connection limits on a Friday night, he proactively analyzed connection pool bottlenecks, introduced pooling with PgBouncer, and had us running smoothly before users even noticed. Absolute rockstar.",
    name: "Ibrahim Sani",
    title: "Lead Systems Architect at KrediNet",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    roleTag: "Database & Infrastructure",
    rating: 5,
    highlight: "Zero Downtime Incident Response",
  },
  {
    quote:
      "Working with Goodnews gave our startup the technical backbone we needed to confidently pitch investors. He built our core REST APIs, webhook handlers, and Stripe integration with bulletproof idempotency. Fast communication, clean Git hygiene, and stellar code craftsmanship.",
    name: "Elena Rostova",
    title: "Managing Director at HyperLoop Ventures",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    roleTag: "Fullstack Architecture",
    rating: 5,
    highlight: "Production-Grade Payment Flow",
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
    thumbnail: "/exp3.webp",
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