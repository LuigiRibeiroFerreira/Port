

export interface AboutData {
  titles: Titles;
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
    titleUiStyling: string
    uiStyling: string[];
    titleLogicFunctionality: string     
    logicFunctionality: string[]; 
    titleFrameworksLibraries: string;
    frameworksLibraries: string[];
    titleCollaborationTools: string;
    collaborationTools: string[]; 
    softSkills: string[];
  }

  export interface Titles{
    experiences: string;
    courses: string;
    skills: string;
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