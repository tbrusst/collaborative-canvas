///Connections
var socket  = io.connect(location.origin.replace(/^http/,'ws'));
//DONT USE A HEROKU LINK BRENDAN DON'T YOU DARE!!!!!
//WATCH THE WEEK 7 LECTURE ALL THE WAY NEXT TIME NO MORE SKIPPING!!!!
//BOY I SWEAR IF YOU EVEN THINK ABOUT IT!!!!













/////Mobile Check

var mobile = mobilecheck();
function mobilecheck(){
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v300|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
















////Color Changing
///Event listeners from index.html link to following functions
//Updating mouse object color mouse.color

//Change bg color of side panel on mobile so users know what color
//Hold is that bg color
var hold = document.getElementById('hold');

//Update mouse color and the bg color of hold
//Passing in a hex code as color from index
function colorChanger(color){

    mouse.color = color;
    hold.style.background = color;




};













//Grabbing divs that hold canvases to append later
var hold = document.getElementById('hold');
var hold2 = document.getElementById('hold2');



//mouse object set up
   var mouse = {
      click: false,
      move: false,
      pos: {x:0, y:0},
      pos_prev: false,
      color: '#000000'
   };




   // get canvas element and create context
   var canvas  = document.getElementById('canvas');
   var context = canvas.getContext('2d');

   //Setting widths
   var width   = 300;
   var height  = 300;

   canvas.width = width;
   canvas.height = height;



   //Creating Canvases and Appending them
   //2nd
   var twoCanvas  = document.createElement('canvas');
   var twoContext = twoCanvas.getContext('2d');
   twoCanvas.width = width;
   twoCanvas.height = height;
   twoCanvas.className = "twoCanvas";
   twoContext.translate(300, 0);//Inversion and flipping
   twoContext.scale(-1, 1);
   hold.appendChild(twoCanvas);

   //3rd
   var threeCanvas  = document.createElement('canvas');
   var threeContext = threeCanvas.getContext('2d');
   threeCanvas.width = width;
   threeCanvas.height = height;
   threeCanvas.className = "threeCanvas";
   hold2.appendChild(threeCanvas);
   threeContext.translate(300, 0);//Inversion and flipping
   threeContext.scale(-1, 1);

   //4th
   var fourCanvas  = document.createElement('canvas');
   var fourContext = fourCanvas.getContext('2d');
   fourCanvas.width = width;
   fourCanvas.height = height;
   fourCanvas.className = "fourCanvas";
   hold2.appendChild(fourCanvas);

   //5th
   var fiveCanvas  = document.createElement('canvas');
   var fiveContext = fiveCanvas.getContext('2d');
   fiveCanvas.width = width;
   fiveCanvas.height = height;
   fiveCanvas.className = "fiveCanvas";
   hold2.appendChild(fiveCanvas);
   fiveContext.translate(300, 0);//Inversion and flipping
   fiveContext.scale(-1, 1);


   //6th
   var sixCanvas  = document.createElement('canvas');
   var sixContext = sixCanvas.getContext('2d');
   sixCanvas.width = width;
   sixCanvas.height = height;
   sixCanvas.className = "sixCanvas";
   hold2.appendChild(sixCanvas);


   //7th
   var sevenCanvas  = document.createElement('canvas');
   var sevenContext = sevenCanvas.getContext('2d');
   sevenCanvas.width = width;
   sevenCanvas.height = height;
   sevenCanvas.className = "sevenCanvas";
   hold.appendChild(sevenCanvas);


   //8th
   var eightCanvas  = document.createElement('canvas');
   var eightContext = eightCanvas.getContext('2d');
   eightCanvas.width = width;
   eightCanvas.height = height;
   eightCanvas.className = "eightCanvas";
   hold.appendChild(eightCanvas);
   eightContext.translate(300, 0); //Inversion and flipping
   eightContext.scale(-1, 1);


   //9th
   var nineCanvas  = document.createElement('canvas');
   var nineContext = nineCanvas.getContext('2d');
   nineCanvas.width = width;
   nineCanvas.height = height;
   nineCanvas.className = "nineCanvas";

   hold.appendChild(nineCanvas);


   //10th
   var tenCanvas  = document.createElement('canvas');
   var tenContext = tenCanvas.getContext('2d');
   tenCanvas.width = width;
   tenCanvas.height = height;
   tenCanvas.className = "tenCanvas";
   hold2.appendChild(tenCanvas);
   tenContext.translate(300, 0);//Inversion and flipping
   tenContext.scale(-1, 1);


   //11th
   var elevenCanvas  = document.createElement('canvas');
   var elevenContext = elevenCanvas.getContext('2d');
   elevenCanvas.width = width;
   elevenCanvas.height = height;
   elevenCanvas.className = "elevenCanvas";
   hold.appendChild(elevenCanvas);
   elevenContext.translate(300, 0);//Inversion and flipping
   elevenContext.scale(-1, 1);


   //12th
   var twelveCanvas  = document.createElement('canvas');
   var twelveContext = twelveCanvas.getContext('2d');
   twelveCanvas.width = width;
   twelveCanvas.height = height;
   twelveCanvas.className = "twelveCanvas";
   hold2.appendChild(twelveCanvas);






   ///Moible Changes to width and event listeners using Check

   //Listeners like mousedown and mouseup do not work on mobile so
   //had to convert those to touch events for mobile

   if(mobile){

     canvas.addEventListener("touchstart", function (e){
       mouse.click=true;
       e.preventDefault();
     });
     canvas.addEventListener("touchdown", function (e){
       mouse.click=false;
       e.preventDefault();
     });

     canvas.addEventListener("touchmove", function(e) {


        mouse.pos.x = e.touches[0].clientX / 300;
        mouse.pos.y = e.touches[0].clientY / 300;
        mouse.move = true;
        e.preventDefault();

     });

     // register mouse event handlers just in case
     canvas.onmousedown = function(e){ };
     canvas.onmouseup = function(e){ };
     canvas.onmousemove = function(e) {

     };

   };











//Drawing Stuff!!!!!!!!!!!!!!!!!!
//Where the magic happens baby!!!

   // register mouse event handlers
   canvas.onmousedown = function(e){ mouse.click = true; };
   canvas.onmouseup = function(e){ mouse.click = false; };


   canvas.onmousemove = function(e) {
      // normalize mouse position to range 0.0 - 1.0
      mouse.pos.x = e.clientX / width;
      mouse.pos.y = e.clientY / height;
      mouse.move = true;
   };

   // draw line received from server
   //Draw Line is from server!!!!!!!!!!!!!
   //MAIN FUNCTION THIS IS WHAT DOES THE DRAWING FRFRFR
	socket.on('draw_line', function (data) {
    var line = data.line;  //line of x and y
    var color = data.color; //mouse object color



      //Setting color to the mouse object color
      context.strokeStyle = color;
      twoContext.strokeStyle = color;
      threeContext.strokeStyle = color;
      fourContext.strokeStyle = color;
      fiveContext.strokeStyle =color;
      sixContext.strokeStyle = color;
      sevenContext.strokeStyle = color;
      eightContext.strokeStyle = color;

      nineContext.strokeStyle =color;
      tenContext.strokeStyle = color;
      elevenContext.strokeStyle = color;
      twelveContext.strokeStyle = color;



      //Rounding lines off, smoothing them out
      context.lineJoin = context.lineCap = 'round';
      twoContext.lineJoin = context.lineCap = 'round';
      threeContext.lineJoin = context.lineCap = 'round';
      fourContext.lineJoin = context.lineCap = 'round';
      fiveContext.lineJoin = context.lineCap = 'round';
      sixContext.lineJoin = context.lineCap = 'round';
      sevenContext.lineJoin = context.lineCap = 'round';
      eightContext.lineJoin = context.lineCap = 'round';

      nineContext.lineJoin = context.lineCap = 'round';
      tenContext.lineJoin = context.lineCap = 'round';
      elevenContext.lineJoin = context.lineCap = 'round';
      twelveContext.lineJoin = context.lineCap = 'round';



      //Randomizing line widths to create visual effect of variation
      context.lineWidth= Math.random() * (15 - 5) + 5;
      twoContext.lineWidth= Math.random() * (15 - 5) + 5;
      threeContext.lineWidth= Math.random() * (15 - 5) + 5;
      fourContext.lineWidth= Math.random() * (15 - 5) + 5;
      fiveContext.lineWidth= Math.random() * (15 - 5) + 5;
      sixContext.lineWidth= Math.random() * (15 - 5) + 5;
      sevenContext.lineWidth= Math.random() * (15 - 5) + 5;
      eightContext.lineWidth= Math.random() * (15 - 5) + 5;

      nineContext.lineWidth= Math.random() * (15 - 5) + 5;
      tenContext.lineWidth= Math.random() * (15 - 5) + 5;
      elevenContext.lineWidth= Math.random() * (15 - 5) + 5;
      twelveContext.lineWidth= Math.random() * (15 - 5) + 5;



      //Drawing the line!!!!!
      context.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      twoContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      threeContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      fourContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      fiveContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      sixContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      sevenContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      eightContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );

      nineContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      tenContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      elevenContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );
      twelveContext.strokeRect(line[0].x * 300, line[0].y * 300, context.lineWidth, context.lineWidth );

   });










