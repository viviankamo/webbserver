const mongoose = require('mongoose');
mongoose.connect ('mongodb://localhost/test', {
 useNewUrlParser: true});

 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function(){
});

const kittySchema = new mongoose.Schema({
name: String    
});

const kitten = mongoose.model('kitten', kittySchema);

const silence = new kitten({ name: 'Silence'});
console.log(silence.name);

kittySchema.methods.speak = function () {
    const greeting = this.name ? "Meow name is" + this.name : "I dont have a name";
    console.log(greeting);
}
const kitten = mongoose.model('kitten', kittySchema);

const fluffy = new Kitten ({ name: 'fluffy' });
fluffy.speak();

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});

Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})

Kitten.find({ name: /^fluff/ }, callback);