import CardForm from "./components/CardForm";
import CardResult from "./components/CardResult";
import FormField from "./components/FormField";

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
          <CardForm
          
          />

          
          
        </section>
      </main>
    </>
  );
};
export default Home;
