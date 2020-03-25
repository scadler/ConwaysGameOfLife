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
    while(i < 421){
        // $(`#s${i}`).append(i)
        checkBorders(i)
        i++
        $(`#s${i}`).empty();
    }
    if( i === 421)
    var a = 0
        while(a < 421){
        changeStatus(a)
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
    $(`#s${i}`).append(`<p class="cellID" id="${neighborCounter}"> ${neighborCounter} </p>`)
}
    else{
    if($(`#s${i-21}`).css("background-color")==='rgb(0, 0, 0)' && i%20 !==0){
         neighborCounter++
    }
    if($(`#s${i-20}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i-19}`).css("background-color")==='rgb(0, 0, 0)' && (i-19)%20 !==0){
         neighborCounter++
    }
    if($(`#s${i-1}`).css("background-color")==='rgb(0, 0, 0)' && i%20 !==0){
         neighborCounter++
    }
    if($(`#s${i+1}`).css("background-color")==='rgb(0, 0, 0)' && (i-19)%20 !==0){
         neighborCounter++
    }
    if($(`#s${i+19}`).css("background-color")==='rgb(0, 0, 0)' && i%20 !==0){
         neighborCounter++
    }
    if($(`#s${i+20}`).css("background-color")==='rgb(0, 0, 0)'){
         neighborCounter++
    }
    if($(`#s${i+21}`).css("background-color")==='rgb(0, 0, 0)' && (i-19)%20 !==0){
         neighborCounter++
    }
    $(`#s${i}`).append(`<p class="cellID" id="${neighborCounter}"> ${neighborCounter} </p>`)
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
var down = false;
$(document).mousedown(function() {
    down = true;
}).mouseup(function() {
    down = false;  
});
$(".cell").mouseenter(function(){
    if(down === true){
        if($(this).css("background-color")!=='rgb(0, 0, 0)'){
         $(this).css('background-color', "rgb(0, 0, 0)")
        }
        else{
            $(this).css('background-color', "rgb(255, 255, 255)")
        }
    }
});
$(".cell").mousedown(function(){
        if($(this).css("background-color")!=='rgb(0, 0, 0)'){
         $(this).css('background-color', "rgb(0, 0, 0)")
        }
        else{
            $(this).css('background-color', "rgb(255, 255, 255)")
        }
});
$("#clear").click(function(){
    clear()
});
var gliderCells = ["2","20","22","41","42"]
var LWSSCells = ["100","103","124","140","144","161","162","163","164"]
var MWSSCells = ["101","102","103","104","105","120","125","145","160","164","182"]
var MWSSCells = ["102","103","120","125","146","160","166","181","182","183","184","185","186"]
var Pentadecathlon = ["186","191","204","205","207","208","209","210","212","213","226","231"]
$("#glider").click(function(){
   drawCells(gliderCells)
});
$("#LWSS").click(function(){
   drawCells(LWSSCells)
});
$("#MWSS").click(function(){
   drawCells(MWSSCells)
});
$("#HWSS").click(function(){
   drawCells(MWSSCells)
});
$("#Pentadecathlon").click(function(){
   drawCells(Pentadecathlon)
});
function clear(){
    var cell = 0
    while(cell < 401){
        $(`#s${cell}`).css('background-color', "rgb(255, 255, 255)");
        cell++
    }
}
function drawCells(array){
    clear()
    length = array.length
    index = 0
    while(index < length){
        $(`#s${array[index]}`).css('background-color', "rgb(0, 0, 0)")
        index++
    }
}
