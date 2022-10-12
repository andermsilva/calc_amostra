import Link from "next/link";
import Image from "next/image";
import CardForm from "./components/CardForm";
import CPS from '../public/cps.png'
import ADS from '../public/ads.png'
const Home = () => {
  return (
    <>
      <main className="w-10/2  m-auto py-3 bg-slate-800 ">
        <h1
          className="text-indigo-400
                      text-lg
                      py-8
                      max-w-2xl
                      text-center
                      font-bold 
                      m-auto
                      rounded-md
                      bg-slate-100"
        >
         Calculadora de tamanho de amostra
        </h1>
        <section
          className="max-w-2xl 
                    my-4 m-auto bg-gray-50
                    py-6 flex justify-around
                    rounded-md border-solid 
                    border-1"
        >
          <CardForm />          
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-400 py-4 px-2 flex justify-between items-center h-40">
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
};
export default Home;
