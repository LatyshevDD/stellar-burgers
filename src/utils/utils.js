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