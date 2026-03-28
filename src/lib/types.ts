// The category type for filtering projects — add more categories here if needed
export type ProjectCategory = "games" | "web";

// Each project in your portfolio follows this shape.
// To add a new project, copy one of the objects in src/data/projects.ts and fill in the fields.
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // Path to image in /public, e.g. "/images/projects/my-game.png"
  tags: string[]; // Technologies or tools used, e.g. ["Unity", "C#"]
  category: ProjectCategory;
  link?: string; // External URL (GitHub, itch.io, ArtStation, etc.)
  date?: string; // For sorting, e.g. "2025-11"
}
