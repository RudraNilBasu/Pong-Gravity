#pragma strict
var level:int;
var moveToZero : int =0;
function Awake () {
		DontDestroyOnLoad (transform.gameObject);
	}


function Start () {

}

function Update () 
{
	level = Application.loadedLevel;
	if(level > PlayerPrefs.GetInt("resume"))
	{
		PlayerPrefs.SetInt("resume",level);
	}
	if(level==21)
	{
		moveToZero = 1;
	}
	if((level==22) && (moveToZero==1))
	{
		level=3;
	}
}

function resume()
{
	if(PlayerPrefs.GetInt("resume")==22)
	{
		PlayerPrefs.SetInt("resume",3);
	}
	if((PlayerPrefs.GetInt("resume")>2) && (PlayerPrefs.GetInt("resume")!=22))
	{Application.LoadLevel(PlayerPrefs.GetInt("resume"));}
}