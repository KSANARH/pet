let offer = document.querySelectorAll('.offer');

[].forEach.call(offer, function(el) {
   el.onclick = function(e) {
      [].forEach.call(offer, function(el) {
         el.classList.remove('offer_active'); 
       });
   el.classList.add('offer_active');
   }
 });