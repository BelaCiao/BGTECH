export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
