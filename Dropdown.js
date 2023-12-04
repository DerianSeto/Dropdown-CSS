/*
<div id="MenuDropBtn?" class="MenuDropBtns" onmouseenter='Drop("?", false); lookinGood("Dropbtn?", false);' onmouseleave='Drop("?", true); lookinGood("Dropbtn?", true);'>
	<button id="Dropbtn?" class="Buttons">Home</button>
	<ul id="?" class="Mains" style="position: relative;">
		<a href="">
			<li style="position:absolute; top:75px; z-index:3;" onmouseenter='Drop("?Insets?", false);' onmouseleave='Drop("?Insets?", true);'>Laugh
				<ul class="Insets" id="?Insets?">
					<a href=""><li></li></a>
				</ul>
			</li>
</a>
*/

function Drop(id, Dropped){ //Opens and closes dropdown menus | Call from HTML using ^
	let toDrop = document.getElementById(id);						//Initializes the element toDrop
	let Parent = getParent(id);										//Initializes Parent to getParent(id)
	let lines;
	
	if(toDrop.classList=="Mains"){ //Specific case for the main lists
		lines = getParentHeight(Parent);
		lines += 1;													//+1 for padding (or make that spacing div a li element)
	}else{
		lines = toDrop.getElementsByTagName("li").length;			//Gets how many li elements are in div (id) | Will get all li elements, including ones nested in nested elements
		lines = (lines*25)+10;										//Each line is 25px, +10 px padding
	}
	let ExtendCheck = ((parseInt(id.replace(/\D/g,''))*25)) + lines; 	//Takes the x value from id "Insetx" to get its height, then adds it's li elements's height to get the needed space
	
	if(Dropped){ //Closes div (id)
		Drop(Parent.id, false);
		toDrop.style.height = "0px";								//Sets div (id)'s height to 0
	}else{ //Opens div (id)
		toDrop.style.height = lines;								//Sets div (id)'s height to contain its contents
		
		if(getParentHeight(Parent) < ExtendCheck){ //Checks the main lists available space vs its required space
			//alert(getParentHeight(Parent));
			Parent.style.height = ExtendCheck-1;					//Sets the parent div's height to show all elements | -1 to reach the bottom
		}
	}
}

function getParentHeight(toGet){
	let height = toGet.querySelectorAll("li").length			//The total amount of li elements in (toDrop)
		-toGet.querySelectorAll("li ul li").length;				//Minus the total amount of li elements in (toDrop)'s children
		
	height = (height*25)+10;
	
	return height;
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




function getParent(id){ //Retrieves the parent element of (id)
	let Lists = document.getElementsByTagName("ul");			//Creates a list of unordered lists, to check against the (id)
	for(let i=0; i<Lists.length; i++){ //Loops through the uls
		if(Lists[i].contains(document.getElementById(id))){ //Checks if the item is (id)'s parent
			return Lists[i];									//Returns the parent
		}
	}
	return "Failed";											//Returns a definitive failure value | Check against (Gramps) for double embedded lists
}
