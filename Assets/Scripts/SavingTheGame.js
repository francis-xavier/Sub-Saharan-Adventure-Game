import System.IO;

var fileName= "savedfile.data";

function OnTriggerEnter(col : Collider) {
	var OurFile=File.CreateText(fileName);
	OurFile.WriteLine("savingthegame");//Write to file a particular value to reference and load file into game. 
	//OurFile.WriteLine("load10coins");
	OurFile.Close();
}