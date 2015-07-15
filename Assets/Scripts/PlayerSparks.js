#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(theColl : Collider2D)
{
	//Debug.Log("The Function");
	if(theColl.name =="Ball")
	{
		Debug.Log("Add Sparks Here");
	}
}