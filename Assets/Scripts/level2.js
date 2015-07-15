#pragma strict

var GM : GameObject;
var maxChild : int = 3;
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
		GM.GetComponent(GameSetup).level=2;
		GM.GetComponent(GameControl).level=2;
		GM.GetComponent(GameControl).childNumber=maxChild;
		justOnce++;
	}
	
	score = GMSetup.GetComponent(GameSetup).score;
	if(score> PlayerPrefs.GetFloat("level2"))
	{
		PlayerPrefs.SetFloat("level2",score);
	}
	//Debug.Log(PlayerPrefs.GetFloat("level1"));
	highScoreDisplay.text = "PERSONAL BEST  "+PlayerPrefs.GetFloat("level2");
}