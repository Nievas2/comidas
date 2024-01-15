import { useEffect, useState } from "react";
import { Food } from "../services/food";
export const Buscador = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [existCat, setExistCat] = useState();
  const [foods, setFoods] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    getArrayFoods({ search })
  };
  const handleChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery == " ") return;
    setSearch(event.target.value);
  };
  useEffect(() => {
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }
  });
  const getArrayFoods = async ({ search }) => {
    let getFoodsJson = await Food({ search });
    console.log(getFoodsJson);
    let gatos = getFoodsJson;
    let gato = gatos?.length > 0;
    setFoods(gatos);
    setExistCat(gato);
  };
  return (
    <header className="flex flex-col items-center justify-items-center h-full bg-cover bg-cyan-950 min-h-screen pt-3">
      <div>
        <h1 className="text-white">Buscador</h1>
      </div>
      <form className="flex flex-col form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={search}
          name="search"
          className="rounded-xl p-1"
          style={{
            border: "1px solid transparent",
            borderColor: error ? "red" : "transparent",
          }}
        />
        <button className="p-1 bg-blue-700 rounded-xl text-white">
          Enviar
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={getArrayFoods}>pedir gatos</button>
      {existCat ? (
        <div className="cols">
          {foods.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center justify-items-center bg-gray-400 rounded-3xl"
            >
              <img src={cat.img} alt="imagen de gato" height="100px" />

              <p>{cat.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>no funciona</p>
      )}
    </header>
  );
};
