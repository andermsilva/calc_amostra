import React, { useEffect, useState } from 'react';

const CardForm = () => {
    
    const [form, setForm] = useState({
        pop: '',
        confia:0,
        erro: ''
    });

    const [msgErro, setMsgErro] = useState('');
    const [result,setResult] = useState({});


    const calcular = async ()=>{
     setMsgErro(msgErro = '');   
     if(form.confia > 0 && form.erro > 0 && form.pop > 0 ){
        
            try{
                const response = await fetch('/api/calc_erro',{
                        method: 'POST',
                        body: JSON.stringify(form)
                    })
                    const data = await response.json()
                 
                    setResult(data);
                    
                    
                    
                }catch(err){
                   
                }
                  }else{
                   /*  setMsgErro(msgErro = ''); */
                   /* */
                   let msg = '';  
                   if(!form.pop || form.pop < 0){

                       msg +='- Informe a População maior que zero .';
                     
                    }
                    
                    if(!form.erro|| form.erro <= 0){
                        msg +=' - Informe o erro aceitável.';
                    }
                    if(!form.confia || form.confia == 0){
                        msg +=' - Informe o nivel de confiança.';
                    }
                   
                   setMsgErro(msgErro = msg);
                }
               
           
        }
    const reset=()=>{

        setForm(
            {
                pop:'',
                confia:0,
                erro:''
            }
        );

        setResult({
            pop:'',
            erro:'',
            confia:'',
            amostra:"",
            div:'',
        })
    }        
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name

        console.log('onchange ',value);


        setForm(old => ({
            ...old,
            [key]: value
        }))
        setMsgErro(msgErro = '');   
    }
    return (
        <div className='w-2/5 h-auto drop-shadow-md border-x border-y rounded-md px-2 text-indigo-400 py-4 '>
          <label  className='text-red-600 text-font-input'> {msgErro}<br /> </label>        
            
            
            <label className='text-indigo-300 text-font-input'>População</label><br />
            <input type='number' className='h-11 w-11/12 focus:outline-none px-2 text-lg mb-4 rounded-md mx-auto '
                placeholder='População'
                name='pop'
                value={form.pop}
                onChange={onChange}

            />
            <br />
            <label className='text-indigo-300 text-font-input'>Erro %</label><br />
            <input type='number' className='h-11  w-11/12 focus:outline-none px-2 text-lg text-indigo-300 mb-4 rounded-md'
                placeholder='erro %'
                name='erro'
                value={form.erro}
                onChange={onChange}

            />
            <br />
            <label className='text-indigo-300 text-font-input'>Confiança</label><br />




            <select className='h-11  w-11/12 focus:outline-none px-2 text-lg text-indigo-400 mb-4 rounded-md'
                    name='confia'

                onChange={onChange}
            >

               <option value={0}>-- Nível de Confiança --</option>
               <option value={1.65}>90%</option>
               <option value={1.96}>95%</option>
               <option value={2.57}>100%</option>
            
               
                
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
                                        px-12 py-4 font-bold  w-11/12
                                        text-gray-50 rounded-lg 
                                        shadow-lg hover:shadow  active:bg-gray-300'>
                Calcular
            </button>
                
            </div>
                        
        </div>
    );
}
export default CardForm;