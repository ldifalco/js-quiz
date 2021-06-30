var questions = [
{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["scripting", "js", "javascript", "script"],
    answer: "script"
},
{
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["the <body>", "the <head>", "either the <head> or <body> are correct"],
    answer:  "either the <head> or <body> are correct"


},
{
    title: "How would you write an alert box?",
    choices: [ "alert(Hello World);", "msg(Hello World);", "alertBox(Hello World);", "helloWorld(alert);"],
    answer: "alert(Hello World)"
},
{
    title: "How would you create a function in JavaScript?",
    choices: ["function = doStuff()", "function doStuff()", "function:doStuff()", "var doStuff = (function)"],
    answer: "function doStuff()"
},
{
    title: "How would a While loop start?",
    choices: ["while (i <=10)", "while (i <= 10; i++)", "while i = 1 to 10", "loopThis = (i !== 1 to 10)"],
    answer:"while (i <= 10; i++)"
},

];
var questionIndex = 0;






document.getElementById("start-btn").addEventListener("click", function(){
    var timeleft = 10;

    var timer = setInterval(function function1(){
    document.getElementById("score").innerHTML = timeleft;

    timeleft -= 1;
    if(timeleft === 0){
        clearInterval(timer);
        document.getElementById("score").innerHTML = "Time is up!"
       
    }

    }, 1000);

    render(questionIndex);

});


