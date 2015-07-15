#pragma strict

var PlayerJumpSpeed : int = 100000;

function Start () {

}

function Update () 
{
	transform.position.x = 10;
	if(Input.GetKey(KeyCode.A))
	{
		rigidbody2D.AddForce(Vector2.up * PlayerJumpSpeed);
	}
}

function jump()
{
	rigidbody2D.AddForce(Vector2.up * 5*PlayerJumpSpeed);
}