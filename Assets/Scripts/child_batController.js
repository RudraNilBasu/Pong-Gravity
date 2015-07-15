#pragma strict

var timeOfLife : float = 0.0f;
var childBatMoveSpeed = -5000;

var destroyExplosion : GameObject;

function Start () 
{
	timeOfLife = 0.0f;
	rigidbody2D.AddForce(new Vector2(0,childBatMoveSpeed));
}

function Update () 
{
	transform.position.x = 10;
	transform.rotation.x = 0;
	transform.rotation.y = 0;
	transform.rotation.z = 0;
	//timeOfLife += Time.time;
	timeOfLife += Time.deltaTime;
	//Debug.Log(""+timeOfLife);
	
	//if((timeOfLife)/1000 > 0.5)
	if(timeOfLife > 2)
	{
		Instantiate(destroyExplosion, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}