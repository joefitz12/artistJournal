const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://joefitz12:mYzguP4TvxmKNoypzreLjWyM@ds139869.mlab.com:39869/heroku_b96dmrv0",
  {
    useMongoClient: true
  }
);

const noteSeed = [
  {
    userId: 147893,
    title: "inspiration",
    body:
      'A number-one national best seller about a man who wakes up from a five-year coma able to see people\'s futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people\'s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a "faultlessly paced...continuously engrossing" (Los Angeles Times) novel of second sight.',
    date: new Date(Date.now())
  },
  {
    userId: 147893,
    title: "William Golding",
    body:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    date: new Date(Date.now())
  },
  {
    userId: 147893,
    title: "J.D. Salinger",
    body:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    date: new Date(Date.now())
  },
  {
    userId: 147893,
    title: "Tal M. Klein",
    body:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
    date: new Date(Date.now())
  },
  {
    userId: 147893,
    title: "J.K. Rowling",
    body:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    date: new Date(Date.now())
  }
];

const artistSeed = [
  {
    email: "test@test.com",
    password: "abc123",
    phone: 7652092198,
    firstName: "test man",
    emailNotifications: false,
    textNotifications: true,
    theme: "first theme"
  },
  {
    _id: "ObjectId('5aba6c1424123a9e59ca4c74')",
    email: "hi@hi.com",
    password: "abc123",
    phone: 7652092199.0,
    firstName: "new name",
    emailNotifications: false,
    textNotifications: true,
    theme: "first theme"
  },
  {
    _id: "ObjectId('5abd327d823632d8aa746cb1')",
    email: "example@example.com",
    password: "$2a$10$dBZqOI7oP/3j9oiOhUxEdONeJE3NF3qcmBUch4GI.nNnrAuVYEVp6",
    phone: 8154640764.0,
    firstName: "hello",
    emailNotifications: false,
    textNotifications: false
}
];

db.Note
  .remove({})
  .then(() => db.Note.collection.insertMany(noteSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Artist
  .remove({})
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
