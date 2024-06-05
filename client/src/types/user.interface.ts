export type Role = 'recruiter' | 'applicant';

export interface RoleCard {
  id: number;
  title: string;
  description: string;
  role: Role;
  active: boolean;
}
