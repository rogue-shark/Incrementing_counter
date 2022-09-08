const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'
   
    const updateCounter = () => {
        const target = Number(counter.getAttribute('data-target')) //can use Number() or parseInt() or +
        // console.log(typeof target, target)  // to know the type of 'target' --> use 'typeof target'
        let count = Number(counter.innerText)
        let increment = Math.ceil(target / 20)
        if (count < target){
            counter.innerText =  `${Math.ceil(count + increment)}`
            setTimeout(updateCounter, 100)
        }else{
            counter.innerText = target
        }  
    }

    updateCounter()
})

