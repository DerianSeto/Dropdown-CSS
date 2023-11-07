// <onmouseover='InsetDrop("id", Dropped)'>
let DropHeight = 150;

function Drop(id, Dropped){ //Opens and closes dropdown menus | Call from HTML using ^
	let toDrop = document.getElementById(id);						//Initializes the element toDrop
	let Parent = getParent(id);										//Initializes Parent to getParent(id)
	let lines;
	
	
	if(toDrop.classList=="Mains"){ //Specific case for the main lists
		lines = toDrop.querySelectorAll("li").length				//The total amount of li elements in (toDrop)
		-toDrop.querySelectorAll("li ul li").length;				//Minus the total amount of li elements in (toDrop)'s children
		lines += 1;													//+1 for padding (or make that spacing div a li element)
	}else{lines = toDrop.getElementsByTagName("li").length;}		//Gets how many li elements are in div (id) | Will get all li elements, including ones nested in nested elements
	
	
	lines = (lines*25)+1;											//Each line is 25px, +1 to reach the bottom
	let ExtendCheck = ((parseInt(id.replace(/\D/g,''))*25))+lines; 	//Takes the x value from id "Insetx" to get its height, then adds it's li elements's height to get the needed space
	
	
	if(Dropped){ //Closes div (id)
		Parent.style.height = DropHeight;							//Sets div Parent's height to DropHeight | Must be first else it won't work for opening Parent
		toDrop.style.height = "0px";								//Sets div (id)'s height to 0
	}else{ //Opens div (id)
		toDrop.style.height = lines;								//Sets div (id)'s height to contain its contents
		
		if(DropHeight<ExtendCheck){ //Checks the main lists available space vs its required space
			Parent.style.height = ExtendCheck-1;					//Sets the parent div's (For testing, Main) height to show all elements
		}
	}
}



function getParent(id){ //Retrieves the parent element of (id)
	let Lists = document.getElementsByTagName("ul");			//Creates a list of unordered lists, to check against the (id)
	for(let i=0; i<Lists.length; i++){ //Loops through the uls
		if(Lists[i].contains(document.getElementById(id))){ //Checks if the item is (id)'s parent
			return Lists[i];									//Returns the parent
		}
	}
	return "Failed";											//Returns a definitive failure value | Check against (Gramps) for double embedded lists
}