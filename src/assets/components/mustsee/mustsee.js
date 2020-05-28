const contentful = require("contentful");

const client = contentful.createClient({
  space: "dflv2txtq66m",
  environment: "master", // defaults to 'master' if not set
  accessToken: "-DcKW2_K1Bxv7v2mHYe5uFb2DsQvd4SeDIZ1LREnqbI",
});

const entryKey = "5CO64XRJojX4RdeacaSTrj";

client
  .getEntry(`${entryKey}`)
  .then((entry) => {
    client.getAsset("6bVuUUK3pCUqkZBWlrw9S8") // asset id
      .then((data) => {
        console.log(data);
      });
  })
  .catch(console.error);
