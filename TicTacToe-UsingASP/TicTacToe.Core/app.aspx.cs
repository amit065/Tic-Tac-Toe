using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TicTacToe.Core
{
    public partial class app : System.Web.UI.Page
    {
        int Player1=1;

        int Player2=2;

        static int CurrentPlayer=1;

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button10_Click(object sender, EventArgs e)
        {
            Response.Redirect("app.aspx");
        }
        protected void Button_Click(object sender, EventArgs e)
        {
            Button button = (Button)sender;

            if(IsValidMove(button)==true)
            {
                if(CurrentPlayer==Player1)
                {

                    button.Text="X";
                    CurrentPlayer = Player2;
                    if (HasWon() == true)
                    {
                        Winner.Text = "Playe X Won";
                        Disablebuttons();
                        return;
                    }

                }
                else if(CurrentPlayer==Player2)
                {
                    button.Text = "O";
                    CurrentPlayer = Player1;
                    if (HasWon() == true)
                    {
                        Winner.Text = "Playe O Won";
                        Disablebuttons();
                        return;
                    }

                }

                if(IsDraw()==true)
                {

                    Winner.Text = "Game Draw";
                }
               
            }
            
        }

        protected bool IsValidMove(Button button)
        {
            if (button.Text != " ")
            {
                return false;
            }
            else
            {
                return true;

            }
        }

        protected void Disablebuttons()
        {

            Button1.Enabled = false;
            Button2.Enabled = false;
            Button3.Enabled = false;
            Button4.Enabled = false;
            Button5.Enabled = false;
            Button6.Enabled = false;
            Button7.Enabled = false;
            Button8.Enabled = false;
            Button9.Enabled = false;

        }
        protected bool HasWon()
        {
            if (Button1.Text == Button2.Text && Button2.Text == Button3.Text && Button1.Text != " ") return true;

            if (Button1.Text == Button4.Text && Button4.Text == Button7.Text && Button1.Text != " ") return true;

            if (Button1.Text == Button5.Text && Button5.Text == Button9.Text && Button1.Text != " ") return true;

            if (Button3.Text == Button5.Text && Button5.Text == Button7.Text && Button3.Text != " ") return true;

            if (Button3.Text == Button6.Text && Button6.Text == Button9.Text && Button3.Text != " ") return true;

            if (Button2.Text == Button5.Text && Button5.Text == Button8.Text && Button2.Text != " ") return true;

            if (Button4.Text == Button5.Text && Button5.Text == Button6.Text && Button4.Text != " ") return true;

            if (Button7.Text == Button8.Text && Button8.Text == Button9.Text && Button7.Text != " ") return true;


            return false;
        }

        protected bool IsDraw()
        {
            if (Button1.Text != " " && Button2.Text != " " && Button3.Text != " " && Button4.Text != " " && Button5.Text != " " && Button6.Text != " " && Button7.Text != " " &&
                Button8.Text != " " && Button9.Text != " ") return true;
            return false;

        }

    }
}