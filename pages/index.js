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
                                        bg-amber-400"
        >
          Hello word!GG
        </h1>
        <section
          className="max-w-2xl my-10 m-auto
                                    py-6 flex justify-around
                                    rounded-md border-solid 
                                    border-1"
        >
          <CardForm />
          <CardResult>
            
            <FormField
              name={"teste"}
              value={15}
              onChange={() => alert("ola")}
            />
          </CardResult>
        </section>
      </main>
    </>
  );
};
export default Home;
