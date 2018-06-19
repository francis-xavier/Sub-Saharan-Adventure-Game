//var Camera : GameObject;//GetComponent("MouseLook");
var Inventory : GameObject;
var InvStatus : int;
var ScoreCounter: GameObject;

Cursor.lockState = cursorMode = CursorLockMode.Locked;
			Cursor.visible = false;
function Update () {
	if( Input.GetButtonDown("Inventory"))
	{	
		if(InvStatus == 0)
		{ 	InvStatus =1;
			Inventory.SetActive(true);
			ScoreCounter.SetActive(false);

			Cursor.lockState = cursorMode = CursorLockMode.None;
			Cursor.visible = true;

		}
		else 
		{	ScoreCounter.SetActive(true);
			Inventory.SetActive(false);
			Cursor.lockState = cursorMode = CursorLockMode.Locked;
			Cursor.visible = false;
			InvStatus =0;
		}

	}

}	