export function getIngrediencesId(array) {
  return array.reduce((total,item) => {
    return [...total, item._id]
  }, [])
}