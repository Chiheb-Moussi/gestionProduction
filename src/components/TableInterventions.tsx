import { Link } from 'react-router-dom';
import {Intervention} from '../models/Intervention'
const TableInterventions = () => {
    const interventionsJson = localStorage.getItem('interventions');
    const interventions: Intervention[] = interventionsJson ? JSON.parse(interventionsJson) : [];
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
        <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Type intervention
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Détail intervention
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date de début
            </h5>
          </div>
          
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Nom de ligne
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date de fin
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>
        {interventions.map(intervention => <InterventionRow key={intervention.id} {...intervention} />)}
      </div>
    </div>
  );
};

export default TableInterventions;

const InterventionRow = ({id,nameLine,dateDebut,dateFin,detailIntervention,isOpen,typeIntervention,rapportIntervention,user } : Intervention) => {
    return (
        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-7">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">{typeIntervention}</p>
          </div>
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">{detailIntervention}</p>
          </div>
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">{dateDebut}</p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">{nameLine}</p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">{!isOpen ? 'En cours' : 'Terminé'}</p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{dateFin}</p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <button className='text-white bg-meta-3 px-4 py-2 rounded'>modifier</button>
            <Link to={`/interventions/${id}`} className='text-white bg-primary px-4 py-2 rounded'>voir</Link>
          </div>
        </div>
    )
}
