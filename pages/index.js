import Link from "next/link";
import Image from "next/image";
import CardForm from "./components/CardForm";
import CPS from '../public/cps.png'
import ADS from '../public/ads.png'
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
const Home = () => {
  return (
    <>
    <PageTitle title={'Calc. Amostra'}/>
      <main className="w-10/2  m-auto py-3 bg-slate-800 ">
       <Header/>
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
     
    </>
  );
};
export default Home;
