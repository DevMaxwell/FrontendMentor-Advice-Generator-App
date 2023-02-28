
//geeting the html elements with document dot method
const button = document.getElementById('button');
const adviceslip = document.querySelector(".adviceslip");
const adviceid = document.querySelector(".adviceid");

console.log('here');

/*Adding event listener to the buttun to notice a click and generate a number 
within 1-200 then run the getadvice function using the generated number as the apis endpoint*/
button.addEventListener('click', ()=>{
    //getAdvice(slip_id);
    //console.log('here');

    /*Using Math random to generate a random number, then multiply the number by 200, 
    then Math floor to round number to whole number*/
    slip_id = Math.floor(Math.random() * 200) + 1;
    getAdvice(slip_id);
});



//Get advice function
function getAdvice(slip_id){
    /*Setting innerHTML of the advice id and advice slip to empty string anytime 
    function is called to maintain only last response is rendered to HTML*/
    adviceslip.innerHTML = " ";
    adviceid.innerHTML = " ";

    //fetch api 
    const res1 = fetch(`https://api.adviceslip.com/advice/${slip_id}`);

    const res2 = res1.then((response) =>{
        return response.json();
      });

    //console.log(res2);

    res2.then((data) =>{
        console.log(data)
    
    const result = data.slip;
    console.log(result);

    //advice id to be rendered to html
    const html1 = `<p>Advice #${result.id}</p>`;

    //advice generated to be rendered to html
    const html2 = `<span class="">" ${result.advice} "</span>`;

    adviceid.insertAdjacentHTML("beforeend", html1);
    adviceslip.insertAdjacentHTML("beforeend", html2);
});


}



//getAdvice(200);