# projects related to DOM 

## solution code

### project 1 

``` javascript 

   const buttons = document.querySelectorAll('.button')

const bi = document.querySelector('body')

buttons.forEach(function (button) {

      button.addEventListener('click',function(e){

           console.log(e);
            console.log(e.target);

            if(e.target.id === 'grey'){
                 bi.style.backgroundColor = e.target.id;
            }

            if(e.target.id === 'yellow'){
               bi.style.backgroundColor = e.target.id;
            }
          
            if(e.target.id === 'white'){
              bi.style.backgroundColor = e.target.id;
           }

           if(e.target.id === 'blue'){
            bi.style.backgroundColor = e.target.id;
         }

      });
});

``` 


### project 2
``` javascript
  const form = document.querySelector('form')

form.addEventListener('submit', function(e){

     e.preventDefault();

         
     const height = parseInt(document.querySelector('#height').value)
     const weight = parseInt(document.querySelector('#weight').value)

     const results = document.querySelector('#results')


     if(height ==' ' || height<0 || isNaN(height)){
         
       results.innerHTML = "please enter a valid height "
     }
     else if(weight == ' ' || weight<0 || isNaN(weight)){
         results.innerHTML = "please enter a valid weight "
     }
     else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        
          if(bmi<18.6){
            results.innerHTML = `<span> ${bmi}  under weight </span>`
          }
          else if(bmi>24.9){
            results.innerHTML = `<span> ${bmi}  Normal weight </span>`
          }
          else{
            results.innerHTML = `<span> ${bmi}  overweight </span>`
          }
         
      
       

     }


})

```

### project 3 digital clock 
``` javascript 
       
    const clock = document.getElementById('clock')

    setInterval(function (){
    let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
    },1000)

```