/**
 * Central portfolio data — generated from Charan Teja's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kummari Charan Teja',
  displayName: 'Kummari Charan Teja',
  firstName: 'CHARAN TEJA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A KUMMARI ORIGINAL',
  role: 'Autonomous Systems Engineer',
  tagline: ['Autonomous Systems Engineer', 'ROS 2', 'C', 'C++', 'Python'],
  intro:
    'An aspiring Autonomous Robotics Engineer (CGPA 9.0) building the future of intelligent machines — developing autonomous robots, humanoid systems, self-driving technologies, intelligent control architectures, and AI-powered robotic ecosystems that bridge the gap between artificial intelligence and the physical world.',
  location: 'Srisailam, Andhra Pradesh',
  email: 'charankummari98@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/kummari-charan-teja-851a85249/',
    github: '',
  },
  resumePdf: '/assets/Kummari_Charan_Teja_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Kummari Charan Teja',
  },
  interests: ['Autonomous Navigation', 'Robot Perception & Computer Vision', 'Robotics & Control Systems'],
};

export const education = [
  {
    school: 'Lovely Professional University',
    place: 'Phagwara',
    degree: 'Bachelor of Technology — Robotics & Automation Engineering',
    period: 'July 2026 - August 2030',
    score: 'CGPA 9.0',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Vijayawada',
    degree: 'BIEAP — MPC',
    period: 'June 2023 – May 2025',
    score: 'Score 963/1000',
  },
];

export const experience = [
  {
    company: 'FANUC India Pvt Ltd',
    role: 'Trainee',
    place: 'Bengaluru, Tamil Nadu',
    period: '1st December 2029 to 31st May 2030 (6 Months)',
    points: [
      'Completed a six-month Robotics & Automation Engineering internship at FANUC, Bengaluru, gaining hands-on experience in industrial robotics, robotic programming, and intelligent automation systems.',
      'Worked with industrial robotic arms, exploring robot configuration, motion control, teach pendant programming, and automated manufacturing applications.',
      'Gained practical exposure to robotic integration, sensor-based automation, industrial control systems, and real-world robotics applications.',
      'Participated in robotics-based projects involving automation workflows, robotic movement, system testing, and troubleshooting.',
      'Developed an understanding of industrial automation technologies, robotic operations, safety practices, and smart manufacturing processes.',
    ],
  },
];

export const experience1 = [
  {
    organization: 'DRDL, Hyderabad(DRDO)',
    role: 'Research Intern',
    place: 'Hyderabad, Telangana',
    period: '1st June 2029 to 31st October 2029 (6 Months)',
    points: [
      'Conducted research on autonomous navigation systems for unmanned aerial vehicles (UAVs) under the guidance of senior researchers at DRDL.',
      'Developed algorithms for path planning and obstacle avoidance, contributing to the advancement of autonomous flight technologies.',
      'Collaborated with cross-functional teams to integrate sensor data and improve the overall performance of UAV-based systems.',
      'Presented research findings at internal technical meetings and contributed to the documentation of innovative solutions.',
    ],
  },
];













export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'navigation' | 'robot-arm' | 'vision';
};


export const projects: Project[] = [
  {
    id: 'autonomous-mobile-robot',
    title: 'Autonomous Mobile Robot',
    year: '2026',
    genre: 'Robotics • ROS 2 • Autonomous Navigation',
    logline: 'An autonomous mobile robot designed to perceive its surroundings, navigate environments, and reach destinations with minimal human intervention.',
    stack: ['Python', 'ROS 2', 'Gazebo', 'Linux', 'C++'],
    build: [
      'Designed the architecture of an autonomous mobile robot integrating sensor-based perception, localization, mapping, and navigation.',
      'Explored ROS 2 communication, simulated robot environments, and autonomous navigation concepts to understand how robots make movement decisions.',
    ],
    features: [
      'ROS 2-based robotic architecture',
      'Environment mapping and localization',
      'Obstacle detection and avoidance',
      'Autonomous path planning',
      'Simulation using Gazebo',
    ],
    metrics: [],
    palette: {
      from: '#06152a',
      via: '#075985',
      to: '#030712',
      accent: '#38bdf8',
    },
    motif: 'navigation',
  },
  {
    id: 'robotic-arm-control',
    title: 'Intelligent Robotic Arm',
    year: '2026',
    genre: 'Mechatronics • Control Systems • Automation',
    logline: 'A robotic manipulation system exploring joint movement, motion control, and automated object handling.',
    stack: ['C', 'Arduino', 'MATLAB', 'Simulink', 'CAD'],
    build: [
      'Developing an understanding of robotic arm kinematics, joint configurations, degrees of freedom, and actuator-based movement.',
      'Exploring embedded control, motion coordination, and simulation techniques for accurate robotic manipulation.',
    ],
    features: [
      'Multi-joint robotic arm architecture',
      'Forward and inverse kinematics concepts',
      'Servo and actuator control',
      'Motion coordination',
      'Simulation and CAD-based design',
    ],
    metrics: [],
    palette: {
      from: '#1c1033',
      via: '#6d28d9',
      to: '#080611',
      accent: '#a78bfa',
    },
    motif: 'robot-arm',
  },
  {
    id: 'intelligent-vision-system',
    title: 'Intelligent Vision System',
    year: '2026',
    genre: 'Computer Vision • AI • Robotics',
    logline: 'An intelligent vision system exploring how autonomous robots interpret visual information and understand their surroundings.',
    stack: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
    build: [
      'Exploring image processing and computer vision techniques for identifying objects, interpreting visual scenes, and extracting useful environmental information.',
      'Studying the integration of camera-based perception with autonomous robotic systems to support object recognition and environment understanding.',
    ],
    features: [
      'Camera-based environmental perception',
      'Image processing with OpenCV',
      'Object detection and recognition concepts',
      'Visual feature extraction',
      'Computer vision for autonomous robotics',
    ],
    metrics: [],
    palette: {
      from: '#071b13',
      via: '#047857',
      to: '#030a08',
      accent: '#34d399',
    },
    motif: 'vision',
  },
];


export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};


export const achievements: Achievement[] = [
  {
    id: 'ros2',
    title: 'Robot Operating System 2',
    org: 'ROS 2',
    detail: 'Building foundations in robotic middleware, nodes, topics, services, actions, and communication between autonomous robotic systems.',
    laurel: 'Robotics Middleware',
  },
  {
    id: 'gazebo',
    title: 'Robotics Simulation',
    org: 'Gazebo',
    detail: 'Exploring robot simulation, virtual environments, sensor modeling, physics-based interactions, and autonomous robot testing.',
    laurel: 'Robot Simulation',
  },
  {
    id: 'matlab-simulink',
    title: 'Control Systems & Modeling',
    org: 'MATLAB & Simulink',
    detail: 'Developing foundations in mathematical modeling, control engineering, system dynamics, and simulation of robotic systems.',
    laurel: 'Control Engineering',
  },
  {
    id: 'nvidia-isaac',
    title: 'AI-Powered Autonomous Robotics',
    org: 'NVIDIA Isaac',
    detail: 'Exploring intelligent robotics, perception, computer vision, AI-based navigation, and autonomous robot development.',
    laurel: 'Autonomous Systems',
  },
  {
    id: 'hackerrank',
    title: '5-Star Badges',
    org: 'HackerRank',
    detail: '5-star badges in C, Python, Java, and C++.',
    laurel: 'Four Languages',
  },
];


export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'NPTEL – IIT Roorkee',
    name: 'Planned — Robotics and Control: Theory & Practice',
    link: 'https://onlinecourses.nptel.ac.in/e-learning/preview/noc21_me49',
  },
  {
    issuer: 'NPTEL – IIT Guwahati',
    name: 'Planned — Control Engineering for Robotics',
    link: 'https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_ee02',
  },
  {
    issuer: 'The Construct',
    name: 'Planned — Python 3 for Robotics',
    link: 'https://app.theconstruct.ai/courses/',
  },
  {
    issuer: 'The Construct',
    name: 'Planned — C++ for Robotics',
    link: 'https://app.theconstruct.ai/courses/',
  },
  {
    issuer: 'The Construct',
    name: 'Planned — Linux for Robotics',
    link: 'https://app.theconstruct.ai/courses/',
  },
  {
    issuer: 'MathWorks',
    name: 'Planned — MATLAB Onramp',
    link: 'https://matlabacademy.mathworks.com/details/matlab-onramp/gettingstarted',
  },
  {
    issuer: 'MathWorks',
    name: 'Planned — Simulink Onramp',
    link: 'https://www.mathworks.com/help/simulink/slref/simulinkonlinecourses.html',
  },
  {
    issuer: 'OpenCV',
    name: 'Planned — OpenCV Bootcamp',
    link: 'https://opencv.org/get-started/',
  },
  {
    issuer: 'NPTEL – IIT Roorkee',
    name: 'Planned — Introduction to Application of Artificial Intelligence to Robotics',
    link: 'https://www.nptel.ac.in/courses/106107001',
  },
  {
    issuer: 'NPTEL – IISc Bangalore',
    name: 'Planned — Drone Systems and Control',
    link: 'https://nptel.ac.in/courses/101108661',
  },
  {
    issuer: 'NPTEL – IIT Kanpur',
    name: 'Planned — Perception Algorithms for Autonomous Systems',
    link: 'https://nptel.ac.in/courses/127104001',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'The code behind intelligent machines',
    skills: [
      { name: 'C', mono: 'C', note: 'Foundation' },
      { name: 'Python', mono: 'Py' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics & Middleware',
    subtitle: 'Connecting software with physical robots',
    skills: [
      { name: 'ROS 2', mono: 'R2' },
      { name: 'Robot Kinematics', mono: 'Rk' },
      { name: 'Robot Operating Systems', mono: 'Ro' },
      { name: 'Motion Planning', mono: 'Mp' },
      { name: 'Robot Navigation', mono: 'Rn' },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    subtitle: 'The intelligence inside hardware',
    skills: [
      { name: 'Arduino', mono: 'Ar' },
      { name: 'ESP32', mono: 'Es' },
      { name: 'Microcontrollers', mono: 'Mc' },
      { name: 'Sensors & Actuators', mono: 'Sa' },
      { name: 'PCB Design', mono: 'Pc' },
      { name: 'Motor Drivers', mono: 'Md' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Computer Vision',
    subtitle: 'Giving machines the ability to perceive and decide',
    skills: [
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'Computer Vision', mono: 'Vi' },
      { name: 'Reinforcement Learning', mono: 'Rl' },
      { name: 'Object Detection', mono: 'Od' },
    ],
  },
  {
    id: 'autonomy',
    title: 'Autonomous Systems',
    subtitle: 'Building robots that navigate independently',
    skills: [
      { name: 'SLAM', mono: 'Sl' },
      { name: 'Sensor Fusion', mono: 'Sf' },
      { name: 'Path Planning', mono: 'Pp' },
      { name: 'Obstacle Avoidance', mono: 'Oa' },
      { name: 'Localization', mono: 'Lc' },
      { name: 'UAV Systems', mono: 'Ua' },
    ],
  },
  {
    id: 'simulation',
    title: 'Simulation & Engineering',
    subtitle: 'Testing intelligent machines in virtual environments',
    skills: [
      { name: 'Gazebo', mono: 'Gz' },
      { name: 'NVIDIA Isaac Sim', mono: 'Ni' },
      { name: 'MATLAB', mono: 'Mb' },
      { name: 'Simulink', mono: 'Si' },
      { name: 'SolidWorks', mono: 'Sw' },
      { name: '3D CAD Modelling', mono: '3D' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Tools',
    subtitle: 'The foundations of intelligent computing',
    skills: [
      { name: 'Linux / Ubuntu', mono: 'Lu' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Data Structures', mono: 'Ds' },
      { name: 'Object-Oriented Programming', mono: 'Oo' },
    ],
  },
  {
    id: 'interests',
    title: 'Research Interests',
    subtitle: 'Coming soon to the autonomous era',
    skills: [
      { name: 'Autonomous Navigation', mono: 'An' },
      { name: 'Aerial Robotics', mono: 'Ae' },
      { name: 'Human-Robot Interaction', mono: 'Hr' },
      { name: 'Intelligent Automation', mono: 'Ia' },
      { name: 'AI-Powered Operating Systems', mono: 'Ai' },
      { name: 'Multi-Agent Robotics', mono: 'Ma' },
    ],
  },
];



/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'C Programming': [
    'Programming Fundamentals',
    'Embedded Systems Programming',
    'HackerRank C Challenges — Target',
  ],

  Python: [
    'Python Programming Fundamentals',
    'Robotics Automation',
    'Computer Vision — Learning Target',
    'HackerRank Python — Target',
  ],

  'C++': [
    'Object-Oriented Programming',
    'Robotics Software Development',
    'ROS 2 Development — Learning Target',
  ],

  'ROS 2': [
    'Robot Operating System',
    'Robot Communication',
    'Autonomous Navigation — Learning Target',
    'e-Yantra Robotics Development',
  ],

  Arduino: [
    'Microcontroller Programming',
    'Sensor Integration',
    'Motor Control',
    'Line Follower Robotics',
  ],

  ESP32: [
    'Embedded IoT Systems',
    'Wireless Communication',
    'Bluetooth and Wi-Fi Robotics',
  ],

  'Embedded Systems': [
    'Microcontrollers',
    'Sensors and Actuators',
    'Digital Electronics',
    'Real-Time Systems',
  ],

  'Control Systems': [
    'Feedback Control',
    'PID Controllers',
    'Motor Control',
    'MATLAB & Simulink — Learning Target',
  ],

  'Computer Vision': [
    'OpenCV',
    'Image Processing',
    'Object Detection',
    'Visual Perception for Autonomous Robots',
  ],

  'Autonomous Navigation': [
    'SLAM',
    'Path Planning',
    'Obstacle Avoidance',
    'Localization',
    'Sensor Fusion',
  ],

  'Robotics Simulation': [
    'Gazebo',
    'NVIDIA Isaac Sim',
    'Robot Modelling',
    'Digital Twin Development',
  ],

  'Artificial Intelligence': [
    'Machine Learning',
    'Deep Learning',
    'Reinforcement Learning',
    'AI-Based Robotic Decision Making',
  ],

  'Mechanical Design': [
    'Engineering Drawing',
    '3D CAD Modelling',
    'Robotic Mechanism Design',
    'SolidWorks — Learning Target',
  ],

  'Electronics & Circuit Design': [
    'PCB Design',
    'Circuit Analysis',
    'Motor Drivers',
    'Power Management',
  ],

  'Linux & Operating Systems': [
    'Ubuntu',
    'Linux Command Line',
    'Operating System Fundamentals',
    'VENNELA OS — Personal Concept',
  ],

  'Git / GitHub': [
    'Git Version Control',
    'GitHub Foundations — Learning Target',
    'Robotics Project Documentation',
    'Open-Source Contributions',
  ],

  'Networking & IoT': [
    'Computer Networking Fundamentals',
    'Wireless Communication',
    'MQTT',
    'IoT-Based Robot Communication',
  ],

  'Robotics Competitions': [
    'e-Yantra Robotics Competition',
    'RoboCup',
    'DD Robocon',
    'University Robotics Hackathons',
  ],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'Intermediate years at Sri Chaitanya Junior College, Vijayawada — Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'BIEAP, MPC at Sri Chaitanya Junior College, Vijayawada — finishing with a score of 963/1000.',
        tags: ['MPC', 'BIEAP'],
        runtime: 'Jun 2023 – May 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Robotics & Automation',
    period: '2023 – Present',
    synopsis: 'B.Tech in Robotics and Automation at LOVELY PROFESSIONAL UNIVERSITY, Phagwara.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Robotics and Automation — CGPA 9.0.',
        tags: ['B.Tech', 'Robotics & Automation', 'CGPA 9.0'],
        runtime: 'July 2026 – August 2030',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Topper',
        description: ' Robotics & Automation Branch Topper with a 9.0 CGPA for the semester.',
        tags: ['9.0 CGPA', 'Branch Topper'],
        runtime: 'One semester',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'Robotics & Automation: ROS 2 (15+ packages), MATLAB & Simulink (10+ simulations), Gazebo (20+ robot simulations), GitHub (20+ robotics repositories), e-Yantra (IIT Bombay), RoboCup and DD Robocon competition achievements, with expertise in Python, C++, SLAM, computer vision and autonomous navigation.',
        tags: ['ROS2', 'MATLAB', 'Gazebo', 'SLAM', 'HackerRank'],
        runtime: '10+ robotics projects & simulations',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Autonomous Frontier',
    period: 'June 2029 – October 2029',
    synopsis: 'Six months of research internship at DRDL, DRDO, Hyderabad, exploring autonomous navigation and intelligent UAV systems.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Research Intern',
        description: 'Research on autonomous navigation systems for Unmanned Aerial Vehicles (UAVs) under the guidance of senior researchers at DRDL.',
        tags: ['DRDL', 'DRDO', 'UAVs', 'Research'],
        runtime: 'June 2029 – October 2029',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Beyond the Flight Path',
        description: 'Exploration of path-planning and obstacle-avoidance algorithms for autonomous flight technologies.',
        tags: ['Path Planning', 'Obstacle Avoidance', 'Autonomy'],
        runtime: 'Research & Development',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'The Sensor Connection',
        description: 'Collaboration with multidisciplinary research teams to integrate sensor data and improve UAV system performance.',
        tags: ['Sensor Fusion', 'UAV Systems', 'Integration'],
        runtime: 'Systems Development',
        palette: ocean,
      },
      {
        code: 'S03 E04',
        title: 'The Research Reveal',
        description: 'Presentation of research findings at internal technical meetings and contribution to technical documentation.',
        tags: ['Technical Research', 'Documentation', 'Presentation'],
        runtime: 'Research Outcomes',
        palette: ocean,
      },
    ],
  },
  {
   

  number: 4,
  title: 'Engineering the Future',
  period: '2026 – 2030',
  synopsis: 'Five ambitious engineering projects spanning intelligent operating systems, autonomous aerial robotics, computer vision, industrial automation and intelligent mobility.',
  episodes: [
    {
      code: 'S04 E01',
      title: 'VENNELA OS — Beyond the Interface',
      description: 'An experimental voice-driven AI operating system designed around intelligent system management. MAYA handles defensive cybersecurity, threat detection and incident containment; EDITH manages files, permissions and intelligent file organization; TIRASKARA oversees network monitoring, connectivity and traffic management.',
      tags: ['Python', 'C++', 'AI Agents', 'Cybersecurity', 'Voice Automation', 'OS Development'],
      runtime: 'Long-term R&D',
      palette: ocean,
    },
    {
      code: 'S04 E02',
      title: 'SURAJ — Eyes Above the City',
      description: 'An AI-powered autonomous drone ecosystem featuring voice-initiated dispatch, autonomous navigation, live video streaming and aerial media projection. Envisioned for privacy-conscious public-safety assistance, it can respond to authorized service requests, document reported incidents and send alerts to nearby emergency services, with human verification and police oversight.',
      tags: ['UAV', 'ROS 2', 'Computer Vision', 'AI', 'Autonomous Navigation', 'IoT'],
      runtime: 'Long-term R&D',
      palette: crimson,
    },
    {
      code: 'S04 E03',
      title: 'NEXUS — The Autonomous Rover',
      description: 'An intelligent ground robot capable of mapping unfamiliar environments, identifying obstacles, planning routes and navigating independently using LiDAR, cameras and sensor fusion.',
      tags: ['ROS 2', 'SLAM', 'LiDAR', 'Python', 'Sensor Fusion'],
      runtime: 'Future Development',
      palette: ocean,
    },
    {
      code: 'S04 E04',
      title: 'ATLAS — The Intelligent Factory',
      description: 'An autonomous robotic arm and machine-vision inspection system designed to identify manufacturing defects, perform precision pick-and-place operations and improve industrial production workflows.',
      tags: ['Robotic Manipulation', 'OpenCV', 'PLC', 'MATLAB', 'Automation'],
      runtime: 'Future Development',
      palette: amber,
    },
    {
      code: 'S04 E05',
      title: 'AGROS — The Autonomous Guardian',
      description: 'An intelligent agricultural rover designed for crop monitoring, soil-condition sensing, plant-health analysis and precision field inspection using computer vision and environmental sensors.',
      tags: ['Agricultural Robotics', 'Computer Vision', 'IoT', 'AI', 'Embedded Systems'],
      runtime: 'Future Development',
      palette: ocean,
    },
  ],
},
 
  {
    

  number: 5,
  title: "The Autonomous Era",
  period: 'Now streaming',
  synopsis: 'Exploring the intersection of robotics, artificial intelligence and intelligent machines — building the foundation for autonomous systems that can perceive, decide and act independently.',
  episodes: [
    {
      code: 'S05 E01',
      title: 'The Intelligence Within',
      description: 'Exploring Artificial Intelligence, Machine Learning, Deep Learning and Reinforcement Learning for intelligent robotic decision-making.',
      tags: ['AI', 'ML', 'Deep Learning', 'Reinforcement Learning'],
      runtime: 'In production',
      palette: violet,
    },
    {
      code: 'S05 E02',
      title: 'Teaching Machines to Move',
      description: 'Developing foundations in ROS 2, C++, robot kinematics, motion planning and control systems.',
      tags: ['ROS 2', 'C++', 'Kinematics', 'Control Systems'],
      runtime: 'In production',
      palette: ocean,
    },
    {
      code: 'S05 E03',
      title: 'Seeing Beyond Vision',
      description: 'Exploring computer vision, LiDAR, sensor fusion, SLAM and environmental perception for autonomous navigation.',
      tags: ['OpenCV', 'LiDAR', 'SLAM', 'Sensor Fusion'],
      runtime: 'In production',
      palette: crimson,
    },
    {
      code: 'S05 E04',
      title: 'The Art of Autonomy',
      description: 'Learning path planning, obstacle avoidance, localization and autonomous decision-making for ground and aerial robots.',
      tags: ['Path Planning', 'Navigation', 'UAVs', 'Autonomous Systems'],
      runtime: 'In production',
      palette: amber,
    },
    {
      code: 'S05 E05',
      title: 'Bridging Simulation and Reality',
      description: 'Exploring Gazebo, NVIDIA Isaac Sim, MATLAB and Simulink to simulate, test and validate intelligent robotic systems.',
      tags: ['Gazebo', 'Isaac Sim', 'MATLAB', 'Simulink'],
      runtime: 'In production',
      palette: violet,
    },
  ],
}

 
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Primary programming',
    title: 'C++ & Python',
    detail: 'Core languages for robotics, automation and autonomous systems',
    palette: amber,
  },
  {
    label: 'Flagship invention',
    title: 'VENNELA OS',
    detail: 'Voice-driven AI operating system • MAYA • EDITH • TIRASKARA',
    palette: crimson,
  },
  {
    label: 'Autonomous robotics',
    title: 'SURAJ Drones',
    detail: 'AI-powered UAVs • Voice control • Autonomous navigation',
    palette: ocean,
  },
  {
    label: 'Robotics ecosystem',
    title: 'ROS 2',
    detail: 'Robot communication • Navigation • Control systems',
    palette: violet,
  },
  {
    label: 'Simulation & modelling',
    title: 'Gazebo & Isaac Sim',
    detail: 'Virtual robotics • Digital twins • Autonomous system simulation',
    palette: jade,
  },
  {
    label: 'Computer vision',
    title: 'OpenCV & AI',
    detail: 'Visual perception • Object detection • Intelligent sensing',
    palette: amber,
  },
  {
    label: 'Autonomous intelligence',
    title: 'SLAM & Sensor Fusion',
    detail: 'Mapping • Localization • Path planning • Navigation',
    palette: crimson,
  },
  {
    label: 'Robotics competitions',
    title: 'e-Yantra & RoboCup',
    detail: 'Targeting robotics challenges and competitive engineering',
    palette: ocean,
  },
  {
    label: 'Engineering foundation',
    title: 'Embedded Systems',
    detail: 'Arduino • ESP32 • Sensors • Microcontrollers',
    palette: jade,
  },
  {
    label: 'Current mission',
    title: 'Autonomous Systems',
    detail: 'Building intelligent machines that perceive, decide and act independently',
    palette: violet,
  },

];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Robotics & Automation',
    lines: ['LOVELY PROFESSIONAL UNIVERSITY, Phagwara', 'July 2026 – August 2030'],
    chips: ['CGPA 9.0'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Python, C, C++ · React, Node.js, Express.js', 'PostgreSQL, MongoDB, MySQL · Docker, REST, JWT'],
    chips: ['Java', 'Python', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Education',
    title: 'The Engineering Arc',
    lines: [
      'B.Tech in Robotics & Automation · 2026 – 2030',
      'Building foundations in mechanical, electrical and computer engineering',
      'Programming · Electronics · Control Systems · Robotics',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Engineering the Future',
    lines: [
      'VENNELA OS — Voice-driven AI operating system with intelligent system management',
      'SURAJ — Autonomous AI drones for navigation and public-safety assistance',
      'NEXUS — Intelligent mobile robot for autonomous mapping and navigation',
    ],
  },
  {
    kicker: 'Technical Interests',
    title: 'The Autonomous Frontier',
    lines: [
      'Autonomous Navigation · SLAM · Path Planning',
      'ROS 2 · C++ · Python · Computer Vision',
      'Sensor Fusion · Embedded Systems · Control Engineering',
    ],
  },
  {
    kicker: 'Learning & Development',
    title: 'Building the Foundation',
    lines: [
      'ROS 2 · Gazebo · MATLAB & Simulink',
      'NVIDIA Isaac Sim · OpenCV · Arduino · ESP32',
      'NPTEL · e-Yantra · Robotics Research',
    ],
  },
  {
    kicker: 'Current Mission',
    title: 'Beyond Automation',
    lines: [
      'Autonomous Systems Engineering',
      'Intelligent Robotics · AI-powered Machines',
      'Research · Innovation · Real-world Autonomous Systems',
    ],
  },
];

export type ProfileId = 'charan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'charan',
    name: 'Charan Teja',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
