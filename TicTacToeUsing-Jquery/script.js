var player1 = "X";
var player2 = "O";
var currentplayer = player1;

function play(selectedElement)
{
    if (IsValidMove(selectedElement) == true)
    {
        if (currentplayer == player1)
        {
            //selectedElement.textContent = player1;
            $(selectedElement).text(player1);
            currentplayer = player2;
            if (checkForWin() == true)
            {
               
                document.getElementById("state").value = "Player X Win";             
                DisableButtons();
                
                
            }
        }
        else if (currentplayer == player2)
        {
            //selectedElement.textContent = player2;
            $(selectedElement).text(player2);
            currentplayer = player1;
            if (checkForWin() == true) 
            {
                
                document.getElementById("state").value = "Player O Win";
                
                DisableButtons();
            }
        }

        if (IsDraw() == true) {

            
            document.getElementById("state").value = " The Game is Draw";
            

        }

    } 
}
function IsValidMove(Button)
{
    if (Button.textContent != " ") {
        return true;
    }
    else {
        return false;

    }
}

function  DisableButtons()
{
    Button1.disabled = true;
    Button2.disabled = true; 
    Button3.disabled = true;
    Button4.disabled = true;
    Button5.disabled = true;
    Button6.disabled = true;
    Button7.disabled = true;
    Button8.disabled = true;
    Button9.disabled = true;
    
}
        

function checkForWin ()
{
    if (Button1.textContent == Button2.textContent && Button2.textContent == Button3.textContent && Button1.textContent != " ") return true;

    if (Button1.textContent == Button4.textContent && Button4.textContent == Button7.textContent && Button1.textContent != " ") return true;

    if (Button1.textContent == Button5.textContent && Button5.textContent == Button9.textContent && Button1.textContent != " ") return true;

    if (Button3.textContent == Button5.textContent && Button5.textContent == Button7.textContent && Button3.textContent != " ") return true;

    if (Button3.textContent == Button6.textContent && Button6.textContent == Button9.textContent && Button3.textContent != " ") return true;

    if (Button2.textContent == Button5.textContent && Button5.textContent == Button8.textContent && Button2.textContent != " ") return true;

    if (Button4.textContent == Button5.textContent && Button5.textContent == Button6.textContent && Button4.textContent != " ") return true;

    if (Button7.textContent == Button8.textContent && Button8.textContent == Button9.textContent && Button7.textContent != " ") return true;


    return false;
}
function  IsDraw()
{
    if (Button1.textContent != " " && Button2.textContent != " " && Button3.textContent != " " && Button4.textContent != " " && Button5.textContent != " "
        && Button6.textContent != " " && Button7.textContent != " " &&
        Button8.textContent != " " && Button9.textContent != " ") return true;
    return false;

}

function reload() {
  
   document.getElementById('state').value = "";
    window.location.reload();
    Button1.disabled = false;
    Button2.disabled = false; 
    Button3.disabled = false;
    Button4.disabled = false;
    Button5.disabled = false;
    Button6.disabled = false;
    Button7.disabled = false;
    Button8.disabled = false;
    Button9.disabled = false;
    
}
$(document).ready(function(){
    $(".Button").click(function(event){
        play(event);
    });
});