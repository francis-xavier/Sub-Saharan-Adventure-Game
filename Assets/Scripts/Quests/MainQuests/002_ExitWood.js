var TheTextBox : GameObject;
var PlayerText : GameObject;
var QuestStatus : GameObject;

function OnTriggerEnter(col : Collider) {
	transform.position=Vector3(0,-1000,0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text='Looks like a Village over that bridge.';
	yield WaitForSeconds(3);
	PlayerText.GetComponent.<Text>().text='';
	TheTextBox.SetActive(false);
	yield WaitForSeconds(1);
	TheTextBox.SetActive(true);
	PlayerText.GetComponent.<Text>().text='Better get across the Bridge by the Palm Tree.';
	yield WaitForSeconds(3);
	PlayerText.GetComponent.<Text>().text='';
	TheTextBox.SetActive(false);
	PlayerText.SetActive(false);
	QuestStatus.GetComponent.<Text>().text='Active Quest: Reach The Village.';
	this.gameObject.SetActive(false);
}