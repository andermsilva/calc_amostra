import React, { useState } from 'react';

const CardForm = () => {

    const [form, setForm] = useState({

        pop: '',
        amost: '',
        confia: 1.65,
        erro: 0

    })
    const [result,setResult] = useState({});
    const calcular = async ()=>{
        try{
            const response = await fetch('/api/calc_erro',{
                    method: 'POST',
                    body: JSON.stringify(form)
                })
                const data = await response.json()

                setResult(data);
                
            }catch(err){

            }

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
        <div className='w-2/5 h-80 drop-shadow-xl border-x border-b px-3 '>

            <label className='text-indigo-300 text-font-input'>População</label><br />
            <input className='h-11 w-60 focus:outline-none px-2 text-font-input'
                placeholder='População'
                name='pop'
                value={form.pop}
                onChange={onChange}

            />
            <label className='text-indigo-300 text-font-input'>Erro %</label><br />
            <input className='h-11 w-60 focus:outline-none px-2 text-font-input'
                placeholder='erro %'
                name='erro'
                value={form.erro}
                onChange={onChange}

            />
            <label className='text-indigo-300 text-font-input'>Confiança</label><br />
            <select className='h-11 w-60 focus:outline-none px-2 text-font-input'
                    name='confia'

                onChange={onChange}
            >
                {form.confia == 1.65 ? <option defaultValue value={1.65}>90%</option>:<option value={1.65}>90%</option>} 
                {form.confia == 1.96 ? <option defaultValue value={1.96}>95%</option>:<option value={1.96}>95%</option>} 
                {form.confia == 2.57 ? <option defaultValue value={2.57}>100%</option>:<option value={2.57}>100%</option>} 
               
                
            </select>



            
            <button onClick={calcular} className='bg-lime-600 px-12 py-4 font-bold text-gray-50 rounded-lg shadow-lg hover:shadow  my-3'>
                Calcular
            </button>
            <pre>{result && JSON.stringify(result, null, 2)}</pre>
            
        </div>
    );
}
export default CardForm;