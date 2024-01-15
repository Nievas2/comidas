const Api_Key = "dcc2771288e04c2cb2990f5566cf1d98"
export const Food = async ({ search }) => {
  try {
      const result = await fetch(`https://api.spoonacular.com/food/products/search?query=${search}&number=10&apiKey=${Api_Key}`);
      const json = await result.json()

      const foods = json.products

      return foods?.map(food => ({
        id : food.id,
        img : food.image,
        title: food.title
      }))
  } catch (error) {
    throw new Error('Error buscando las comidas')
  }
  


};
