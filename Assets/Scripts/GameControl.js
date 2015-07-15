#pragma strict

var scoreDisplay : UnityEngine.UI.Text;
var playerScore = 0;
var addScore : boolean = false;


var theChildBat : GameObject;
var childBatPosn : Transform;

var beginExplosion : GameObject;

var GM : GameObject;


var isBarrier : boolean = false;
var barrierPosn : Transform;
var theBarrier : GameObject;

var childNumber : int = 0;
var childNumberText : UnityEngine.UI.Text;
var level : int = 0;

function Start () 
{
	if(level>=2)
	{childNumberText.text = " X "+childNumber;}
}

function Update () 
{
	if(level>=2)
	{childNumberText.text = " X "+childNumber;}
	if(addScore == true)  // adding score
	{
		playerScore ++;
		addScore = false;
	}
	scoreDisplay.text = ""+playerScore;   // for displaying the score in the game
	GM.GetComponent(GameSetup).score=playerScore;   // assigning the score in "GameSetup" script
	
	//if(Input.GetKey(KeyCode.Z))
	//if(Input.GetKeyDown(KeyCode.D) && (Application.loadedLevel>2))
	if(Input.GetKeyDown(KeyCode.D) && (childNumber>0))
	{
		Instantiate(beginExplosion, childBatPosn.position, childBatPosn.rotation);
		Instantiate(theChildBat, childBatPosn.position, childBatPosn.rotation);
		childNumber--;
		childNumberText.text = " X "+childNumber;
	}
	
	if(isBarrier == true)
	{
		barrier();
	}
}

function barrier()
{
	if(Time.time > 5f)
	{
		Instantiate(theBarrier, barrierPosn.position, barrierPosn.rotation);
	}
}

function child()
{
	if( (childNumber>0))
	{
		Instantiate(beginExplosion, childBatPosn.position, childBatPosn.rotation);
		Instantiate(theChildBat, childBatPosn.position, childBatPosn.rotation);
		childNumber--;
		childNumberText.text = " X "+childNumber;
	}
}