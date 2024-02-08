import Form from "../components/Form";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";

function Home() {
 const { products } = useSelector((state)=> state.basket)
  return (
    <div className="bg-slate-100">
      <div className="max-container py-5">
        <Form />
        {products && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  py-5">
            {products.map((product) => {
              return <ProductList key={product.id} product={product} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
