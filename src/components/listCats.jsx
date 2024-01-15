export const ListCats = ({ cats }) => {
  let gatos = []
  cats.map(cat=>(
    gatos.push(cat)
  ))
  console.log(gatos);
  return (
    <div className="cols">
      {
        gatos.map((cat, index) => (
        <div
          key={cat.id}
          className="flex flex-col items-center justify-items-center bg-gray-400 rounded-3xl"
        >
          <img src={cat.img} alt="imagen de gato" height="100px"/>

          <p>{cat.img}</p>
          <p>{cat.breedsName}</p> 
        </div>
      ))
      }
    </div>
  );
};
