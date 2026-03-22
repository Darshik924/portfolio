interface projectType {
  title: string;
  desc: string;
  github: string;
  link: string;
  tech: string[];
  flag?: flagsType;
}

interface contactType {
  title: string;
  desc: string;
  color: string;
  link: string;
  label: string;
}

interface flagsType {
  text: string;
  color: string;
}

type projectsType = Array<projectType>;
type contactsType = Array<contactType>;

export type { projectsType, contactsType };
