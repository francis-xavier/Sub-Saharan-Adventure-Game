var TextBoxOnCheck : int =0;
var MessageBox : GameObject;
var TextBox : GameObject;

var QuestItemToClose : GameObject; //Item to get rid of after taking it.
var QuestItemToShow : GameObject;

function OnMouseDown() {
	if(TextBoxOnCheck ==0)
	{	TextBoxOncheck=1;
		MessageBox.SetActive(true);
		TextBox.GetComponent.<Text>().text = "You Found Loot";
		yield WaitForSeconds(3);
		gameObject.SetActive(false);
		MessageBox.SetActive(false);
		QuestItemToClose.SetActive(false);
		QuestItemToShow.SetActive(true);
	}
}