//Clearing the canvas
//Function is told to run from server on interval of 30s or 30000ms

socket.on('clearCanvas', function(){
  context.clearRect(0, 0, 300, 300);
  twoContext.clearRect(0, 0, 300, 300);
  threeContext.clearRect(0, 0, 300, 300);
  fourContext.clearRect(0, 0, 300, 300);
  fiveContext.clearRect(0, 0, 300, 300);
  sixContext.clearRect(0, 0, 300, 300);
  sevenContext.clearRect(0, 0, 300, 300);
  eightContext.clearRect(0, 0, 300, 300);

  nineContext.clearRect(0, 0, 300, 300);
  tenContext.clearRect(0, 0, 300, 300);
  elevenContext.clearRect(0, 0, 300, 300);
  twelveContext.clearRect(0, 0, 300, 300);
});








  //Data being sent to server!!!
   // main loop, running every 25ms
   function mainLoop() {


      // check if the user is drawing
      if (mouse.click && mouse.move && mouse.pos_prev) {
         // send line to to the server
         socket.emit('draw_line', {
           line: [ mouse.pos, mouse.pos_prev ],
           color: mouse.color
         });
         mouse.move = false;

      }
      mouse.pos_prev = {x: mouse.pos.x, y: mouse.pos.y};

      setTimeout(mainLoop, 25); //Setting it to run every 25ms for live update


   }
   mainLoop(); //Run the loop
