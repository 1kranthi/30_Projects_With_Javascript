const testimonials = [
  {
    name: "Cherise G",
    photoUrl: "images/Testimonial.avif",
    text: " I have been using apple for over a year now and I love it! I can'timagine life without it. It's so easy to use, and the customer service is great."
  },

  {
    name: "Rosetta Q",
    photoUrl: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "If you are a business owner, and you don't have apple in your toolkit just yet, I highly recommend that you check it out."
  },

  {
    name: "Constantine V",
    photoUrl: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I love apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
  }
];

const imgEle=document.querySelector("img");
const usernameEle=document.querySelector(".username");
const textEle=document.querySelector(".text");
let idx=0;

updateTestimonial()

function updateTestimonial(){
    const{ name,photoUrl,text}=
    testimonials[idx];
    imgEle.src=photoUrl;
    textEle.innerHTML=text;
    usernameEle.innerHTML=name;
    idx++;

    if(idx=== testimonials.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },3000)
}