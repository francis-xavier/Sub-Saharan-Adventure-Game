var QuestUpdate : GameObject;
var PlayerText : GameObject;
var TextDisplay : GameObject;

function Start() {
	transform.position=Vector3(0,-1000,0);
	QuestUpdate.GetComponent.<Text>().text='Active Quest: Exit the Wood';
	yield WaitForSeconds(3);
	TextDisplay.SetActive(true);
	PlayerText.GetComponent.<Text>().text='Where am I?';
	yield WaitForSeconds (2);
	PlayerText.GetComponent.<Text>().text='I need to find a way out of these woods';
	yield WaitForSeconds (2);
	PlayerText.GetComponent.<Text>().text='';
	TextDisplay.SetActive(false);
	this.gameObject.SetActive(false);
}