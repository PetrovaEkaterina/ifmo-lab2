const input = document.getElementsByTagName('input')[0];
input.addEventListener('keypress', (event) => {
    const target = event.target,
          value = target.value;
    
    if (event.key === 'Enter') {
        event.preventDefault();
        
        if (value.length >= target.minLength && value.length <= target.maxLength) {
            console.log(value 
                |> _ => _.toUpperCase() 
                |> _ => _.padStart(10, '*') 
                |> _ => _.split('') 
                |> _ => _.reverse() 
                |> _ => _.join(''));
            console.log(value.toUpperCase().padStart(10, '*').split('').reverse().join(''));
        }
    }
});