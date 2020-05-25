const contentful = require('contentful')

const client = contentful.createClient({
  space: 'dflv2txtq66m',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '-DcKW2_K1Bxv7v2mHYe5uFb2DsQvd4SeDIZ1LREnqbI'
})

const entryKey = "5CO64XRJojX4RdeacaSTrj"

client.getEntry(`${entryKey}`)
.then((entry) => console.log(entry))
.catch(console.error)



// client.getEntries()
// .then(function (entries) {
//   // log the title for all the entries that have it
//   entries.items.forEach(function (entry) {
//       console.log("Hej")
//     if(entry.fields.title) {
//       console.log(entry.fields.title)
//     }
//   })
// })