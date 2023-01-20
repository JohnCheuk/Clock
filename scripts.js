(function(){
    const second = document.querySelector('.second-hand');
    const min = document.querySelector('.min-hand');
    const hour = document.querySelector('.hour-hand');

    function setClock(){
        
        let data = new Date()

        let secondDeg = data.getSeconds() *6 
        let minDeg = data.getMinutes()*6  + data.getSeconds() *6 / 60
        let hourDeg = data.getHours() * 30 + data.getMinutes() * 30 / 60  

        second.style.transform = `rotate(${secondDeg}deg)`
        min.style.transform = `rotate(${minDeg}deg)`
        hour.style.transform = `rotate(${hourDeg}deg)`
    }
        setClock() 
        setInterval(setClock,1000);
    
})()