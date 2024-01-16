export const ListFoods = ({ foods }) => {

  return (
    <div className="cols">
      {
         foods.map((food) => (
           <div
             key={food.id}
             className="flex flex-col items-center justify-items-center bg-gray-400 rounded-3xl"
           >
             <img src={food.img} alt="imagen de gato" height="100px" />

             <p>{food.title}</p>
           </div>
         ))
        
      
      }
    </div>
  );
};
