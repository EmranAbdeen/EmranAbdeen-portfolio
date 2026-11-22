export interface Projects {
  Id: number;
  Image: string;
  Title: string;
  Description: string;
  Technologies: string[];
  Github: string;

  // Project Details
  Overview: string;
  ProblemStatement: string;
  KeyFeatures?: string[];
  Video?: string;

  Skills: ProjectSkill[];
}

export interface ProjectSkill {
  Id: number;
  Category: string;
  Icon: string;
  Technologies: string[];
}
