let calculation = localStorage.getItem('calculation') || ''; 
        
        function updateCalc(){
            document.querySelector('.display').innerHTML = calculation;
            localStorage.setItem('calculation' , calculation)
        }
        
        window.onload = updateCalc;