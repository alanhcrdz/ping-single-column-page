const form = document.getElementById('form');
const error = document.getElementById('email-error');
const input = document.getElementById('email');

form.addEventListener('submit',(e) =>{
    e.preventDefault();

        const emailValue = email.value;

    if (!validateEmail(emailValue)) {
        input.style.border = '1px solid hsl(354, 100%, 66%)';
        input.setAttribute('placeholder','example@email/com');
        error.style.display = 'block';

        return false;
        
    }else{
        input.style.border = '1px solid hsl(115, 77%, 56%)';
        error.style.display = 'none';
        return true;
        
    }
    

});


function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

 
