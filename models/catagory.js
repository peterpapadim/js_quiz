function createCategory(){

  let id = 0

  return class Category {
    constructor(name){
      this.name = name
      this.id = ++id
      store.categories.push(this)
    }

    instruments(){
      var context = this
      return store.instruments.filter(function(instrument){
        return instrument.categoryId === context.id
      })
    }

    static checkExistingCategory(catName){
      let match = store.categories.filter(function(category){
        return category.name === catName
      })
      if (match.length > 0){
        return match[0]
      }
      else {
        return false
      }
    }

  }
}
