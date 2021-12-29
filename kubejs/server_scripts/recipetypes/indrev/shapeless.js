////////////////////////
/// Made by Team AOF ///
////////////////////////

onEvent('recipes', (event) => {

  // Plates
  const plates = [
  'tin',
  'gold',
  'iron',
  'copper',

  ];

    plates.forEach((plates) => {
        event.remove({ id: 'indrev:shapeless/' + plates + '_plate_from_hammer' });
    });

});



