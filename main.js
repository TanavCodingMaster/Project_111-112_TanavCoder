Webcam.set ({
height : 350 ,
width : 300,
image_format : 'png' ,
png_quality : 90 ,
}) ;

document.getElementById("camera")

Webcam.attach(' #camera ')

function take_snapshot() {
Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
})
 }

 console.log('ml5 version :', ml5.version)

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sxG0bVefE/model.json', modelloaded)

 function modelloaded() {
console.log(' Model Loaded! ')
 }

 function speak() {

var synth = window.speechSynthesis
speak_data = "The Prediction is" + prediction;
var utter_this = new SpeechSynthesisUtterance(speak_data)
var synth = ("utter_this")
 }

 function check() {
img = document.getElementById('captured_image')
classifier.classify(img, gotResult)

 }

 function gotResult(error,results) {
if (error) {
console.error(error)
}
else {
    console.log(results)
    document.getElementById("result_guesture_name").innerHTML = results[0].label ;
    prediction = results[0].label ;

    if(results[0].label == "Like") {
        document.getElementById("update_guesture").innerHTML = "&#128077;";
    }
    if(results[0].label == "Beautiful") {
        document.getElementById("update_guesture").innerHTML = "&#128076;";
    }
    if(results[0].label == "Cheese") {
        document.getElementById("update_guesture").innerHTML = "&#9996;";
    }
}


 }