export interface Project {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    imagePath: string;
    projectLink: string;
    codeLink: string;
  }
  
export interface ProjectsData {
    projects: Project[];
}