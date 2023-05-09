document.getElementById("parent").innerHTML=("something Else");
document.getElementById("parent").style.cssText=("background-color:red; color:black; text-align:center");
document.getElementsByClassName("exercise")[0].innerHTML=("i am class hero");
document.getElementById("parent1").style.cssText=("background-color:blue; color:red; text-align:center");
document.getElementsByTagName("h1")[1].style.cssText=("background-color:blue; color:red");
document.querySelector("h2").style.cssText=("text-align:center;text-transformation:uppercase")
document.querySelector("#hi").style.cssText=("text-align:center;text-transformation:uppercase")
document.querySelector(".hey").style.cssText=("text-align:center;text-transformation:uppercase")
const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("saya shrestha");
}
function myFucntion(){
    document.open();
    document.write("<h1 >Hello world </h1>");
    document.close();
}