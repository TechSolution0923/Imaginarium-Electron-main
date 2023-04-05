import * as React from "react";

import { ProjectTypeMovie, ProjectTypeTv, ProjectTypeBook } from "../../../Svg";

export const projects = [
  {
    project_id: 1,
    project_image: "assets/img/dashboard/project1.png",
    project_name: "Apple Trees",
    project_type_icon: <ProjectTypeMovie />,
    project_type: "Movie",
    project_content: "20 / 40 scenes",
    project_progress: "50%",
    project_opened: "Today",
    project_author: "You",
    project_collaborators: [
      {
        src: "assets/img/dashboard/Avatar1.png",
        alt: "Avatar1",
      },
      {
        src: "assets/img/dashboard/Avatar2.png",
        alt: "Avatar2",
      },
      {
        src: "assets/img/dashboard/Avatar3.png",
        alt: "Avatar3",
      },
    ],
    projects_collaborators_count: 15,
    project_own: true,
  },
  {
    project_id: 2,
    project_image: "assets/img/dashboard/project2.png",
    project_name: "John Wick 4",
    project_type_icon: <ProjectTypeMovie />,
    project_type: "Movie",
    project_content: "20 / 40 scenes",
    project_progress: "50%",
    project_opened: "Today",
    project_author: "Rin Ellei",
    project_collaborators: [
      {
        src: "assets/img/dashboard/Avatar1.png",
        alt: "Avatar1",
      },
      {
        src: "assets/img/dashboard/Avatar2.png",
        alt: "Avatar2",
      },
      {
        src: "assets/img/dashboard/Avatar3.png",
        alt: "Avatar3",
      },
    ],
    projects_collaborators_count: 15,
    project_own: false,
  },
  {
    project_id: 3,
    project_image: "assets/img/dashboard/project3.png",
    project_name: "Young Katyusha",
    project_type_icon: <ProjectTypeTv />,
    project_type: "TV Series",
    project_content: "20 / 40 episodes",
    project_opened: "Today",
    project_author: "Rin Ellei",
    project_collaborators: [
      {
        src: "assets/img/dashboard/Avatar1.png",
        alt: "Avatar1",
      },
      {
        src: "assets/img/dashboard/Avatar2.png",
        alt: "Avatar2",
      },
      {
        src: "assets/img/dashboard/Avatar3.png",
        alt: "Avatar3",
      },
    ],
    projects_collaborators_count: 15,
    project_own: false,
  },
  {
    project_id: 4,
    project_image: "assets/img/dashboard/project4.png",
    project_name: "Steep Banks",
    project_type_icon: <ProjectTypeTv />,
    project_type: "Book",
    project_content: "48 chapters",
    project_opened: "2 days ago",
    project_author: "You",
    project_collaborators: [
      {
        src: "assets/img/dashboard/Avatar10.png",
        alt: "Avatar10",
      },
      {
        src: "assets/img/dashboard/Avatar11.png",
        alt: "Avatar11",
      },
      {
        src: "assets/img/dashboard/Avatar12.png",
        alt: "Avatar12",
      },
    ],
    project_own: true,
  },
  {
    project_id: 5,
    project_image: "assets/img/dashboard/project5.png",
    project_name: "Riverbank",
    project_type_icon: <ProjectTypeMovie />,
    project_type: "Movie",
    project_content: "12/40 scenes",
    project_progress: "33%",
    project_opened: "3 days ago",
    project_author: "Andrey Mashkov",
    project_collaborators: [
      {
        src: "assets/img/dashboard/Avatar1.png",
        alt: "Avatar1",
      },
      {
        src: "assets/img/dashboard/Avatar2.png",
        alt: "Avatar2",
      },
    ],
    project_own: false,
  },
  {
    project_id: 6,
    project_image: "assets/img/dashboard/project6.png",
    project_name: "Inglorious Bastards",
    project_type_icon: <ProjectTypeMovie />,
    project_type: "Movie",
    project_content: "12/40 scenes",
    project_progress: "33%",
    project_opened: "5 days ago",
    project_author: "You",
    project_collaborators: [
      {
        src: "assets/img/dashboard/Avatar5.png",
        alt: "Avatar5",
      },
      {
        src: "assets/img/dashboard/Avatar6.png",
        alt: "Avatar6",
      },
    ],
    project_own: true,
  },
  {
    project_id: 7,
    project_image: "assets/img/dashboard/project7.png",
    project_name: "2 Guns",
    project_type_icon: <ProjectTypeBook />,
    project_type: "Book",
    project_content: "16 chapters",
    project_opened: "2 weeks ago",
    project_author: "You",
    project_collaborators: [
      {
        src: "assets/img/dashboard/Avatar7.png",
        alt: "Avatar7",
      },
      {
        src: "assets/img/dashboard/Avatar8.png",
        alt: "Avatar8",
      },
      {
        src: "assets/img/dashboard/Avatar9.png",
        alt: "Avatar9",
      },
    ],
    projects_collaborators_count: 15,
    project_own: true,
  },
  {
    project_id: 8,
    project_image: "assets/img/dashboard/project7.png",
    project_name: "2 Guns",
    project_type_icon: <ProjectTypeBook />,
    project_type: "Book",
    project_content: "16 chapters",
    project_opened: "2 weeks ago",
    project_author: "You",
    project_collaborators: [
      {
        src: "assets/img/dashboard/Avatar7.png",
        alt: "Avatar7",
      },
      {
        src: "assets/img/dashboard/Avatar8.png",
        alt: "Avatar8",
      },
      {
        src: "assets/img/dashboard/Avatar9.png",
        alt: "Avatar9",
      },
    ],
    project_own: true,
  },
];
