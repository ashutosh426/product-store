import AddProduct from "./components/AddProduct";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-12">
            <Header/>
            <AddProduct/>
          </section>
        </section>
      </section>

    </>
  )

}
export default App;
