var ThePlayer : GameObject;
var StartingScript: GameObject; //The one which has fade screens ie.Starting.
var VillageBox : GameObject; //The Trigger for theres a village ; disable it cause we already passed it.
var PlayerX : float =-21.3109 ;//X position of player.
var PlayerY : float=2.101152;//Y position of player.
var PlayerZ : float=2.723285;//Z position of player.

var LoadedCode : String;

var QuestStatus : GameObject;

function Start() {
	LoadedCode=LoadAndNew.GlobalLoad; //Using Static variable from LoadAndNew.js
	if(LoadedCode == "savingthegame")
	{
		ThePlayer.transform.position=Vector3(PlayerX,PlayerY,PlayerZ);
		StartingScript.SetActive(false);
		VillageBox.SetActive(false);
		QuestStatus.GetComponent.<Text>().text='Active Quest: Reach The Village.';
	}
}