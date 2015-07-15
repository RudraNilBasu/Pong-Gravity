#pragma strict

var mainCamera : Camera;

//var topWall : BoxCollider2D;
//var bottomWall : BoxCollider2D;
//var leftWall : BoxCollider2D;
//var rightWall : BoxCollider2D;

//var Player01 : Transform;
//var Player02 : Transform;
var level : int = 0;

var proceedToNextLevel : boolean;
var isFourStars : boolean;
var gameOver : boolean;
var score : float;
var star : int;

var gameOverText : GameObject;
var proceedText : GameObject;
var star1 : GameObject;
var star2 : GameObject;
var star3 : GameObject;
var star4 : GameObject;
var starParticle : GameObject;
var starParticlePosn : Transform;
var justOnce : int = 0;

var discount : int = 0;

function Start () 
{
	//topWall.size = new Vector2( mainCamera.ScreenToWorldPoint (new Vector3 (Screen.width * 2f, 0f, 0f)).x, 1f);
	//topWall.center = new Vector2( 0f, mainCamera.ScreenToWorldPoint(new Vector3(0f, Screen.height, 0f)).y + 0.5f);
	isFourStars=false;
	gameOver=false;
	score=0;
	star=0;
	proceedToNextLevel=false;
}

function Update () 
{
	if(score >=(4+level - discount) && score <(7+level - discount))
	{
		star = 1;
	}
	else if (score >=(7+level - discount) && score <(9+level - discount))
	{
		star = 2;
	}
	else if (score >=(9+level - discount))
	{
		star = 3;
	}
	if(isFourStars == true)
	{
		star =4;
	}
	if(gameOver==true)
	{
		//Debug.Log("Score : "+ score + "Star : "+star);
		if(star==4)
		{
			if(justOnce==0){Instantiate(starParticle,starParticlePosn.position,starParticlePosn.rotation);justOnce=1;}
			proceedText.SetActiveRecursively(true);
			star1.SetActiveRecursively(false);
			star2.SetActiveRecursively(false);
			star3.SetActiveRecursively(false);
			star4.SetActiveRecursively(true);
		}
		else if(score<(4+level - discount))
		{
			proceedToNextLevel=false;
			gameOverText.SetActiveRecursively(true);
		}
		else
		{
			proceedToNextLevel=true;
			proceedText.SetActiveRecursively(true);
			if(star==1)
			{
				if(justOnce==0){Instantiate(starParticle,starParticlePosn.position,starParticlePosn.rotation);justOnce=1;}
				star1.SetActiveRecursively(true);
				star2.SetActiveRecursively(false);
				star3.SetActiveRecursively(false);
				star4.SetActiveRecursively(false);
			}
			if(star==2)
			{
				if(justOnce==0){Instantiate(starParticle,starParticlePosn.position,starParticlePosn.rotation);justOnce=1;}
				star1.SetActiveRecursively(false);
				star2.SetActiveRecursively(true);
				star3.SetActiveRecursively(false);
				star4.SetActiveRecursively(false);
			}
			if(star==3)
			{
				if(justOnce==0){Instantiate(starParticle,starParticlePosn.position,starParticlePosn.rotation);justOnce=1;}
				star1.SetActiveRecursively(false);
				star2.SetActiveRecursively(false);
				star3.SetActiveRecursively(true);
				star4.SetActiveRecursively(false);
			}
			if(star==4)
			{
				star1.SetActiveRecursively(false);
				star2.SetActiveRecursively(false);
				star3.SetActiveRecursively(false);
				star4.SetActiveRecursively(true);
			}
		}
	}
}