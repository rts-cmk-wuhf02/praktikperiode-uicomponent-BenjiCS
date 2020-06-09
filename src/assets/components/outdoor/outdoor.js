const contentful = require("contentful");

const client = contentful.createClient({
  space: "dflv2txtq66m",
  environment: "master", // defaults to 'master' if not set
  accessToken: "-DcKW2_K1Bxv7v2mHYe5uFb2DsQvd4SeDIZ1LREnqbI",
});

const entryKey = "2xSCPaboBDoqrzFODT2qMJ";

client
  .getEntry(`${entryKey}`)
    .then((entry) => {
      client.getAsset('4g40vR3npBvlzQ6RactdtM')
      .then((asset) => document.querySelector(".app__bigImage").setAttribute("src", asset.fields.file.url))
      .catch(console.error)
      client.getAsset('2OzDAxdPBRPYxjItRRoJBU')
      .then((asset) => document.querySelector(".app__smallImg1").setAttribute("src", asset.fields.file.url))
      .catch(console.error)
      client.getAsset('3f2GdAk27wIF3ROJFiA34R')
      .then((asset) => document.querySelector(".app__smallImg2").setAttribute("src", asset.fields.file.url))
      .catch(console.error)
      client.getAsset('T35mu2sj8jM3EpiL1S8jU')
      .then((asset) => document.querySelector(".app__smallImg3").setAttribute("src", asset.fields.file.url))
        console.log(entry);
      })
  .catch(console.error);
