import type { Dispatch, SetStateAction } from "react";

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

interface viewTypes {
  about: string;
  projects: string;
  contact: string;
}

const VIEW: viewTypes = {
  about: "about",
  projects: "projects",
  contact: "contact",
};

interface viewProps {
  view: { is: string };
  setView: Dispatch<SetStateAction<{ is: string }>>;
}

type projectsType = Array<projectType>;
type contactsType = Array<contactType>;

export { VIEW };
export type { projectsType, contactsType, viewTypes, viewProps };
