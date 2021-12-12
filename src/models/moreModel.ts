//this interface model the data from the api
export interface categoryData {
  title: string;
  id: number;
  is_parent_category: boolean;
  children: childData[];
}
export interface childData {
  title: string;
  id: number;
  is_parent_category: boolean;
}
