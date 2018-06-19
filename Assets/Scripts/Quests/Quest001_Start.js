import UnityEngine.UI;

var TextBoxOnCheck : int =0;
var MessageBox : GameObject;
var TextBox : GameObject;
var TextMessage : String;
var QuestBox : GameObject;
var QuestText : GameObject;
var QuestName : String;

var QuestItemToShow : GameObject;


function OnMouseDown() {
	if(TextBoxOnCheck == 0)
	{ 
	QuestItemToShow.SetActive(true);
	TextBoxOnCheck =1; 
	MessageBox.SetActive(true);
	TextBox.GetComponent.<Text>().text=TextMessage;
	QuestName = "Active Quest: 'Get The Money'";
	QuestText.GetComponent.<Text>().text= QuestName;
	}

	else
	{	TextBoxOnCheck =0;
		MessageBox.SetActive(false);
		TextMessage = "Villager: Go on then ja!";
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