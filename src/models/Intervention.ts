import { User } from "./User";

export interface RapportIntervention {
    id: string;
    comment: string;
    dateDebut: string;
    dateFin: string;
    user: User;

}

export interface Comment {
    id: string;
    comment: string;
    user: User;
}

export interface Action {
    id: string;
    action: string;
    user: User;
}

export interface Intervention {
    id: string;
    typeIntervention: string;
    detailIntervention?: string;
    nameLine: string;
    dateDebut: string;
    dateFin?: string;
    isOpen: boolean;
    rapportInterventions?: RapportIntervention[];
    user?: User;
    comments?: Comment[];
    actions?: Action[];
}



