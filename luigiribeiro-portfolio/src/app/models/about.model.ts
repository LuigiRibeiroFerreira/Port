

export interface AboutData {
    personalInfo: {
      name: string;
      position: string;
    };
    about: {
      title: string;
      description: string;
    };
    experiences: Experience[];
    courses: Course[];
    skills: Skills;
  }
  export interface PersonalInfo {
    name: string;
    position: string;
  }

  export interface About {
    title: string;
    description: string;
  }
  
  export interface Skills{
    uiStyling: string[];     
    logicFunctionality: string[]; 
    frameworksLibraries: string[]; 
    collaborationTools: string[]; 
    softSkills: string[];
  }

  
  export interface Experience {
    company: string;
    projectName: string;
    description: string;
    imagePath: string;
  }
  
  export interface Course {
    institution: string;
    name: string;
    description: string;
    imagePath: string;
  }