#pragma strict

var theBall : GameObject;
var distance : float;
var move : Vector2;
var speed : float = 5.0f;

function Start () {

}

function Update () 
{
	distance = theBall.transform.position.y - transform.position.y;
	if(distance > 0)
	{
		move.y = speed * Mathf.Min(distance, 1.0f);
	}
	if(distance < 0)
	{
		move.y = (-1.0) * (speed * Mathf.Min(-distance, 1.0f));
	}
	//transform.position += move * Time.deltaTime;
	transform.position += move * 5 *Time.deltaTime;
	transform.rotation.x = 0;
	transform.rotation.y = 0;
	transform.rotation.z = 0;
}