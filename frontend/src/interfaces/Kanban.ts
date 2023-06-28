export interface ILabel {
  color: string;
  text: string;
}

export interface ITask {
  id: number;
  completed: boolean;
  text: string;
}

export interface ICard {
  id: number;
  title: string;
  labels: ILabel[];
  date: string;
  tasks: ITask[];
  desc: string;
}

export interface ICategory {
  // id: number;
  id: string;
  categoryTitle: string;
  cards: ICard[];
}

export interface IProject {
  id: number;
  name: string;
  data: ICategory[];
}
export type ColumnProps = {
  selectedProject: IProject | null; // Replace 'IProject' with the appropriate type for your project object
};

export type ColumnsProps = {
  selectedProject: IProject | null;
};

export type ProjectsListProps = {
  handleProjectSelect: (project: IProject) => void;
};
