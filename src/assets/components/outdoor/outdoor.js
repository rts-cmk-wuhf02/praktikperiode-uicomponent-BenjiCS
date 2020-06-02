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
    client.getAsset("4g40vR3npBvlzQ6RactdtM") // asset id
      .then((data) => {
        document.querySelector(".app__bigImage")
        .setAttribute("src", entry.fields.bigImage.fields.file.url);
        console.log(entry);
        
        console.log(data);
      });
  })
  .catch(console.error);
