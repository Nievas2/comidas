import { useEffect, useState, useRef, useCallback } from "react";
import { Food } from "../services/food";
import debounce from "just-debounce-it";
import { ListFoods } from "./listFood";
export const Buscador = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [existFood, setExistFood] = useState();
  const [foods, setFoods] = useState([]);
  const firstInput = useRef(true)
  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === ''
      return
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }
    if (search.length == 0) {
      setError("No se puede buscar un producto vacio")
      return;
    }
    if(foods.length == 0){
      setError("No se encontraron productos")
      return;
    }
    setError(null)
  });

  const getArrayFoods = async ({ search }) => {
    let getFoodsJson = await Food( search );
    console.log(getFoodsJson);
    let foodArray = getFoodsJson;
    let foodExist = foodArray?.length > 0;
    
    setFoods(foodArray);
    setExistFood(foodExist);

  };

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log("search", search);
      getArrayFoods({ search });
    }, 300)
    , []
  );
  
  const handleChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery == " ") return;
    setSearch(event.target.value);
    if ( newQuery == "") return
    debouncedGetMovies({ search: newQuery });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getArrayFoods({ search });
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
{/*       {error && <p style={{ color: "red" }}>{error}</p>}
 */}      {existFood ? (<ListFoods foods={foods} />
      ) : (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </header>
  );
};
