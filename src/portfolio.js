/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saravanan Rajendran",
  title: "Hi, I'm Saravanan",
  subTitle: emoji(
    "Senior Full Stack Engineer with 10+ years of experience building scalable enterprise platforms across fintech, healthcare, retail, and banking domains. Specialized in Java, Spring Boot, React, Angular, Microservices, AWS, Azure, and AI-powered solutions using Spring AI, MCP, LLMs, and Snowflake Cortex."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1jB8HhQoRdXscS3xV9v6SDpZuy095O2JO/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sarvanhd",
  linkedin: "https://www.linkedin.com/in/saravanan-rajendran-59b2a9106/",
  gmail: "sarvanhd@gmail.com",
  /* gitlab: "https://gitlab.com/sarvanhd",
  facebook: "https://www.facebook.com/sarvanhd",
  medium: "https://medium.com/@sarvanhd",
  stackoverflow: "https://stackoverflow.com/users/10422806/sarvanhd", */
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL STACK ENGINEER BUILDING CLOUD-NATIVE, AI-ENABLED AND ENTERPRISE SCALE APPLICATIONS",

  skills: [
    emoji(
      "⚡ Design and build scalable microservice architectures using Java, Spring Boot and cloud-native technologies"
    ),
    emoji(
      "⚡ Develop modern web applications using React, Angular, Next.js and enterprise UI frameworks"
    ),
    emoji(
      "⚡ Integrate AI capabilities using Spring AI, MCP, LLMs and RAG architectures to build intelligent applications"
    ),
    emoji("⚡ Deploy secure, highly available applications on AWS and Azure"),
    emoji(
      "⚡ Lead platform modernization, monolith-to-microservice migrations and technical architecture decisions"
    )
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-memory"
    },
    {
      skillName: "AI/LLM",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Tagore Engineering College",
      subHeader: "Bachelor of Engineering - Computer Science",
      duration: "2011 - 2015",
      desc: "Graduated with a Bachelor's degree in Computer Science Engineering.",
      descBullets: [
        "Focused on software engineering and computer science fundamentals"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Architecture",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "85%"
    },
    {
      Stack: "Microservices & Distributed Systems",
      progressPercentage: "90%"
    },
    {
      Stack: "AI Integrations",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "PwC",
      companylogo: require("./assets/images/pwc.png"),
      date: "Oct 2022 – Present",
      desc: "Leading enterprise-scale application development and AI-powered solutions across healthcare, retail, and fintech domains.",
      descBullets: [
        "Architected AI-powered SaaS BI platform using LLMs and Snowflake Cortex",
        "Built employee management portal serving 500–5000 employees",
        "Modernized fintech platform using Next.js and Clover payment integrations",
        "Led healthcare platform consolidation for 500+ users",
        "Mentored engineers and conducted architecture reviews"
      ]
    },
    {
      role: "Professional",
      company: "Fiserv",
      companylogo: require("./assets/images/fiserv.png"),
      date: "Jan 2021 – Oct 2022",
      desc: "Worked on large-scale modernization and architecture transformation initiatives.",
      descBullets: [
        "Migrated legacy servlet UI to Angular",
        "Decomposed monolith into microservices",
        "Migrated build process from ANT to Maven",
        "Redesigned rules engine using Apache Camel"
      ]
    },
    {
      role: "Consultant",
      company: "Virtusa",
      companylogo: require("./assets/images/virtusa.png"),
      date: "Mar 2018 – Dec 2020",
      desc: "Delivered secure banking and financial services applications.",
      descBullets: [
        "Implemented OAuth/OIDC authentication flows",
        "Integrated PingID MFA",
        "Implemented PCI/PII encryption using Voltage",
        "Configured Splunk and AppDynamics monitoring"
      ]
    },
    {
      role: "Software Developer",
      company: "Sellinall",
      companylogo: require("./assets/images/sellinall.png"),
      date: "Mar 2017 – Mar 2018",
      desc: "Built eCommerce integrations and customer onboarding solutions.",
      descBullets: [
        "Integrated Magento platform",
        "Implemented Adobe Sign onboarding workflow",
        "Integrated Wish marketplace synchronization"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "ENTERPRISE PLATFORMS AND DIGITAL TRANSFORMATION INITIATIVES",

  projects: [
    {
      projectName: "AI-Powered Business Intelligence Platform",
      projectDesc:
        "Architected and delivered a SaaS analytics platform integrating LLMs and Snowflake Cortex to automate market trend analysis for Fortune 500 clients."
    },
    {
      projectName: "Healthcare Analytics Platform",
      projectDesc:
        "Unified three healthcare applications into a single React platform serving 500+ users while reducing operational costs."
    },
    {
      projectName: "Enterprise Employee Management Portal",
      projectDesc:
        "Built an HR platform serving organizations with 500–5000 employees using Angular and Spring Boot."
    },
    {
      projectName: "Fintech Platform Modernization",
      projectDesc:
        "Redesigned internal fintech systems using Next.js, Clover Payments and Prismic CMS."
    }
  ],

  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional Certifications",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Certified in AWS cloud fundamentals and cloud-native architectures.",
      image: require("./assets/images/aws-cert.png"),
      imageAlt: "AWS Certification Badge"
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      subtitle:
        "Certified in Azure cloud services and infrastructure fundamentals.",
      image: require("./assets/images/azure-cert.png"),
      imageAlt: "Azure Fundamentals Badge"
    }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to Senior Engineer, Staff Engineer and Architecture opportunities.",
  number: "+91 9600175219",
  email_address: "sarvanhd@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
