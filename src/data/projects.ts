import { Project } from "@/lib/types";

// =============================================================================
// YOUR PROJECTS — Edit this array to add, remove, or update your portfolio items.
// Each project needs: id, title, description, thumbnail, tags, and category.
// The "link" and "date" fields are optional.
//
// To add a new project, just copy one of the objects below and change the values!
// =============================================================================

export const projects: Project[] = [
  {
    id: "gilgamesh",
    title: "Gilgamesh Destroys The World",
    description:
      "You can't destroy the world on an empty stomach... A puzzle game made at UCI, Winter quarter 2026.",
    thumbnail: "/images/projects/gilgamesh.png",
    tags: ["Puzzle", "Game Jam", "Browser", "VGDC"],
    category: "games",
    link: "https://itscalamari.itch.io/gilgamesh",
  },
  {
    id: "rose-tinted-vision",
    title: "Rose-Tinted Vision",
    description:
      "Woo your crush, but don't get noticed! A simulation game made collaboratively for winter game jam 2026.",
    thumbnail: "/images/projects/rose-tinted-vision.png",
    tags: ["Simulation", "Game Jam", "VGDC"],
    category: "games",
    link: "https://cherriesandroses.itch.io/rose-tinted-vision",
  },
  {
    id: "ant-eater",
    title: "Ant Eater",
    description:
      "Shrink inside an anthill and fight ants now on equal footing. A 2D metroidvania platformer made at UCI, Fall quarter 2025.",
    thumbnail: "/images/projects/ant-eater.png",
    tags: ["Platformer", "2D", "Metroidvania", "VGDC"],
    category: "games",
    link: "https://fire-fusion101.itch.io/anteater",
  },
  {
    id: "unforgettable-spirit",
    title: "Unforgettable Spirit",
    description:
      "discover the mystery of your lost memories. A visual novel puzzle game made at UCI, Fall Zotjam 2025.",
    thumbnail: "/images/projects/unforgettable-spirit.png",
    tags: ["Unity", "Game Jam", "Browser", "VGDC"],
    category: "games",
    link: "https://p1cotee.itch.io/unforgettable-spirit2",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "My personal portfolio site, built from scratch with Next.js, Tailwind CSS, and Framer Motion.",
    thumbnail: "/images/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "web",
    link: "https://zochen.github.io/",
  },
  {
    id: "petrdex",
    title: "Petrdex",
    description:
      "A Pokedex-style catalog of UCI Petr stickers. Discover rare stickers, track collections, and learn about the artists behind the designs.",
    thumbnail: "/images/projects/petrdex.png",
    tags: ["HTML", "JavaScript", "CSS"],
    category: "web",
    link: "https://nyolou.github.io/Petrdex/",
  },
];
