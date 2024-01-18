import { useNavigate, useParams } from "react-router-dom";
import { Intervention } from "../../models/Intervention";
import InterventionComments from "./InterventionComments";

const InterventionDetail = () => {
    const {id : idIntervention} = useParams();
    const interventionsJson = localStorage.getItem('interventions');
    const interventions: Intervention[] = interventionsJson ? JSON.parse(interventionsJson) : [];
    const intervention: Intervention|undefined = interventions.find((i) => i.id === idIntervention);
    if(!intervention) {
        return <> Pas d'intervention trouvé</>
    }

    const {id, typeIntervention, dateDebut, isOpen,nameLine,actions, comments,dateFin,detailIntervention,rapportInterventions,user} = intervention;
    return (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-8">
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
            <InterventionComments idIntervention={id} />
        </div>
    );
}

export default InterventionDetail