// !. Change Text Function
function changeText()
{
    document.getElementById("myheading").innerHTML="Welcome to Skillzwaytechnologies ..!"
}

// Changing the Heading Color
function changeColor()
{
    document.getElementById("myheading").style.color="red";
}

// increading the size
function increaseSize()
{
    document.getElementById("myheading").style.fontSize="50px";
}


// function for decrease size
function decreaseSize()
{
    document.getElementById("myheading").style.fontSize="20px";
}

// Hiding the heading
function hideHeading()
{
    document.getElementById("myheading").style.display="none";
}

function showHeading()
{
    document.getElementById("myheading").style.display="block";
}

function resetHeading()
{
    let heading=document.getElementById("myheading");
    heading.innerHTML="Welcome to Skillzway Tech"
    heading.style.color="blue";
    heading.style.fontSize="35px";
    heading.style.display="block";
}
