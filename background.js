getRandomColor();

function getRandomColor()
{
    var myArray = ['red', 'green', 'blue'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("myDiv").style.backgroundColor = rand;
}
