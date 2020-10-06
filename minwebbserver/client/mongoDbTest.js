const mongoose = require('mongoose');
mongoose.connect ('mongodb://localhost/test', {
 useNewUrlParser: true});

 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function(){
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

personSchema.methods.speak = () => {
    console.log("Hej");
    console.log('My name is ${this.name}')
  };

const Person = mongoose.model('Person', personSchema);
const vivian = new Person({ name: 'vivian', age: 18});
vivian.save()