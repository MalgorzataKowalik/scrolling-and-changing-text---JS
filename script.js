

function displaySomethingNice() {


    const scrollPosition = window.scrollY;
 
        
    
    const one = document.querySelector('.one')
    const two = document.querySelector('.two')
    const three = document.querySelector('.three')
    const four = document.querySelector('.four')
    const footer = document.querySelector('footer')
    const divNiceText = document.querySelector('.pos')
    const heyYou = document.querySelector('.heyYou')




    if (scrollPosition > one.offsetTop && scrollPosition <= two.offsetTop){      
        heyYou.style.width = '150px'
        divNiceText.textContent = 'Hey You!' 
    }

    else if (scrollPosition > two.offsetTop && scrollPosition <= three.offsetTop){      
        heyYou.style.width = '250px'
        divNiceText.textContent = 'Nice to see You here!' 
    }

    else if (scrollPosition > three.offsetTop && scrollPosition <= four.offsetTop){      
        heyYou.style.width = '300px'
        divNiceText.textContent = 'Hope you have a great day!' 
    }

    else if (scrollPosition > four.offsetTop && scrollPosition <= footer.offsetTop){      
        heyYou.style.width = '280px'
        divNiceText.textContent = 'Keep on being awesome!' 
    }

    else {
        heyYou.style.width = '50px'
    }

}

window.addEventListener('scroll', displaySomethingNice)

