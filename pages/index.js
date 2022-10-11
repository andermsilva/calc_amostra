import CardForm from "./components/CardForm";
import CardResult from "./components/CardResult";
import FormField from "./components/FormField";

const Home = () => {
  return (
    <>
      <main className="w-10/2    m-auto py-3 ">
        <h1
          className="text-violet-800 
                                        text-sm
                                        py-8
                                        max-w-2xl
                                        text-center
                                        font-bold 
                                        m-auto
                                        bg-slate-100"
        >
          Calculadora da Amaostra
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
