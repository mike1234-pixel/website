import { Project } from "../../types/Project"

export const projects: Project[] = [
  {
    id: "e72d01a1-1776-4c6f-9716-fc10e968b26666",
    title: "Persian Paradise - Farsi language learning app",
    description: [
      "Persian Paradise offers English speakers a simple entry point into learning Farsi, and reinforces learning through repetition.",
      "My fiancé is Iranian, so I developed this app to improve my own language skills. I hope to develop this project into a more comprehensive learning platform.",
    ],
    video:
      "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/persian-paradise-demo.mp4",
    badges: [
      "React",
      "TypeScript",
      "React Query",
      "Ant Design",
      "Express",
      "MongoDB",
    ],
    repos: [
      {
        link: "https://github.com/mike1234-pixel/persian-paradise",
        linkText: "frontend repository",
      },
      {
        link: "https://github.com/mike1234-pixel/persian-paradise-api",
        linkText: "backend repository",
      },
      {
        link: "https://main.d1g6gfkibxvw76.amplifyapp.com/",
        linkText: "live project",
      },
    ],
    starProject: true,
  },
  {
    id: "e72d01a1-1776-4c6f-9716-fc10e968b239",
    title: "JobSprint",
    description: [
      "JobSprint uses React Query to fetch and mutate data from a GoLang/Postgres backend so that users are able to efficiently organise their job search.",
      "I had the idea for this app when conducting my own job search. I wanted to better organise my own job applications.",
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
    title: "City Walks",
    description: [
      "One of my older projects, City Walks is a website that provides illustrated guided walks.",
      "The app was inspired by a deck of walking guides I used when I was a student in London.",
      "Illustrations by me!",
    ],
    video:
      "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/city-walks-demo.mp4",
    badges: ["React", "Redux", "TypeScript", "Axios"],
    repos: [
      {
        link: "https://github.com/mike1234-pixel/city-walks-client",
        linkText: "repository",
      },
      {
        link: "https://main.d183hahqtfof2i.amplifyapp.com/",
        linkText: "live project",
      },
    ],
    starProject: false,
  },
  {
    id: "a3bf1e2c-1a88-4ebc-9e33-d05a496fc0bb",
    title: "Sahara Museum",
    description: [
      "The aim of the project is to use VR technology to create an educational experience integrated into a navigable website.",
      "Sahara Museum offers an interactive environment where users can learn about the people, culture, history and geography of the Sahara Desert.",
      "The purpose of the project is to learn more about webVR and creating 3D experiences.",
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
