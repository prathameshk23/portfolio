import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  python,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  book,
  open_book,
  student,
  threejs,
  java,
  linux,
  vuejs,
  aws,
  cloud,
  sql
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "educations",
    title: "Education",
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Vue Js",
    icon: vuejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Google Cloud",
    icon: cloud,
  },
  {
    name: "Linux",
    icon: linux,
    
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
];

const educations = [
  {
    title: "SSC",
    school_name: "St. Anthonys High School",
    icon: open_book,
    iconBg: "#383E56",
    date: "March 2019",
    points: ["Passed SSC with distintion"],
  },
  {
    title: "HSC",
    school_name: "National College",
    icon: book,
    iconBg: "#E6DEDD",
    date: "March 2021",
    points: ["Passed HSC with 92%."],
  },
  {
    title: "Bachelor of Computer Science",
    school_name: "Ruia College",
    icon: student,
    iconBg: "#383E56",
    date: "June 2021 - Present",
    points: ["Persuing BSc in Computer Science."],
  },
];



export { services, technologies, educations};
