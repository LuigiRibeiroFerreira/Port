export interface HomeData {
    lang: string;
    hero: HeroSection;
    sections: SectionPreview[];
}
  
export interface HeroSection {
    title: string;
    subtitle: string;
    buttons: HeroButton[];
}
  
export interface HeroButton {
    label: string;
    path: string;
}
  
export interface HomeSection {
    id: string;
    title: string;
    text: string;
    button: {
      label: string;
      path: string;
    };
}

export interface SectionPreview {
    id: string;
    title: string;
    text: string;
    icon: string;
    button: {
      label: string;
      path: string;
    };
}
  