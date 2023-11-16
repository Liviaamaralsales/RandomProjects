function calculator(){
    var form = document.getElementById('form');

    var weight = +form.weight.value
    var height = +form.height.value
    var cent = +form.cent.value

    var altura = (metros * 100 + cent) / 100;

    var bmi = weight / (height * height);
    
    form.bmi.value = bmi.toFixed(2);

    if(bmi < 20)
    		{
    			alert('Você esta abaixo do peso!');
    		} 
    		else if(bmi >20 && bmi <= 25)
    		{
    			alert("Peso Ideal");
    		}
    		else if(bmi >25 && bmi <= 30)
    		{
    			alert("Sobrepeso");
    		}
    		else if(bmi >30 && bmi <= 35)
    		{
    			alert("Obesidade Moderada");
    		}
    		else if(bmi >35 && bmi <= 40)
    		{
    			alert("Obesidade Severa");
    		}
    		else if(bmi >40 && bmi <= 50)
    		{
    			alert("Obesidade Morbida");
    		}
    		else
            {
                alert("Procure a ajuda de um médico!")
            }
}