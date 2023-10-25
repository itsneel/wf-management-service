export enum PermissionsEnum {
  ADMIN,
  EDIT,
  VIEW,
}

export interface Permissions {
  [key: string]: PermissionsEnum;
}

export interface WFPermission {
  id: string;
  workflow: string;
  permissions: Permissions;
}
