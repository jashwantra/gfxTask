import product from "./productData.json";
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-3xl">Welcome to ElectronJS app! </h1>
      <h2 className="text-xl">Here are your products</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border-black border-2 border-solid">ID</th>
            <th className="border-black border-2 border-solid">Product Title</th>
            <th className="border-black border-2 border-solid">Price (INR)</th>
            <th className="border-black border-2 border-solid">SKU</th>
          </tr>
        </thead>
        <tbody>
          {product.products.map((product) =>{
            return <tr key={product.product_id}>
              <td className="border-black border-2 border-solid">{product.product_id}</td>
              <td className="border-black border-2 border-solid">{product.title}</td>
              <td className="border-black border-2 border-solid">{product.price}</td>
              <td className="border-black border-2 border-solid">{product.sku}</td>
              </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
