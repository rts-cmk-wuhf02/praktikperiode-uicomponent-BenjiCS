const contentful = require("contentful");

const client = contentful.createClient({
  space: "dflv2txtq66m",
  environment: "master", // defaults to 'master' if not set
  accessToken: "-DcKW2_K1Bxv7v2mHYe5uFb2DsQvd4SeDIZ1LREnqbI",
});

client.getEntry(props.contentEntryId) // entry id
.then((entry) => {
  document.querySelector(`${props.class}__title`).innerHTML = entry.fields.title;
  document.querySelector(`${props.class}__desc`).innerHTML = entry.fields.description;
  client.getAsset('5GoFws2M1OuSvabRXN1YTo')
  .then((asset) => document.querySelector(`${props.class}__logo`).setAttribute("src", asset.fields.file.url))
  .catch(console.error)
})
.catch(console.error)

