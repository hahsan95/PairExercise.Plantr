const { db, Gardener, Plot, Vegetable } = require('./models');

console.log(Vegetable);

db.sync({force:true})
  .then(() => {
    return Vegetable.create({name: 'Kale', color: 'Green'});
  })
  .then(() => {
    return veg => Vegetable.create({name: 'Squash', color: 'Yellow'});
  })
  .then(veg => Gardener.create({ name: 'Chan', age: '31', favoriteVegetableId: veg.id}))
  .then(veg => Gardener.create({ name: 'George', age: '21', favoriteVegetableId: veg.id}))
  .then(() => {
    console.log('database synced');
    db.close();
  }).catch((err) => {
    console.log('Something went wrong, not synced!');
    console.log(err);
    db.close();
  });
