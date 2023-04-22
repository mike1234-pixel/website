import { Project } from "../../types/Project"

export const projects: Project[] = [
  {
    title: "JobSprint (2023)",
    description: [
      "JobSprint is my most recent personal project that uses React.",
      "Having built various management consoles with React in commercial settings; I used those skills to build my own.",
      "JobSprint uses React Query to fetch and mutate data from a GoLang/Postgres backend so that users are able to efficiently organise their job search.",
      "I have recorded a demo for the project and the repositories can be found on Github.",
    ],
    video: "video/jobsprint-demo.mp4",
    badges: [
      "React",
      "TypeScript",
      "React Query",
      "Formik",
      "React Table",
      "CSS modules",
      "Jest",
      "Testing Library",
      "Github Actions",
      "GoLang / Fiber",
      "Postgres",
      "Docker",
    ],
    repos: [
      {
        link: "https://github.com/mike1234-pixel/gig-organiser-client",
        linkText: "View the Client Repo here",
      },
      {
        link: "https://github.com/mike1234-pixel/gig-organiser-api",
        linkText: "View the Backend Repo here",
      },
    ],
  },
  {
    title: "Sahara Museum",
    description: [
      "Sahara Museum is a demo project and a work in progress.",
      "The aim of the project is to use VR technology to create an educational experience integrated into a navigable website.",
      "Sahara Museum offers an interactive environment where users can learn about the people, culture, history and geography of the Sahara Desert.",
    ],
    video: "video/sahara-museum-demo.mp4",
    badges: ["Aframe", "WebVR"],
    repos: [
      {
        link: "https://github.com/mike1234-pixel/sahara-museum",
        linkText: "View the Repo here",
      },
      {
        link: "https://mike1234-pixel.github.io/sahara-museum/",
        linkText: "View the live project here",
      },
    ],
  },
]
