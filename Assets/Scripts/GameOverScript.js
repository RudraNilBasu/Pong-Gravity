#pragma strict

var GM : GameObject;
var theBall : Transform;

function Update () 
{
	if(theBall.position.x > transform.position.x)
	{
		wait();
		//Debug.Log("GAME OVER");
		GM.GetComponent(GameSetup).gameOver=true;
	}
}

function wait()
{
	yield WaitForSeconds(3);
}