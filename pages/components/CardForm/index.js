import React, { useState } from 'react';
import FormField from '../FormField';

const CardForm = () => {

    const [form, setForm] = useState({

        pop: '',
       
        confia: 1.96,
        erro: ''
    })
    const [result,setResult] = useState({});
    const calcular = async ()=>{
      //  if(form.confia!='' && form.erro!=''&& form.amostra != ''){
            
            try{
                const response = await fetch('/api/calc_erro',{
                        method: 'POST',
                        body: JSON.stringify(form)
                    })
                    const data = await response.json()
    
                    setResult(data);

                       
                    
                }catch(err){
                    
                }
      /*   }else{
            alert('erro');
            let msg = 'Preencha todos os camposs';

            setForm(form.amostra= msg)
        }
 */
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name

        console.log(value)

        setForm(old => ({
            ...old,
            [key]: value
        }))


    }
    return (
        <div className='w-2/5 h-auto drop-shadow-md border-x border-y rounded-md px-2 text-indigo-400 py-4'>

            <label className='text-indigo-300 text-font-input'>População</label><br />
            <input className='h-11 w-60 focus:outline-none px-2 text-lg mb-4 rounded-md'
                placeholder='População'
                name='pop'
                value={form.pop}
                onChange={onChange}

            />
            <br />
            <label className='text-indigo-300 text-font-input'>Erro %</label><br />
            <input className='h-11 w-60 focus:outline-none px-2 text-lg text-indigo-300 mb-4 rounded-md '
                placeholder='erro %'
                name='erro'
                value={form.erro}
                onChange={onChange}

            />
            <br />
            <label className='text-indigo-300 text-font-input'>Confiança</label><br />
            <select className='h-11 w-60 focus:outline-none px-2 text-lg text-indigo-400 mb-4 rounded-md'
                    name='confia '

                onChange={onChange}
            >
                {form.confia == 1.65 ? <option selected={1.65}>90%</option>:<option value={1.65}>90%</option>} 
                {form.confia == 1.96 ? <option selected={1.96}>95%</option>:<option value={1.96}>95%</option>} 
                {form.confia == 2.57 ? <option selected={2.57}>100%</option>:<option value={2.57}>100%</option>} 
               
                
            </select>
            
            <label className='text-indigo-300 text-center  text-lg'>Amostra</label>
            <div className='w-full text-lg h-11 border-1  box-border border-x border-y rounded-md text-center pt-2 mb-4'>
                
             
                {result.amostra > 0 ?
                
                <label className='text-indigo-500 text-center font-bold text-lg'>{result.amostra}</label> :
                <label className='text-indigo-300 text-center  text-lg'>? ? ?</label>
                
                }
                          
               
            </div>
            <div className=' w-full text-center'>

            <button onClick={calcular} className='bg-gray-400 
                                        px-12 py-4 font-bold 
                                        text-gray-50 rounded-lg 
                                        shadow-lg hover:shadow  active:bg-gray-300'>
                Calcular
            </button>
            </div>
                        
        </div>
    );
}
export default CardForm;