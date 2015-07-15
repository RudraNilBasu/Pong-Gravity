#pragma strict

var isMainMenu : boolean;
var level : int = 1;
var counter : float = 0.0f;
var timeMultiplicationFactor : float = 1.1f + (0.1*(level -1));

function Start () 
{
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds(4);
	GetComponent(SpriteRenderer).enabled = true;
	yield WaitForSeconds(1);
	var RandomNumber = Random.Range(0,2);
	if(RandomNumber <=0.5)
	{
		rigidbody2D.AddForce(new Vector2(80,10));
	}
	else
	{
		rigidbody2D.AddForce(new Vector2(-80,-10));
	}
}

function Update () 
{
	counter += Time.deltaTime;
	if((counter > 2) && isMainMenu==false)
	{
		counter = 0;
		rigidbody2D.velocity = new Vector2(rigidbody2D.velocity.x*timeMultiplicationFactor,rigidbody2D.velocity.y*timeMultiplicationFactor);
	}
}