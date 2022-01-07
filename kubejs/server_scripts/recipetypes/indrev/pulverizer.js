////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {


 event.recipes.indrev.pulverize({
        
  type: "indrev:pulverize",
  ingredients: {
      tag: 'c:certus_quartz',
      count: 1
  },
  output: {
      item: 'ae2:certus_quartz_dust',
      count: 1
  },
  processTime: 300

 });

 event.recipes.indrev.pulverize({
        
  type: "indrev:pulverize",
  ingredients: {
      tag: 'c:certus_quartz_ores',
      count: 1
  },
  output: {
      item: 'ae2:certus_quartz_dust',
      count: 4
  },
  processTime: 300

 });
});