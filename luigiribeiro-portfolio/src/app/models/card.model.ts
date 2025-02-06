export interface CardData {
    type: 'experience' | 'project' | 'blog' | 'course'; // Discriminator for styling/logic
    title: string;
    subtitle?: string; // Company (experience) or Institution (project)
    description: string;
    imagePath: string;
    // Project-specific fields
    technologies?: string[];
    projectLink?: string;
    // Blog-specific fields
    articleLink?: string;
    publishDate?: Date;
    tags?: string[];
}