let tl = gsap.timeline({
    scrollTrigger : {
        trigger: '.part2',
        start:'0% 50%',
        end:'50% 50%',
        scrub:1,
    }
})

tl.from('#img3, #img1,#img2,#img4,#img5',{
    bottom : '-50vh'
})

//sliding text timeline.

let tl1 = gsap.timeline({
    scrollTrigger : {
        trigger: '.part3',
        start:'10% 10%',
        end:'150% 0%',
        scrub:1,
        pin:true,
      
    }
})

tl1.to('#scroll-1',{
    bottom: '50vh',
   
})
.to('#scroll-1',{
    opacity:0,
})

.to('.phone-img',{
    x:'-95%',
      },'first')
   
.to('#scroll-2',{
 delay: '5s',
    opacity:1,
    bottom: '45vh',
},'first')


.to('#scroll-2',{
    opacity:0,
})
.to('.phone-img',{
    x:'-190%',
      },'sec')
   
.to('#scroll-3',{
 delay: '5s',
    opacity:1,
    bottom: '45vh',
},'sec')


.to('#scroll-3',{
    opacity:0,
})
.to('.phone-img',{
    x:'-286%',
      },'three')
.to('#scroll-4',{
 delay: '5s',
    opacity:1,
    bottom: '38vh',
},'three')

   
let mm = gsap.matchMedia();

mm.add('(max-width: 500px)',() =>{

    
let tl3 = gsap.timeline({
    scrollTrigger : {
        trigger: '.part3',
        start:'10% 10%',
        end:'150% 0%',
        scrub:1,
        
     
      
    }
})

tl3.to('#scroll-1',{
    top: '0vh',
   
})
.to('#scroll-1',{
    opacity:0,
})

.to('.phone-img',{
    x:'-95%',
      },'first')
   
.to('#scroll-2',{
 delay: '5s',
    opacity:1,
    bottom: '35vh',
},'first')


.to('#scroll-2',{
    opacity:0,
})
.to('.phone-img',{
    x:'-190%',
      },'sec')
   
.to('#scroll-3',{
 delay: '5s',
    opacity:1,
    bottom: '35vh',
},'sec')


.to('#scroll-3',{
    opacity:0,
})
.to('.phone-img',{
    x:'-286%',
      },'three')
.to('#scroll-4',{
 delay: '5s',
    opacity:1,
    bottom: '35vh',
},'three')

})






