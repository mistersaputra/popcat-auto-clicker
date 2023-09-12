var max = 30;
var min = max - 10;
var event = new KeyboardEvent('keydown', {
   key: 'g',
   ctrlKey: true
});

let random = 0;
setInterval(function(){
   random = Math.random() * (max - min) + min;
   for (i = 0; i < random; i++) {
      document.dispatchEvent(event);
   }
}, 1000);
