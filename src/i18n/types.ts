export interface ExperienceItem {
  company: string;
  date: string;
  items: string[];
}

export interface ExperienceContent {
  title: string;
  jobs: ExperienceItem[];
}
