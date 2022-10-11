export default function handler(req, res) {

  // const data = req.json({form})

  /* res.status(200).json({
    name: 'Anderson',
    idade: 78,


  }); */
  const data =JSON.parse(req.body);
console.log('req ',data);
  let pop = parseInt(data.pop);
  
  let  erro = parseFloat(data.erro)/100;
  let confia = parseFloat(data.confia);
 
  //const margemErro = data.pop * data.confia;
  let dividendo = pop*Math.pow(confia,2)*0.5*(1-0.5);
  let div = Math.pow(erro,2)*(pop-1)+Math.pow(confia,2)*0.5*(1-0.5);
  let test = dividendo /div;
  let amostra = Math.round(test);
  

  res.status(200).json({
    pop,
    erro,
    confia,
    amostra,
    div,
   
  });
  
}
