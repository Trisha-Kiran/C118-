//Create date variable
var date=new Date()
let display_date="Date" + date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function(){
    $("#display_date").html(display_date)
})
//Define variable to store predicted emotion
let predicted_emotion

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        let input_data={"text":$("text").val()}
        $.ajax({
            type:'POST',
            url:"/predict-emotion",
            data:JSON.stringify(input_data),
            datatype:"json",
            contentType:'application/json',
            success:function(){
                predicted_emotion=result.data.predicted_emotion
                emo_url=result.data.predicted_emotion_img_url
                $("#prediction").html(predicted_emotion)
                $("#prediction").css("display","block")
                $("#emo_img_url").attr('src,emo_url')
                $("#emo_img_url").css("display","block")
            },
            error:function(result){
                alert(result.responseJSON.message)
            }
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
            
            //Error function
            
        });
    });
})

const weekday=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
const month=['january','february','march','april','may','june','july','august','september','october','november','december']
display_date=`${weekday[date.getDay()-1]}${date.getDate()},${month[date.getMonth()]}${date.getFullYear()}`
