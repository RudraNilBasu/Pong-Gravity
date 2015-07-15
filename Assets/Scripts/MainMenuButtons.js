#pragma strict

function play()
{
	Application.LoadLevel(Application.loadedLevel +1);
}

function credits()
{
	Application.LoadLevel("credits");
}

function quit()
{
	Application.Quit();
}

function cMainMenu()
{
	Application.LoadLevel("MainMenu");
}