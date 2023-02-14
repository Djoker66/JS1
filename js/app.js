function Mode()
{
    document.body.style.backgroundColor = "black"

}

var time =  new Date().getHours();

if(time >= 12 && time <= 18)
{
    alert("Gunortaniz xeyr");
    document.body.style.backgroundColor = "orange"
}
else if(time > 18 && time <= 24)
{
    alert("Axwaminiz xeyr");
    document.body.style.backgroundColor = "red"
}

else if(time > 24 && time <= 06)
{
    alert("Geceniz xeyr");
    document.body.style.backgroundColor = "blue"
}

else if(time > 06 && time <= 12)
{
    alert("Sabahiniz xeyr");
    document.body.style.backgroundColor = "yellow"
}



function circle(radius)
{
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };

}
