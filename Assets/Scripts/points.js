#pragma strict


var explosion : GameObject;
var GameControlObj: GameObject;
function Start () {

}

function Update () {

}

function OnTriggerEnter2D(info : Collider2D)
{
	if(info.tag =="Player")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		//Debug.Log("Increase Player score (Ball>BallPointCounter>points.js)");
		GameControlObj.GetComponent(GameControl).addScore = true;
	}
}