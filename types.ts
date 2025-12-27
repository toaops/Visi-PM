
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: 'google' | 'microsoft';
  role: 'admin' | 'user';
}

export interface ProjectComponent {
  id: string;
  title: string;
  content: string;
  type: 'note' | 'task' | 'link';
  createdAt: number;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  description: string;
  vendorName: string; // New field
  scope: string;      // New field
  projectDate: string; // This is the FAT Date
  createdAt: number;
  components: ProjectComponent[];
}

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';
