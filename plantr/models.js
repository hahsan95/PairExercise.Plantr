const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, {through: "land"});
Plot.belongsToMany(Vegetable, {through: "land"});

Gardener.belongsTo(Vegetable, {as: "favorite_vegetable"});

console.log('vegetable table: ', Vegetable);

// let veggietable = Vegetable.create({name: 'Kale', color: 'Green'});
// veggietable.create( {name: 'Kale', color: 'Green'} );

//potential conflict "may" belong to many
module.exports = { db, Gardener, Plot, Vegetable };
