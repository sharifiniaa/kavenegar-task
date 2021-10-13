export interface Post {
  id: number;
  received: string;
  title: string;
  message: string;
  status: string;
}

export interface Schema {
  data: Post[];
}
