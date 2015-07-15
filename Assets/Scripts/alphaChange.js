#pragma strict

function Start () 
{
	GetComponent(SpriteRenderer).color.a = 0.75;
	yield WaitForSeconds(4);
	//Debug.Log("Changing Colour");
	//GetComponent(SpriteRenderer).color.a = 1.0;
	GetComponent(SpriteRenderer).color.a = Mathf.Lerp(0.75,1.0,5);
}

function Update () 
{
	//GetComponent(SpriteRenderer).color.a = Mathf.Lerp(0.75,1.0,35*Time.deltaTime);
	//Debug.Log(""+GetComponent(SpriteRenderer).color.a);
}