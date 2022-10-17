import Image from "next/image";

import Link from "next/link";

import ADS from '../../../public/ads.png';

import CPS from '../../../public/cps.png';
const Footer =()=>{
    return(

        <>
         <footer className="bg-slate-900 text-slate-400 py-4 px-2 flex justify-between items-center h-36">
           <div>
            <Image src={CPS} width={200} height={75}/>
            </div>
           <div className='h-fit'> 
            <label>
              <Link href={'https://sociallinks-chi.vercel.app/'} >
              <a target={'_blank'}> Desenvolvido por Anderson Marques</a>
              </Link>
            </label>
           
           </div>
           <div>
            <Image src={ADS} width={140} height={120}/>
            </div>
          

      </footer>
        </>
    );
}
export default Footer;