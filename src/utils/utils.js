export function getIngrediencesId(array) {
  return array.reduce((total,item) => {
    if (item) {
      return [...total, item._id]
    }
    else {
      return total
    }
    
  }, [])
}

export function getCountOfIngredient(ingredient, array) {
  const count = array.reduce((total, item) => {
    if (item._id === ingredient._id) {
      return total += 1
    } 
    return total
  }, 0)
  
  return count
}