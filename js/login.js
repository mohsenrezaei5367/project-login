
let fadeShow=true
$(".btn").on('click',function(){
    if(fadeShow){
        $('#h').removeClass('fade') 
        $('#h').addClass('show') 
        fadeShow=false

    }else{
        $('#h').removeClass('show')
        $('#h').addClass('fade')
        fadeShow=true
    }
   
})