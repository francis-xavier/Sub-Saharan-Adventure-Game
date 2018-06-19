var ItemInfo : GameObject;
var TheAxe : GameObject;
var ItemEquipped : GameObject;

function ItemEquip(){
	TheAxe.SetActive(true);
	ItemInfo.SetActive(false);
	ItemEquipped.SetActive(true);
}
function ItemCancel(){
	ItemInfo.SetActive(false);
}