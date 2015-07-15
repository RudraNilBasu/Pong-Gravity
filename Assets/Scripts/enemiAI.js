#pragma strict

var theBall : GameObject;
var limitSpeed : int = 10;   // see if it works for 30
//var theSpark : GameObject;


function Start () {

}

function Update () 
{
	rigidbody2D.velocity.y = theBall.rigidbody2D.velocity.y;
	//rigidbody2D.velocity.y = 2* (rigidbody2D.velocity.y - ((transform.position.y - theBall.transform.position.y)/10));
	transform.rotation.x = 0;
	transform.rotation.y = 0;
	transform.rotation.z = 0;
	if(rigidbody2D.velocity.y <= (limitSpeed * (-1)))  // when the AI Bat moves down
	{
		rigidbody2D.velocity.y = -limitSpeed;
	}
	if(rigidbody2D.velocity.y >= (limitSpeed ))
	{
		rigidbody2D.velocity.y = limitSpeed;
	}
	//Debug.Log("Speed = " + rigidbody2D.velocity.y);
}
/*
function OnCollisionEnter2D(coll: Collision2D)
{
	if(coll.gameObject.tag=="Ball")
	{
		Instantiate(theSpark,transform.position,transform.rotation);
	}
}
*/