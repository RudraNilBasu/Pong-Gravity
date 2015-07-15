#pragma strict

var GM : GameObject;
var maxChild : int = 2;
var justOnce : int = 0;
/*
var justOnceWall : int =0;
var theWall : GameObject;
var theWallPosn : Transform;

var otherWallObject : GameObject;
*/
var GMSetup : GameObject;
var score : float;
var highScoreDisplay : UnityEngine.UI.Text;

var discount : int = 0;
function Start () 
{
	
}

function Update()
{
	if(justOnce ==0)
	{
		GM.GetComponent(GameSetup).level=9;
		GM.GetComponent(GameControl).level=9;
		GM.GetComponent(GameControl).childNumber=maxChild;
		justOnce++;
		GM.GetComponent(GameSetup).discount=discount;
		//theWall.GetComponent(wallMovement).level=0; // intentional no wall
		
	}
	/*
	if((Time.time>7f) && justOnceWall ==0)
	{
		Instantiate(theWall,theWallPosn.position,theWallPosn.rotation);
		otherWallObject = GameObject.Find("Wall(Clone)");
		
		otherWallObject.GetComponent(wallMovement).willMove=true;
		//Debug.Log(otherWallObject.GetComponent(wallMovement).willMove);
		justOnceWall++;
	}
	*/
	
	score = GMSetup.GetComponent(GameSetup).score;
	if(score> PlayerPrefs.GetFloat("level9"))
	{
		PlayerPrefs.SetFloat("level9",score);
	}
	//Debug.Log(PlayerPrefs.GetFloat("level1"));
	highScoreDisplay.text = "PERSONAL BEST  "+PlayerPrefs.GetFloat("level9");
}