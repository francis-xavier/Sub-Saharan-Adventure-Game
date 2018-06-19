import UnityEngine.UI;

var TextBoxOnCheck : int =0;
var MessageBox : GameObject;
var TextBox : GameObject;
var QuestBox : GameObject;
var QuestText : GameObject;



function OnMouseDown() {
	if(TextBoxOnCheck == 0)
	{ 
	TextBoxOnCheck =1; 
	MessageBox.SetActive(true);
	TextBox.GetComponent.<Text>().text="Villager : Thank You Ja!";
	QuestText.GetComponent.<Text>().text= "Active Quest: 'None'";
	}

	else
	{	TextBoxOnCheck =0;
		MessageBox.SetActive(false);
		//TextMessage = "Villager: Go on then ja!";
	}
}

function Update () {
	if(Input.GetButtonDown("Submit"))
	{ if(TextBoxOnCheck==1)
		{
		MessageBox.SetActive(false);
		TextBoxOnCheck=0;
		}
	}

	if(Input.GetButtonDown("Cancel"))
	{ if(TextBoxOnCheck==1)
		{
		MessageBox.SetActive(false);
		TextBoxOnCheck=0;
		}
	}
}