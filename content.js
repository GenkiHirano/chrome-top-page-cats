/**
* 配列の値からランダムで1つ選択して返す
* @param arr arrayData (required) 選択する配列の内容
* @return str
*/
function choose_at_random(arrayData) {
    var arrayIndex = Math.floor(Math.random() * arrayData.length);
    return arrayData[arrayIndex];
}

$(function(){
    let img = choose_at_random(images);
    let imgURL = chrome.extension.getURL(img);
    $('body').css('background-image','url(' + imgURL + ')').css('background-size','cover');
    
    let msg = choose_at_random(message);
    $('#message_area').html(msg);
});