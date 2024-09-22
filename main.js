let btn = document.querySelector("button");
btn.addEventListener("click", async () =>{
        let result = await dogspic();
        console.log(result);
        let img = document.querySelector("#imgg");
        img.setAttribute("src", result);
});






let url = "https://dog.ceo/api/breeds/image/random" ;
async function dogspic(){
    let res = await fetch(url);
    let data = await res.json();
    return data.message;
}
