const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

 exports.hey = functions.https.onRequest((request, response) => {

         admin
        .database()
        .ref('/call')
             .push('2')
        .then(() =>
            response.send("Waiting")
         )
        .catch(() =>
            response.send("oops")
         )
 });
//exports.areyoucallingme = functions.http.onRequest((request, response) => {

//    admin
//        .database()
//    .ref('/call')
//        const .pop()
//})