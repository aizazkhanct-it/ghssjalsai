// Hero slider
(function(){var s=document.querySelectorAll('.hero .slide');if(s.length<2)return;var i=0;
setInterval(function(){s[i].classList.remove('active');i=(i+1)%s.length;s[i].classList.add('active');},5000);})();
// Forms: shows a confirmation. To receive real submissions, connect these to a service such as Formspree or Google Forms.
function done(e,msg){e.preventDefault();var f=e.target,m=f.querySelector('.form-msg');m.textContent=msg;m.hidden=false;f.reset();return false;}
function handleInquiryForm(e){return done(e,'Thank you! Your inquiry has been noted. The school office will contact you soon.');}
function handleContactForm(e){return done(e,'Thank you! Your message has been received.');}
