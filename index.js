let store = {categories:[], instruments:[]}

let Instrument = createInstrument()
let Category = createCategory()

$(function(){
  $("#createForm").on("submit", function(event){
    event.preventDefault()
    let instrument = $("#instrument").val()
    let category = $("#category").val()

    let createdCategory = newCategory(category)
    let createdInstrument = newInstrument(instrument, createdCategory.id)
  })
})


function newCategory(name){
  let anyMatch = Category.checkExistingCategory(name)
  if (anyMatch){
    return anyMatch
  }
  else {
    let createdCat = new Category(name)
    let html = `<ul id=${name}>${name}</ul><br><br>`
    render(html, $('#categories'))
    return createdCat
  }
}


function newInstrument(name, categoryId){
  let createdInst = new Instrument(name, categoryId)
  let categoryName = createdInst.categoryById(categoryId).name
  let html = `<li id=${name}>${name}</li>`
  render(html, $(`#${categoryName}`))
  return createdInst
}


function render(html, into){
  into.append(html)
}
