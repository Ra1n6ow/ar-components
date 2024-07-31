export interface ListItem {
  avatar?: string;
  title?: string;
  desc?: string;
  time?: string;
  tag?: string;
  tagColor?: "" | "red" | "blue" | "green" | "gray";
}

// 列表上方的 tab 选项
export interface ListOptions {
  title: string;
  content: ListItem[];
}

// 列表下面的操作选项
export interface ActionOptions {
  text: string;
  icon?: string;
}
