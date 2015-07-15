#pragma strict

function Start () 
{
	yield WaitForSeconds(5);
	Application.LoadLevel(Application.loadedLevel +1);
}

function Update () {

}