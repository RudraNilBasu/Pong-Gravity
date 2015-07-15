#pragma strict

var GMSetup : GameObject;
var score : float;
var highScoreDisplay : UnityEngine.UI.Text;

function Start () 
{
	
}

function Update () 
{
	//Debug.Log("huehuehue "+GMSetup.GetComponent(GameSetup).score);
	score = GMSetup.GetComponent(GameSetup).score;
	if(score> PlayerPrefs.GetFloat("level1"))
	{
		PlayerPrefs.SetFloat("level1",score);
	}
	//Debug.Log(PlayerPrefs.GetFloat("level1"));
	highScoreDisplay.text = "PERSONAL BEST  "+PlayerPrefs.GetFloat("level1");
	//Debug.Log("lulz");
	//highScoreDisplay.text = "BEST  "+PlayerPrefs.GetFloat("level1");
}