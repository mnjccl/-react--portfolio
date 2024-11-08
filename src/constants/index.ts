import { BufferGeometry, MeshStandardMaterial } from "three";

export interface HackerRoomGLTF {
  nodes: {
    screen_screens_0: { geometry: BufferGeometry };
    screen_glass_glass_0: { geometry: BufferGeometry };
    table_table_mat_0_1: { geometry: BufferGeometry };
    table_table_mat_0_2: { geometry: BufferGeometry };
    table_table_mat_0_3: { geometry: BufferGeometry };
    table_table_mat_0_4: { geometry: BufferGeometry };
    table_table_mat_0_5: { geometry: BufferGeometry };
    table_table_mat_0_6: { geometry: BufferGeometry };
    table_table_mat_0_7: { geometry: BufferGeometry };
    table_table_mat_0_8: { geometry: BufferGeometry };
    table_table_mat_0_9: { geometry: BufferGeometry };
    table_table_mat_0_10: { geometry: BufferGeometry };
    table_table_mat_0_11: { geometry: BufferGeometry };
    table_table_mat_0_12: { geometry: BufferGeometry };
  };
  materials: {
    screens: MeshStandardMaterial;
    glass: MeshStandardMaterial;
    table_mat: MeshStandardMaterial;
    computer_mat: MeshStandardMaterial;
    server_mat: MeshStandardMaterial;
    vhsPlayer_mat: MeshStandardMaterial;
    stand_mat: MeshStandardMaterial;
    mat_mat: MeshStandardMaterial;
    arm_mat: MeshStandardMaterial;
    tv_mat: MeshStandardMaterial;
    cables_mat: MeshStandardMaterial;
    props_mat: MeshStandardMaterial;
    ground_mat: MeshStandardMaterial;
    key_mat: MeshStandardMaterial;
  };
}

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Career",
    href: "#career",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Wild Oasis - Hotel Menagement System",
    desc: "Wild Oasis is application designed specifically for hotel staff. The app provides employees with tools to manage bookings, check-ins, check-outs and monitor occupancy rates. Only authorized hotel employees have access to the app and create other users.",
    subdesc:
      "Powered by libraries like React Router, Query, Error Boundary, Hook Form, Hot Toast and ReCharts, with styled-components for  UI and Supabase as a reliable backend foundation.",
    href: " https://wild-oasis-sand.vercel.app/",
    texture: "/textures/project/wild-oasis.png",
    logo: "/assets/wild-oasis.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 3,
        name: "ReactRouter",
        path: "/assets/reactrouter.png",
      },
      {
        id: 4,
        name: "ReactQuery",
        path: "/assets/react-query.png",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "assets/styled-components.png",
      },
      {
        id: 6,
        name: "Supabase",
        path: "assets/supabase.png",
      },
    ],
  },

  {
    title: "Pizza Cart - Pizza Ordering App",
    desc: "App allows users to order from a selection of available pizzas. Users can customize their order and select a priority option for faster delivery at an higher cost. By providing contact details and enabling location sharing, customers receive information about delivery.",
    subdesc:
      "Tech stack for this app includes React Router, Redux, and Tailwind CSS. React Router provides efficient navigation, while Redux manages the app's state for consistent order handling.",
    href: "https://pizza-cart-teal.vercel.app/",
    texture: "textures/project/pizza-cart.png",
    logo: "/assets/pizza-cart.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 3,
        name: "Redux",
        path: "/assets/redux.png",
      },
      {
        id: 4,
        name: "ReactRouter",
        path: "/assets/reactrouter.png",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },

  {
    title: "WorldWise - Tracking App",
    desc: "WorldWise is a location-based app that allows users to mark and categorize their favourite places using the Leaflet API. App is not hosted so it’s run locally, requiring both `npm run dev` for the client and `npm run server` for the server to function.",
    subdesc:
      "Built with CSS Modules, React Router, and the Leaflet API, WorldWise provides a modular, map-centric experience for organizing and viewing locations.",
    href: "https://github.com/mnjccl/-react--worldwise",
    texture: "textures/project/worldwise.png",
    logo: "/assets/worldwise.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/css.png",
      },
      {
        id: 4,
        name: "ReactRouter",
        path: "/assets/reactrouter.png",
      },
    ],
  },

  {
    title: "UsePopcorn - Search Movies",
    desc: "UsePopcorn is a movie search app that lets you explore films through the OMDB API. You can add movies to your favorites, rate them, and have all your selections saved in local storage so they’re ready the next time you visit.",
    subdesc:
      "This project emphasizes using and combining various React hooks, with a focus on building custom hooks for an enhanced and reusable code structure. My first serious project in React.",
    href: "https://usepopcorn-lake-one.vercel.app/",
    texture: "/textures/project/usepopcorn.png",
    logo: "/assets/popcorn.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
];

type Sizes = {
  deskScale: number;
  deskPosition: [number, number, number];
  cubePosition: [number, number, number];
  reactLogoPosition: [number, number, number];
  ringPosition: [number, number, number];
  targetPosition: [number, number, number];
};

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
): Sizes => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-17, -13, -15],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Nelt Group",
    pos: "Merchandiser",
    duration: "2022 - Present",
    title:
      "My goal is to maximize sales and improve customer satisfaction. I do this by optimizing product placement, analyzing trends and collaborating with suppliers and retailers to implement effective merchandising strategies.",
    icon: "/assets/nelt.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "RisHubUe",
    pos: "Student Intern",
    duration: "oct 2023 - nov 2023",
    title:
      "As a student intern, I had the opportunity to collaborate with experienced developers and gain insight into the profession. I was introduced to React and, with their guidance, worked on an application that used Firebase for the backend.",
    icon: "/assets/rishub.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Elektroptik LLC",
    pos: "Optical Network Operator",
    duration: "2021 - 2022",
    title:
      "My job was to install optical networks for internet, TV, and phone services in homes and apartments. I ensured seamless installations and connectivity, delivering reliable and high-quality service to customers.",
    icon: "/assets/elektroptik.png",
    animation: "salute",
  },
];
