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

export function getCountOfIngredientWithIndexes(ingredient, array) {
  const count = array.reduce((total, item, index) => {
    if (item._id === ingredient._id) {
      total.count += 1
      total.indexes.push(index)
      return total
    } 
    return total
  }, {count: 0, indexes: []})
  
  return count
}

export function getIngredientById(array, id) {
  return array.find(item => item._id === id)
}