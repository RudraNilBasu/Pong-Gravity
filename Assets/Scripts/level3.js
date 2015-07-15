#pragma strict

var GM : GameObject;
var maxChild : int = 2;
var justOnce : int = 0;

var GMSetup : GameObject;
var score : float;
var highScoreDisplay : UnityEngine.UI.Text;

function Start () 
{
	//GM.GetComponent(GameSetup).level=2;
	//Debug.Log("huehuehue");
	//GM.GetComponent(GameControl).childNumber=maxChild;
}

function Update()
{
	if(justOnce ==0)
	{
		GM.GetComponent(GameSetup).level=3;
		GM.GetComponent(GameControl).level=3;
		GM.GetComponent(GameControl).childNumber=maxChild;
		justOnce++;
	}
	
	score = GMSetup.GetComponent(GameSetup).score;
	if(score> PlayerPrefs.GetFloat("level3"))
	{
		PlayerPrefs.SetFloat("level3",score);
	}
	//Debug.Log(PlayerPrefs.GetFloat("level1"));
	highScoreDisplay.text = "PERSONAL BEST  "+PlayerPrefs.GetFloat("level3");
}