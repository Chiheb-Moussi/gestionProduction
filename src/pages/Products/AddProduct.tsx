import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/Product";


const AddProduct = () => {

    const familles = [
        {
            name: 'TGW3', 
            subFamilies: [
                'TGW3 1',
                'TGW3 2',
                'TGW3 3',
            ]
        },
        {
            name: 'TGW2', 
            subFamilies: [
                'TGW2 1',
                'TGW2 2',
                'TGW2 3',
            ]
        },
        {
            name: 'VCM', 
            subFamilies: [
                'VCM 1',
                'VCM 2',
                'VCM 3',
            ]
        }
    ]

    const [subFamilies, setSubFamilies] = useState<string[]>(familles[0].subFamilies);
    const navigate = useNavigate();
    const [objectifFPY, setobjectifFPY] = useState<number|undefined>(undefined);
    const [objectifTRG, setobjectifTRG] = useState<number|undefined>(undefined);
    const [itemCode, setitemCode] = useState<string>('');
    const [face, setface] = useState<string>('');
    const [nomProgramme, setnomProgramme] = useState<string>('');
    const [nameFamily, setnameFamily] = useState<string>('');
    const [subFamily, setsubFamily] = useState<string>('');
    const [cadenceHoraire, setcadenceHoraire] = useState<number|undefined>(undefined);
    const [nameLine, setnameLine] = useState<string>('');
    const [error, setError] = useState<string>('');

    const addProduct = () => {
        if(!objectifFPY || !objectifTRG || !itemCode || !face || !nomProgramme || !nameFamily !|| !subFamily || !cadenceHoraire || !nameLine) {
            setError('Vous devez remplir tous les champs obligatoires !')
            return false;
        }

        const newProduct: Product = {
            cadenceHoraire,
            nameLine,
            subFamily,
            objectifFPY,
            objectifTRG,
            itemCode,
            face,
            nameFamily,
            nomProgramme,
            id: Date.now().toString()
        }

        

        const productsJson = localStorage.getItem('products');
        let oldProducts = [];
        if(productsJson) {
            oldProducts = JSON.parse(productsJson);
        }
        const updatedproducts = [...oldProducts, {...newProduct}];
            localStorage.setItem('products', JSON.stringify(updatedproducts));
            navigate('/products')
    }
    return (
        <>
        <Breadcrumb pageName="Ajouter utilisateur" />
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Produit
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Réference *
                  </label>
                  <input
                    type="text"
                    placeholder="Réference"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={itemCode}
                    onChange={(e) => {
                        setitemCode(e.target.value)
                        setError('')
                    }}
                  />
                </div>
  
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Objectif FPY *
                  </label>
                  <input
                    type="number"
                    placeholder="Objectif FPY"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={objectifFPY}
                    onChange={(e) => {
                        setobjectifFPY(Number(e.target.value) ?? 0 )
                        setError('')
                    }}
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Objectif TRG *
                  </label>
                  <input
                    type="number"
                    placeholder="Objectif TRG"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={objectifTRG}
                    onChange={(e) => {
                        setobjectifTRG(Number(e.target.value) ?? 0)
                        setError('')
                    }}
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Famille *
                  </label>
                  <div className="relative z-20 bg-white dark:bg-form-input">
                    <select 
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                        value={nameFamily}
                        onChange={(e) => {
                            setnameFamily(e.target.value)
                            const selectedFamily = familles.find(f => f.name === e.target.value)
                            if(selectedFamily) {
                                setSubFamilies(selectedFamily.subFamilies);
                                setsubFamily(selectedFamily.subFamilies[0]);
                            }
                            setError('')
                        }}
                    >
                        {familles.map(f => <option key={f.name} value={f.name}>{f.name}</option>)}
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
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Sous famille *
                  </label>
                  <div className="relative z-20 bg-white dark:bg-form-input">
                    <select 
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                        value={subFamily}
                        onChange={(e) => {
                            setsubFamily(e.target.value)
                            setError('')
                        }}
                    >
                        {subFamilies.map(s => <option key={s} value={s}>{s}</option>)}
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

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Nom de ligne *
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de ligne"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={nameLine}
                    onChange={(e) => {
                        setnameLine(e.target.value)
                        setError('')
                    }}
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Cadence horaire *
                  </label>
                  <input
                    type="number"
                    placeholder="Cadence horaire"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={cadenceHoraire}
                    onChange={(e) => {
                        setcadenceHoraire(Number(e.target.value) ?? 0)
                        setError('')
                    }}
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Face *
                  </label>
                  <input
                    type="text"
                    placeholder="Face"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={face}
                    onChange={(e) => {
                        setface(e.target.value)
                        setError('')
                    }}
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Nom de programme *
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de programme"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={nomProgramme}
                    onChange={(e) => {
                        setnomProgramme(e.target.value)
                        setError('')
                    }}
                  />
                </div>

              </div>
            </div>
            <p className="text-danger">{error}</p>
           <div className="flex justify-center py-4">
            <button className="inline-flex items-center justify-center rounded bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" onClick={addProduct}>Ajouter produit</button>
           </div>

  

          </div>
        </div>
      </>
    );
};

export default AddProduct;
  