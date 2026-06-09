
function openAgeGate(){
 document.getElementById('ageGate').style.display='flex';
}
function closeAgeGate(){
 document.getElementById('ageGate').style.display='none';
}
function enterFanvue(){
 if(!document.getElementById('adult').checked){
   alert('Conferma la maggiore età');
   return;
 }
 window.location.href='https://www.fanvue.com/nicolepalmer2005';
}
