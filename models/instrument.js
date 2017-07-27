function createInstrument(){

  let id = 0

  return class Instrument {
    constructor(name, categoryId){
      this.name = name
      this.id = ++id
      this.categoryId = categoryId
      store.instruments.push(this)
    }

    categoryById(id){
      return store.categories.filter(function(category){
        return category.id === id
      })[0]
    }

  }
}
