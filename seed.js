const db = require('./models');

db.sync({force:true})
  .then(()=> {
    console.log('database synced');
    db.close();
  }).catch((err) => {
    console.log('Something went wrong, not synced!');
    console.log(err);
    db.close();
  });