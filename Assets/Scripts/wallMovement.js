#pragma strict

var willMove : boolean =  false;
var level : int = 0;
var moveSpeed : float = -1f;
var upperLimit : Transform;
var lowerWall : Transform;
var time : float = 0;
var timeToMove : float = 0;

function Start () 
{
	if(level>=5)
	{
		willMove=true;
	}
	else
	{
		willMove=false;
	}
	//willMove=false;
}

function Update () 
{
	time += Time.deltaTime;
	if(willMove == true)
	{
		timeToMove+= Time.deltaTime;
		if(timeToMove > 5f)
		{
			transform.Translate(0,(moveSpeed)*Time.deltaTime,0);//Debug.Log("Move");//write moving code
		}
	}
	if(time > 1f)
	{
		moveSpeed*=(-1);
		time = 0;
	}
}

function OnCollisionEnter2D(coll: Collision2D)
{
	if(coll.gameObject.tag == "upperWall")
	{
		Debug.Log("huehuehue");
		moveSpeed*=(-1);
	}
	if(coll.gameObject.tag == "lowerWall")
	{
		Debug.Log("huehuehue");
		moveSpeed*=(-1);
	}
}