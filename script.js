$("#step").click(function(){
    var i = 0
    while(i < 89){
        checkBorders(i)
        i++
    }
    if( i === 89)
    var a = 0
        while(a < 89){
        changeStatus(a)
        a++
        }
})

function checkBorders(i){
    var neighborCounter = 0
    if( (i-9)%10===0){

    }
    else{
    if($(`#${i-11}`).contents().attr('class')==="alive"){
         neighborCounter++
    }
    if($(`#${i-10}`).contents().attr('class')==="alive"){
         neighborCounter++
    }
    if($(`#${i-9}`).contents().attr('class')==="alive"){
         neighborCounter++
    }
    if($(`#${i-1}`).contents().attr('class')==="alive"){
         neighborCounter++
    }
    if($(`#${i+1}`).contents().attr('class')==="alive"){
         neighborCounter++
    }
    if($(`#${i+9}`).contents().attr('class')==="alive"){
         neighborCounter++
    }
    if($(`#${i+10}`).contents().attr('class')==="alive"){
         neighborCounter++
    }
    if($(`#${i+11}`).contents().attr('class')==="alive"){
         neighborCounter++
    }
    console.log(($(`#${i}`).contents().attr('class') === "alive") +"    "+i+"    "+neighborCounter)
if(neighborCounter === 3){
    $(`#${i}`).empty()
    $(`#${i}`).append('<p id="alive"></p>')
}



// else if(neighborCounter < 2){
//     $(`#${i}`).empty()
//     $(`#${i}`).append('<p id="dead"></p>')
// }
// else if(neighborCounter > 4){
//     $(`#${i}`).empty()
//     $(`#${i}`).append('<p id="dead"></p>')
// }




else if(neighborCounter === 2 && $(`#${i}`).contents().attr('class') === "alive"){
    $(`#${i}`).empty()
    $(`#${i}`).append('<p id="alive"></p>')
}
else{
    $(`#${i}`).empty()
    $(`#${i}`).append('<p id="dead"></p>')
}



    // if($(`#${i}`).contents().attr('class') === "alive"){
    //     if(neighborCounter < 2 || neighborCounter > 3){
    //         $(`#${i}`).empty()
    //         $(`#${i}`).append('<p id="dead"></p>')
    //     }
    //     else{
    //         $(`#${i}`).empty()
    //         $(`#${i}`).append('<p id="alive"></p>')
    //     }
    // }
    // else{
    //     if(neighborCounter === 3){
    //         $(`#${i}`).empty()
    //         $(`#${i}`).append('<p id="alive"></p>')
    //     }
    //     else{
    //         $(`#${i}`).empty()
    //         $(`#${i}`).append('<p id="dead"></p>')
    //     }
    // }
}
}
// $(`#${i}`).append(`<img class="alive" src="https://i.imgur.com/QlOQP0C.jpg"></img>`)
function changeStatus(a){
    if($(`#${a}`).contents().attr('id') === "alive"){
        $(`#${a}`).empty()
        $(`#${a}`).append(`<img class="alive" src="https://i.imgur.com/QlOQP0C.jpg"></img>`)
    }
}