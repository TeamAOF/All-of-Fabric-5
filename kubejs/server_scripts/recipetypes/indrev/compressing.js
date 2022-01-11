////////////////////////
/// Made by Team AOF ///
////////////////////////

onEvent('recipes', (event) => {

 event.recipes.indrev.compress({
 
  type: "indrev:compress",
  ingredients: {
      item: "modern_industrialization:tin_curved_plate",
      count: 4
  },
  output: {
      item: "indrev:empty_enhancer",
      count: 1
  },
  processTime: 300

 });

 event.recipes.indrev.compress({
 
    type: "indrev:compress",
    ingredients: {
        tag: "c:tin_plates",
        count: 1
    },
    output: {
        item: "modern_industrialization:tin_curved_plate",
        count: 1
    },
    processTime: 300
  
   });
});