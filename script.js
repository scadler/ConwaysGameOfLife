var s = {
    auto:false,
}
$("#step").click(function(){
    step();
})
$("#autoStep").click(function(){
    s.auto = !s.auto
    console.log(s.auto)
    autostep(s.auto)
})
function step(){
var i = 0
    while(i < 401){
        $(`#s${i}`).empty();
        $(`#s${i}`).append(i)
        // checkBorders(i)
        i++
    }
    if( i === 401)
    var a = 0
        while(a < 401){
        // changeStatus(a)
        a++
        }
}
function autostep(auto){
    if(auto === true){
        step()
        setTimeout(autostep, 300,s.auto)
    }
}
function checkBorders(i){
    var neighborCounter = 0
    // if( (i-20)%21===0){
    // }
    // else 
    if(i===2){
    
    if($(`#s${i-1}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+1}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+20}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+21}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+22}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    $(`#s${i}`).append(`<p id="${neighborCounter}"> ${neighborCounter} </p>`)
}
    else{
    if($(`#s${i-21}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i-20}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i-19}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i-1}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+1}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+19}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+20}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+21}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    $(`#s${i}`).append(`<p class="id" id="${neighborCounter}"> ${neighborCounter} </p>`)
    }
}
function changeStatus(a){
    if($(`#s${a}`).contents().attr('id') === "2" && $(`#s${a}`).css("background-color")==='rgb(0, 0, 0)'){
            $(`#s${a}`).css('background-color', "rgb(0, 0, 0)")
        }
    else if($(`#s${a}`).contents().attr('id') === "3"){
            $(`#s${a}`).css('background-color', "rgb(0, 0, 0)")
    }
    else{
        $(`#s${a}`).css('background-color', "rgb(255, 255, 255)")
    }
}
$(".cell").click(function(){
    if($(this).css("background-color")!=='rgb(0, 0, 0)'){
         $(this).css('background-color', "rgb(0, 0, 0)")
    }
    else{
        $(this).css('background-color', "rgb(255, 255, 255)")
    }
});