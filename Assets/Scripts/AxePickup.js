var TheDistance : float =PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;
var FakeAxe : GameObject;
var RealAxe : GameObject;

function Update () {
	TheDistance = PlayerCasting.DistanceFromTarget;
}

function OnMouseOver () {
	if(TheDistance <= 3)
	{ TextDisplay.GetComponent.<Text>().text= "Pick Up Axe" ;}
}

function OnMouseExit () {
	TextDisplay.GetComponent.<Text>().text = "";
}

function OnMouseDown () {
	if(TheDistance <= 3)
	{	transform.position =Vector3(0,-1000,0);
		RealAxe.SetActive(true);
		FakeAxe.SetActive(false);
	}
}
