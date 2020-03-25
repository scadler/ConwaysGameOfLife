var s = {
    auto:false,
    trails:false,
    stepsPerSecond:7,
    colorScheme: ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 175, 5)",]
}
$("#step").click(function(){
    step();
})
$("#autoStep").click(function(){
    s.auto = !s.auto
    autostep(s.auto)
})
$("#buttons").mousemove(function(){
$("#stepsPerSecOutput").text($("#stepsPerSec").val())
s.stepsPerSecond = Number($("#stepsPerSec").val())
});
function step(){
var i = 0
    while(i < 626){
        $(`#s${i}`).empty();
        // $(`#s${i}`).append(i);
        checkBorders(i)
        i++
    }
    if( i === 626){
    var a = 0
        while(a < 626){
        changeStatus(a)
        a++
        }
    }
}
function autostep(auto){
    if(auto === true){
        step()
        setTimeout(autostep, (1000/s.stepsPerSecond),s.auto)
    }
}
var s = {
    auto:false,
    trails:false,
    heatmap:true,
}
$("#step").click(function(){
    step();
})
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
    else if(s.trails === true){
        if($(`#s${a}`).css("background-color")==='rgb(0, 0, 0)'){
            $(`#s${a}`).css('background-color', "rgb(255, 175, 175)")
        }
        else{
            $(`#s${a}`).css('background-color', "rgb(255, 255, 255)")
        }
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
var clicked = false;
$("#autoStep").click(function(){
    clicked = !clicked
    if(clicked === true){
        $("#autoStep").css('background-color', "rgb(203, 203, 203)")
        $("#autoStep").css('border', "1px solid rgb(173, 173, 173)")
    }
    else{
        $("#autoStep").css('background-color', "rgb(255, 255, 255)")
        $("#autoStep").css('border', "1px solid rgb(221, 221, 221)")
    }
});
$("#clear").click(function(){
    clear()
});
var gliderCells = ["2","20","22","41","42"]
var LWSSCells = ["100","103","124","140","144","161","162","163","164"]
var MWSSCells = ["101","102","103","104","105","120","125","145","160","164","182"]
var MWSSCells = ["102","103","120","125","146","160","166","181","182","183","184","185","186"]
var GourmetA = ["10","11","30","44","45","47","48","50","55","56","62","65","67","69","75","82","83","88","97","116","117","156","157","160","170","171","172","175","177","180","181","182","190","192","196","203","210","212","217","218","219","222","224","239","242","243","282","283","302","311","316","317","324","330","332","334","337","343","344","349","351","352","354","355","369","388","389"]
var GourmetB = ["369","388","389"]
var Tumbler = ["84","85","89","90","104","106","108","110","124","126","128","130","146","148","165","166","168","169","185","186","188","189"]
var Firework = ["131","132","146","147","148","149","151","152","166","167","170","172","188","192","207","211","227","229","232","233","247","248","250","251","252","253","267","268"]
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
$("#Gourmet").click(function(){
   drawCells(GourmetA,GourmetB)
});
$("#Tumbler").click(function(){
   drawCells(Tumbler)
});
$("#Firework").click(function(){
   drawCells(Firework)
});
$("#Trail").click(function(){
   s.trails = !s.trails
});
$("#Randomize").click(function(){
    var n = 0
    randomArray = [""]
    while(n < 301){
        randomArray[n] = Math.floor(Math.random()*399)
        n++
        console.log(randomArray)
    }
    drawCells(randomArray)
});
function clear(){
    var cell = 0
    while(cell < 401){
        $(`#s${cell}`).css('background-color', "rgb(255, 255, 255)");
        cell++
    }
}
function drawCells(arrayA,arrayB){
    clear()
    length = arrayA.length
    index = 0
    while(index < length){
        $(`#s${arrayA[index]}`).css('background-color', "rgb(0, 0, 0)")
        index++
    }
}