import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SwitcherThree from "../../components/SwitcherThree";
import { useNavigate } from "react-router-dom";
import { Intervention } from "../../models/Intervention";
import { formatDate } from "../../utils";

const AddIntervention = () => {
    const userJson = localStorage.getItem('user');
    const user =  userJson ? JSON.parse(userJson): undefined;

    const typeInterventions: string[] = [
        'Préventif',
        'Essai INDUS',
        'Arrêt non planifié',
    ];

    const detailInterventions: string[] = [
        'Problème four',
        'Problème machine de pause',
        'Problème machine laser',
    ];
    
    const nameLines: string[] = [
        'ligne 1',
        'ligne 2',
        'ligne 3',
    ];

    const navigate = useNavigate();
    const [typeIntervention, setTypeIntervention] = useState<string>(typeInterventions[0]);
    const [detailIntervention, setDetailIntervention] = useState<string>('');
    const [dateDebut, setDateDebut] = useState<string>('');
    const [dateFin, setDateFin] = useState<string>('');
    const [nameLine, setNameLine] = useState<string>(nameLines[0]);
    const [error, setError] = useState<string>('');

    const addIntervention = () => {
        if(!typeIntervention || (typeIntervention === 'Arrêt non planifié' && !detailIntervention) || !dateDebut || !nameLine) {
            setError('Vous devez remplir tous les champs obligatoires !')
            return false;
        }

        

        const newIntervention: Intervention = {
            typeIntervention,
            detailIntervention,
            dateDebut: formatDate(dateDebut),
            dateFin: formatDate(dateFin),
            nameLine,
            user,
            id: Date.now().toString(),
            isOpen: Boolean(dateFin)
        }

        console.log(newIntervention);
        
        
        const interventionsJson = localStorage.getItem('interventions');
        const interventions = interventionsJson ? JSON.parse(interventionsJson) : [];
        const updatedInterventions = [...interventions, {...newIntervention}];
        localStorage.setItem('interventions', JSON.stringify(updatedInterventions));
        navigate('/interventions')
    }
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
                                <label className="mb-3 block text-black dark:text-white">
                                    Type d'intervention *
                                </label>
                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <select 
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                        value={typeIntervention}
                                        onChange={(e) => {
                                            setTypeIntervention(e.target.value)
                                            if(e.target.value === 'Arrêt non planifié') {
                                                setDetailIntervention(detailInterventions[0])
                                            }
                                            setError('')
                                        }}
                                    >
                                        {typeInterventions.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                    <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                            fill="#637381"
                                        ></path>
                                        </g>
                                    </svg>
                                    </span>
                                </div>
                            </div>
    
                            {typeIntervention === 'Arrêt non planifié' && (<div>
                            <label className="mb-3 block text-black dark:text-white">
                                Détail d'intervention *
                            </label>
                            <div className="relative z-20 bg-white dark:bg-form-input">
                                <select 
                                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                    value={typeIntervention}
                                    onChange={(e) => {
                                        setDetailIntervention(e.target.value)
                                        setError('')
                                    }}
                                >
                                    {detailInterventions.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.8">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill="#637381"
                                    ></path>
                                    </g>
                                </svg>
                                </span>
                            </div>
                            </div>)}
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Date de début *
                                </label>
                                <input
                                    type="datetime-local"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    value={dateDebut}
                                    onChange={(e) => {
                                        setDateDebut(e.target.value)
                                        setError('')
                                    }}
                                />
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Date de fin
                                </label>
                                <input
                                    type="datetime-local"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    value={dateFin}
                                    onChange={(e) => {
                                        setDateFin(e.target.value)
                                        setError('')
                                    }}
                                />
                            </div>
                            <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Nom de ligne *
                            </label>
                            <div className="relative z-20 bg-white dark:bg-form-input">
                                <select 
                                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                    value={nameLine}
                                    onChange={(e) => {
                                        setNameLine(e.target.value)
                                        setError('')
                                    }}
                                >
                                    {nameLines.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                            fill="#637381"
                                        ></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            </div>
    
                            
                        </div>
                    </div>
                    <p className="text-danger">{error}</p>
                    <div className="flex justify-center py-4">
                        <button className="inline-flex items-center justify-center rounded bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" onClick={addIntervention}>Ajouter intervention</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddIntervention;
  