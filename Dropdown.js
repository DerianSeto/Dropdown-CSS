// <onmouseover='InsetDrop("id", Dropped)'>
let DropHeight = 150;

function InsetDrop(id, Dropped){ //Opens and closes dropdown menus | Call from HTML using ^
	let toDrop = document.getElementById(id);				//Initializes the element toDrop
	let Main = document.getElementById("Main");				//Initializes the element (div) Main
	
	if(id=="Main"){ //Specific case for div Main
		lines = 6;											//Sets (lines) for div Main
	}else{ //All other cases
		lines = toDrop.getElementsByTagName("li").length;	//Gets how many li elements are in div (id) | Will get all li elements, including ones nested in nested elements
	}
	
	lines = (lines*25)+1;									//Each line is 25px, +1 to reach the bottom | (lines) comes from html
	
	if(Dropped){ //Closes div (id)
		Main.style.height = DropHeight;						//Sets div Main's height to DropHeight | Must be first else it won't work for opening Main
		toDrop.style.height = "0px";						//Sets div (id)'s height to 0
	}else{ //Opens div (id)
		toDrop.style.height = lines;
		//Sets div (id)'s height to contain its elements
		if(id=="Inset3"){ //Specific case for div Inset3
			Main.style.height = (DropHeight + 25);			//Sets div Main's height to make all li elements visible
		}else if(id=="Inset4"){ //Specific case for div Inset3
			Main.style.height = (DropHeight + 25);			//Sets div Main's height to make all li elements visible
		}
	}
}