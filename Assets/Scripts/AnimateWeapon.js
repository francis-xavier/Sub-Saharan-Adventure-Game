function Update() {
	if(Input.GetButtonDown("Attack"))
	//if(Input.GetMouseButton(0))
	{	GetComponent.<Animation>().Play("AttackAnimation");
	}
}