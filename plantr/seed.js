const { db, Gardener, Plot, Vegetable } = require('./models');

console.log(Vegetable);

db.sync({force:true})
  .then(() => {
    return Vegetable.create({name: 'Kale', color: 'Green'});
  })
  .then((veg) => console.log(veg))
  .then(() => {
    console.log('database synced');
    db.close();
  }).catch((err) => {
    console.log('Something went wrong, not synced!');
    console.log(err);
    db.close();
  });
