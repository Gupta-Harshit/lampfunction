const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let lampRef = admin.database().ref('/lamp');
//let lamp = lampRef.child('lamp');
//let lamp2 = lampRef.child('lamp2');

exports.hey = functions.https.onRequest((request, response) => {
    lampRef.update({
        state : request.query.state, 
        //state : request.query.state
    })
    .then(()=>
        response.send("200")
    )
    .catch((err) => {
        console.log("error" + err)
        return response.send("500");
    })
});
exports.areyoucallingme = functions.https.onRequest((request, response) => {
    lampRef.once("value")
        .then(doc => {
            let obj = doc.toJSON();
            return response.send(obj.state)
        })
        .catch((err) => {
            console.log("error" + err)
            return response.send("500");
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
exports.areyoucallingme = functions.http.onRequest((request, response) => {
    admin
        .database()
    .ref('/call')
        const .pop()
}) 
})*/