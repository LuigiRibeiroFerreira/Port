export interface BlogData {
    [lang: string]: {
      posts: BlogPost[];
    };
  }
  
  export interface BlogPost {
    title: string;
    subtitle: string;
    imagePath: string;
    summary: string;
    content: string;
    date: string;
    author: string;
    tags: string[];
}