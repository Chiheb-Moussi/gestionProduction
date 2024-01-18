export interface User {
    id: string;
    username: string;
    nom: string;
    prenom: string;
    role: UserRoles;
    status: boolean;
    password: string;
}

export enum UserRoles {
    ADMIN = 'Admin',
    SUPER_ADMIN = 'Super admin',
    OPERATOR = 'Opérateur',
    TECHNICIAN = 'Téchnicien'
}