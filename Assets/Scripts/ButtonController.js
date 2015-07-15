#pragma strict


function nextRetry()
{
	Application.LoadLevel(Application.loadedLevel);
}
function nextProceed()
{
	Application.LoadLevel(Application.loadedLevel +1);
}

function goRetry()
{
	Application.LoadLevel(Application.loadedLevel);
}
function goQuit()
{
	Application.LoadLevel("MainMenu");
}