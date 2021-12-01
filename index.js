let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}


// <script type="text/javascript">
//     var a = Math.ceil(Math.random() * 10);
//     var b = Math.ceil(Math.random() * 10);       
//     var c = a + b;
	
    
//     function DrawBotBoot()
//     {
//         document.write("<div class='col-md-3'>What is "+ a + " + " + b +" = ? </div>");
//         document.write("<div class='col-md-3'><input id='BotBootInput' name='captcha_value' type='text' maxlength='2' size='2'/> </div>");
//     }
// 	function DrawBotBoot2()
//     {
//         document.write("<div class='col-md-3'>What is "+ a + " + " + b +" = ? </div>");
//         document.write("<div class='col-md-3'><input id='BotBootInput2' name='captcha_value' type='text' maxlength='2' size='2'/> </div>");
//     }
// 	function DrawBotBoot3()
//     {
//         document.write("<div class='col-md-3'>What is "+ a + " + " + b +" = ? </div>");
//         document.write("<div class='col-md-3'><input id='BotBootInput3' name='captcha_value' type='text' maxlength='2' size='2'/> </div>");
//     }
// 	function validateForm(){
//         var d = document.getElementById('BotBootInput').value;
//         if (d == c) {
// 			return true; 
// 		}else{
// 			alert("Enter correct sum");
// 			return false; 
// 		}		
//     }
// 	function validateForm2(){
//         var d2 = document.getElementById('BotBootInput2').value;
//         if (d2 == c) {
// 			return true; 
// 		}else{
// 			alert("Enter correct sum");
// 			return false; 
// 		}		
//     }
// 	function validateForm3(){
//         var d3 = document.getElementById('BotBootInput3').value;
//         if (d3 == c) {
// 			return true; 
// 		}else{
// 			alert("Enter correct sum");
// 			return false; 
// 		}		
//     }
//     </script>