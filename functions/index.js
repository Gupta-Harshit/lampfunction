const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let lampRef = admin.database().ref('/lamp');
//let lamp = lampRef.child('lamp');
//let lamp2 = lampRef.child('lamp2');

exports.hey = functions.https.onRequest((request, response) => {
    lampRef.update({
        lampno : request.query.lampno, 
        //state : request.query.state
    })
    .then(()=>
        response.send({status:200,message:"waiting"})
    )
    .catch((err) => {
        console.log("error" + err)
        return response.send({ status: 500, message: err });
    })
});
exports.areyoucallingme = functions.https.onRequest((request, response) => {
    const lampid = request.query.iamlamp
    lampRef.once("value")
        .then(doc => {
            let obj = doc.toJSON();
            if (obj.lampno === lampid) {
                lampRef.update({
                    lampno: 0,
                })
                return response.send({ status: 200, message: "Yes" })
            }
            else
                return response.send({ status: 201, message: "No" })
        })
        .catch((err) => {
            console.log("error" + err)
            return response.send({ status: 500, message: err });
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