#pragma strict

var theBall : Transform;
var GM : GameObject;


function Update () 
{
	if(theBall.position.x < transform.position.x)
	{
		//Debug.Log("YOU WIN 4 STARS !!");
		GM.GetComponent(GameSetup).isFourStars=true;
		GM.GetComponent(GameSetup).gameOver=true;
	}
}