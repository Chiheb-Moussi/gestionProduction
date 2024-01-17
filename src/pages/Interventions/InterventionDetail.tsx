import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { Intervention } from "../../models/Intervention";

const InterventionDetail = () => {
    const navigate = useNavigate();
    const {id : idIntervention} = useParams();
    const interventionsJson = localStorage.getItem('interventions');
    const interventions: Intervention[] = interventionsJson ? JSON.parse(interventionsJson) : [];
    const intervention: Intervention|undefined = interventions.find((i) => i.id === idIntervention);
    if(!intervention) {
        return <> no intervention found</>
    }

    const {id, typeIntervention, dateDebut, isOpen,nameLine,actions, comments,dateFin,detailIntervention,rapportInterventions,user} = intervention;

    return (
        <>
            <Breadcrumb pageName="Ajouter intervention" />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                            Intervention
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <span className="mb-3 block text-black dark:text-white">
                                    Type d'intervention
                                </span>
                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span>{typeIntervention}</span>
                                </div>
                            </div>
    
                            {typeIntervention === 'Arrêt non planifié' && (<div>
                                <span className="mb-3 block text-black dark:text-white">
                                    Détail d'intervention
                                </span>
                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span>{detailIntervention}</span>
                                </div>
                            </div>)}
                            <div>
                                <span className="mb-3 block text-black dark:text-white">
                                    Date de début
                                </span>
                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span>{dateDebut}</span>
                                </div>
                            </div>
                            <div>
                                <span className="mb-3 block text-black dark:text-white">
                                    Date de fin
                                </span>
                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span>{dateFin}</span>
                                </div>
                            </div>
                            <div>
                            <span className="mb-3 block text-black dark:text-white">
                                Nom de ligne *
                            </span>
                            <div className="relative z-20 bg-white dark:bg-form-input">
                                <span>{nameLine}</span>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default InterventionDetail