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
    while(i < 89){
        $(`#s${i}`).empty();
        checkBorders(i)
        i++
    }
    if( i === 89)
    var a = 0
        while(a < 89){
        changeStatus(a)
        a++
        }
}
function autostep(auto){
    if(auto === true){
        step()
        setTimeout(autostep, 500,s.auto)
    }
    // else{
    //     clearTimeout(autostep)
    // }
}
function checkBorders(i){
    var neighborCounter = 0
    console.log($(`#s${i}`).css("background-color"))
    if( (i-9)%10===0){

    }
    else if(i===2){
    
    if($(`#s${i-1}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+1}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+9}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+10}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+11}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    $(`#s${i}`).append(`<p id="${neighborCounter}"> ${neighborCounter} </p>`)
}
    else{
    if($(`#s${i-11}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i-10}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i-9}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i-1}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+1}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+9}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+10}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+11}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    $(`#s${i}`).append(`<p class="id" id="${neighborCounter}"> ${neighborCounter} </p>`)
    console.log(($(`#s${i}`).contents().attr('class') === "alive") +"    "+i+"    "+neighborCounter)
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