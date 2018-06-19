var fileName="savedfile.data";
var LoadCode : String;
static var GlobalLoad : String; //So that this variable can be used in other scripts.
var NoSave : GameObject;

function Start() {
	var OurFile : StreamReader = new StreamReader(fileName); //Reads whats inside the file.

	line=OurFile.ReadLine();
	while(line!=null)
	{	LoadCode=line;
		line= OurFile.ReadLine();
	}
	OurFile.Close();
}

function LoadGame() {
		GlobalLoad = LoadCode;
		if(GlobalLoad=="savingthegame"){
		Application.LoadLevel(1);
		//SceneManager.LoadScene(1);
		}
		else
		{	NoSave.SetActive(true);
			//yield WaitForSeconds(3);
			//NoSave.SetActive(false);
		}
}

function QuitGame() { 
	Application.Quit();
}

function NewGame() {
	Application.LoadLevel(1);
	//SceneManager.LoadScene(1);
}