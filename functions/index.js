const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let lampRef = admin.database().ref('/lamp');
let lamp1   = lampRef.child('lamp1');
let lamp2   = lampRef.child('lamp2');

exports.hey = functions.https.onRequest((request, response) => {
    lamp1.update({
        color  : request.query.color,
        status : request.query.status 
    })
    .then((dataSnapshot) =>{
        response.send({status : 200 , data : dataSnapshot.ref.toString()});
    })
    .catch((err) =>{
        response.send({status : 500 , message : err});
    })
});

/*
    lamp1.once("value")
    .then(doc=>{
        let obj = doc.toJSON();
        console.log(obj);
        if(obj.status == "ON"){
            //turn on lamp 2
        }
    })

//exports.areyoucallingme = functions.http.onRequest((request, response) => {

//    admin
//        .database()
//    .ref('/call')
//        const .pop()
//})

*/