import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shiv Shankar Kanaujiya",
  initials: "SSK",
  url: "https://shivprime94.me",
  location: "Hardoi, Uttar Pradesh",
  locationLink: "https://goo.gl/maps/7z3vz1Q1J8Q2",
  description:
    "Cracked Software and Generative AI Engineer. I love building cool working stuff and helping people.",
  summary:
    "I am a final year undergraduate student at IIT Kharagpur with experience of 8 internships, looking for opportunities in the field of Software Engineering and Generative AI.",
  avatarUrl: "/me.png",
  skills: [
    "C",
    "C++",
    "Python",
    "React.js",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Redis",
    "Postgres",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "AWS",
    "LLMs",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shivshankar.kanaujiya.iitkgp@gmail.com",
    tel: "+9181XXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shivprime94",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shiv-prime94",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@shivshankar-kanaujiya",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shivshankar.kanaujiya.iitkgp@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Trilogy Innovations (CodeNation)",
      href: "https://trilogy.com/",
      badges: [],
      location: "Remote",
      title: "Software Development Engineer Intern",
      logoUrl: "/trilogy.png",
      start: "December 2024",
      end: "February 2024",
      description:
        `Building Protosmith.ai`,
    },
    {
      company: "Microsoft",
      href: "https://microsoft.com",
      badges: [],
      location: "Hyderabad, India",
      title: "Software Engineer Intern",
      logoUrl: "/microsoft.png",
      start: "May 2024",
      end: "July 2024",
      description:
        `Improved data generation by 36.36% by creating C# parser using the Roslyn, Semantic Models, and Syntax Trees.
        Extended the scope of parser in 2 more languages, Python and JavaScript using AST, and Esprima respectively.
        Enhanced method-level namespace resolution by loading assemblies for NuGet packages and default namespaces and building trie for class libraries in 4 different configurations, achieving a 58% improvement in resolution efficiency.
        Generated CodeBERT embeddings of SPO.Core repository, used FAISS for similarity search of embeddings and utilized them for code generation in in-repository-context, attaining 81.29% accuracy while testing on 100 samples`,
    },
    {
      company: "Mercor",
      href: "https://mercor.com",
      badges: [],
      location: "Remote",
      title: "Interview Proctor",
      logoUrl: "/mercor.jpeg",
      start: "Mar 2024",
      end: "Apr 2024",
      description:
        "Conducted 10+ interviews for software engineer role for the company, and provided feedback to the candidates",
    },
    {
      company: "FunctionUp",
      href: "https://functionup.org",
      badges: [],
      location: "Remote",
      title: "Teaching Assistant",
      logoUrl: "/functionup.jpeg",
      start: "May 2017",
      end: "August 2017",
      description:
        "Mentored 100+ students in the field of software engineering, and provided guidance on how to get started in the field. ",
    },
    {
      company: "Pinch",
      badges: [],
      href: "pinch-me.com",
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/pinch_me.jpeg",
      start: "December 2022",
      end: "January 2023",
      description:
        "Built the crypto trading app using React Native, enabling users to learn, share and trade cryptocurrencies together . Implemented the chat feature using Firebase Firestore, and integrated the trading API using WebSockets. Developed the user authentication system using Firebase Auth, and integrated the trading API using WebSockets. Implemented the chat feature using Firebase Firestore, and integrated the trading API using WebSockets",
    },
    {
      company: "Actuary Life",
      href: "https://actuarylife.com",
      badges: [],
      location: "Noida, India",
      title: "Full Stack Developement Intern",
      logoUrl: "/actuarylife.jpeg",
      start: "May 2022",
      end: "June 2022",
      description:
        "Created a full-stack Learning Management System using React JS, Node JS, Express JS, and MySQL . Engineered actuarial valuation models to compute the pricing and reserving using Gradient Descent Algorithm. Analyzed and rendered the data in frontend app using datatables and the open-source JavaScript library ChartJS",
    },
    {
      company: "Pristine Escapes",
      href: "https://pristineescapes.com",
      badges: [],
      location: "Bangalore, India",
      title: "Frontend Developer Intern",
      logoUrl: "/pristine_escapes.jpeg",
      start: "October 2021",
      end: "January 2022",
      description:
        "Made all 750+ pages on the website responsive by editing each page in Elementor, a page builder for WordPress. Developed a custom WordPress theme using PHP, HTML, CSS, and JavaScript. Designed 40+ brochures using a vector graphics editor, Figma, for promoting different properties and locations",
    },
    {
      company: "Yunlin University of Science and Technology",
      href: "https://yuntech.edu.tw",
      badges: [],
      location: "Taiwan",
      title: "Research Intern",
      logoUrl: "/lime.svg",
      start: "October 2021",
      end: "January 2022",
      description:
        "Shifted platform from 1 canvas to 3 separate canvases, which increased the visibility of the platform by 33.33% . Developed a 3D graphing calculator using WebGL, Three.js, and JavaScript. Incorporated unit conversion, sliders, function for showing surfaces and volumes, and 360 degrees of auto-rotation. Implemented the 3D graphing calculator using WebGL, Three.js, and JavaScript",
    },

  ],
  education: [
    {
      school: "Indian Institute of Technology, Kharagpur",
      href: "https://www.iitkgp.ac.in",
      degree: "Dual Degree (B.Tech + M.Tech)",
      logoUrl: "/iitkgp.png",
      start: "2020",
      end: "2025",
    },
  ],
  
  projects: [
    // {
    //   title: "Post",
    //   href: "https://shivprime94.github.io/Post",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "Developed a social media platform for sharing thoughts.",
    //   technologies: [
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB Atlas",
    //     "Github Pages",
    //     "Render",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://shivprime94.github.io/Post",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/shivprime94/Post",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/post-me.png",
    //   video:"",
    // },
    // {
    //   title: "Translate Text",
    //   href: "https://github.com/shivprime94/TranslateText",
    //   dates: "June 2023 - July 2023",
    //   active: true,
    //   description:
    //     "Developed a text translation platform for translating text to 20+ languages and used Redis for caching",
    //   technologies: [
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "Redis"
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/shivprime94/TranslateText",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/translate-text.png",
    //   video: "",
    // },
    // {
    //   title: "Profile FYI",
    //   href: "https://profile-fyi.netlify.app/",
    //   dates: "August 2024 - August 2024",
    //   active: true,
    //   description:
    //     "Developed a e-commerce platform with add to card, remove from cart, discount, quantity change and checkout functionality.",
    //   technologies: [
    //     "Next.js",
    //     "TailwindCSS",
    //     "Javascript",
    //     "React.js",
    //     "Github",
    //     "Netlify"
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://profile-fyi.netlify.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/shivprime94/profile-fyi",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/profile-fyi.png",
    //   video: "",
    // },
    // {
    //   title: "Crypto Coins",
    //   href: "https://github.com/shivprime94/crypto-app",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed a web app to list all prices, their changes in real-time of cryptocurrencies using the coingecko API",
    //   technologies: [
    //     "React.js",
    //     "JavaScript",
    //     "API",
    //     "Github Pages",
    //     "Git",
    //     "GitHub"
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://shivprime94.github.io/crypto-app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/shivprime94/crypto-app",
    //       icon: <Icons.github className="size-3" />,
    //     }
    //   ],
    //   image: "/coin.png",
    //   video:"",
    // },
  ],
  blogs:[
    {
      title: "Microsoft interview experience for SWE - Intern [Off-Campus]",
      dates: "January 2024 - Jan 2024",
      description:
        "I applied through the career portal on July 17 and got the OA link with two questions. Both were leetcode easy-medium. I solved and submitted them within 20 minutes..",
      image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1706329920629/fe27c816-23ad-4909-bc70-cd13d80f4bff.gif?w=1600&h=840&fit=crop&crop=entropy&auto=format,compress&gif-q=60&format=webm",
      links: [
        {
          title: "Hashnode",
          href: "https://shivshankarkanaujiya.hashnode.dev/my-microsoft-interview-experience-for-swe-intern-off-campus",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Trilogy Innovations Interview Experience for SDE Intern [Off-Campus]",
      dates: "January 2024 - Jan 2024",
      description:
        "I applied through a Google form circulated by a friend who sent it to me. The first round was an online assessment on Interviewbit. Received an email that I got..",
      image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1705817059762/71f17533-8f39-4874-87d0-e751e573ec49.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      links: [
        {
          title: "Hashnode",
          href: "https://shivshankarkanaujiya.hashnode.dev/trilogy-innovations-interview-experience-for-sde-intern-off-campus",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

        {
      title: "Deep Linking in React-Native",
      dates: "January 2024 - Jan 2024",
      description:
        "In this blog, I will explain how to implement deep linking in react-native in two different ways. First, what is deep linking, and why do we need it in our app?..",
      image:"https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/gy08FXeM2L4/upload/e4caf5c23ba1f90dee82160f8a9cfb2a.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      links: [
        {
          title: "Hashnode",
          href: "https://shivshankarkanaujiya.hashnode.dev/deep-linking-in-react-native",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

    {
      title: "How to get internships (things you need to know)",
      dates: "February 2024 - February 2024",
      description:
        "You can explore a few things - front-end development using some in-demand libraries/frameworks - react, flutter, etc. Most front-end applications, especially web ones, require Javascript, HTML, and CSS..",
      image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1707309405559/64ddf4dd-7c92-4abc-83d9-d062303fc86d.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      links: [
        {
          title: "Hashnode",
          href: "https://shivshankarkanaujiya.hashnode.dev/deep-linking-in-react-native",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    
  ],
  hackathons: [
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
  ],
} as const;
