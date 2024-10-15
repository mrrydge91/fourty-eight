const admin = require("firebase-admin");

const serviceAccount = require("./firebase_creds.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "fourty-eight-film",
});
