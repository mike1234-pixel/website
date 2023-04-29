import { Project } from "../../types/Project"

export const projects: Project[] = [
  {
    id: "e72d01a1-1776-4c6f-9716-fc10e968b239",
    title: "JobSprint (2023)",
    description: [
      "JobSprint is my most recent personal project that uses React.",
      "Having built various management consoles with React in commercial settings; I used those skills to build my own.",
      "JobSprint uses React Query to fetch and mutate data from a GoLang/Postgres backend so that users are able to efficiently organise their job search.",
      "I have recorded a demo for the project and the repositories can be found on Github.",
    ],
    video:
      "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/jobsprint-demo.mp4",
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
        linkText: "frontend repository",
      },
      {
        link: "https://github.com/mike1234-pixel/gig-organiser-api",
        linkText: "backend repository",
      },
    ],
    starProject: true,
  },
  {
    id: "a3bf1e2c-1a88-4ebc-9e33-d05a496fc0aa",
    title: "Sahara Museum",
    description: [
      "Sahara Museum is a demo project and a work in progress.",
      "The aim of the project is to use VR technology to create an educational experience integrated into a navigable website.",
      "Sahara Museum offers an interactive environment where users can learn about the people, culture, history and geography of the Sahara Desert.",
    ],
    video:
      "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/sahara-museum-demo.mp4",
    badges: ["Aframe", "WebVR"],
    repos: [
      {
        link: "https://github.com/mike1234-pixel/sahara-museum",
        linkText: "repository",
      },
      {
        link: "https://mike1234-pixel.github.io/sahara-museum/",
        linkText: "live project",
      },
    ],
    starProject: false,
  },
]
