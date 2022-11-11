import React, { MouseEventHandler } from 'react';

export interface ComponentInterface {
  children?: React.ReactNode;
  styles?: any;
  className?: string;
  onClick?: MouseEventHandler<any>;
}

export interface RoleInterface {
  name: string;
  permissions: Array<string>;
}

export interface UserInterface {
  id: number;
  name: string;
  created_at: number;

  roles: Array<RoleInterface>;
}
