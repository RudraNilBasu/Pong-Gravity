#pragma strict

var GM : GameObject;
var maxChild : int = 2;
var justOnce : int = 0;
var justOnceWall : int =0;
var theWall : GameObject;
var theWallPosn : Transform;

var GMSetup : GameObject;
var score : float;
var highScoreDisplay : UnityEngine.UI.Text;

var discount : int = 4;
function Start () 
{
	
}

function Update()
{
	if(justOnce ==0)
	{
		GM.GetComponent(GameSetup).level=4;
		GM.GetComponent(GameControl).level=4;
		GM.GetComponent(GameControl).childNumber=maxChild;
		justOnce++;
		GM.GetComponent(GameSetup).discount=discount;
		theWall.GetComponent(wallMovement).level=4;
		
	}
	if((Time.time>7f) && justOnceWall ==0)
	{
		Instantiate(theWall,theWallPosn.position,theWallPosn.rotation);
		justOnceWall++;
	}
	
	score = GMSetup.GetComponent(GameSetup).score;
	if(score> PlayerPrefs.GetFloat("level4"))
	{
		PlayerPrefs.SetFloat("level4",score);
	}
	//Debug.Log(PlayerPrefs.GetFloat("level1"));
	highScoreDisplay.text = "PERSONAL BEST  "+PlayerPrefs.GetFloat("level4");
}