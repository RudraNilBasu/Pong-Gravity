#pragma strict
var prizmWord : GameObject;
function Start () 
{
	yield WaitForSeconds(2);
	Instantiate(prizmWord.transform, transform.position, transform.rotation);
}

function Update () {

}