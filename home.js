function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light Mode";
    }else{
        button.textContent="Dark Mode";
    }
    }
    const textchange = document.querySelector("#change");
    const value = ["a football keeper ","a footballer","a player"];
    let counter = 0;
    setInterval(()=>{
        textchange.textContent = value[counter];
        counter = (counter+1) % value.length;
    },3000);
    