////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 		Variables:		////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Name, amount, max, income
var res = {
	food:      {amount: 0,   max: 200, income: 0}, 
	wood:      {amount: 0,   max: 200, income: 0},
	stone:     {amount: 0,   max: 200, income: 0},
	skins:     {amount: 0,   max: 200, income: 0},
	herbs:     {amount: 0,   max: 200, income: 0},
	ore:       {amount: 0,   max: 200, income: 0},
	leather:   {amount: 0,   max: 200, income: 0},
	iron:      {amount: 0,   max: 200, income: 0},
	houses:    {amount: 0,   max: 20,  income: 0},
	land:      {amount: 2,   max: 10,  income: 0},
	faith:     {amount: 0,   max: 200, income: 0},
	research:  {amount: 0,   max: 0,   income: 0},
	smith:     {amount: 0,   max: 0,   income: 0},
	sawmill:   {amount: 0,   max: 0,   income: 0},
	barracks:  {amount: 0,   max: 0,   income: 0},
	stable:    {amount: 0,   max: 0,   income: 0}
};

var hidePopup = false;

var religionTree = {};

var affinities = {
	nordic:   {
		full_name: "Nordic",
		research:  {},
		religion:  {},
		buildings: {},
		units:     {}
	},
	germanic: {
		full_name: "Germanic",
		research:  {},
		religion:  {},
		buildings: {},
		units:     {}
	},
	roman:    {
		full_name: "Roman",
		research:  {},
		religion:  {},
		buildings: {
			religious: {
				altar: {
					cost: {
						stone: 20
					},
					amount:    0,
					max:       0,
					income:    0.1,
					type:      "faith",
					land:      0
				}
			}
		},
		units:     {}
	},
	egyptian: {
		full_name: "Egyptian",
		research:  {},
		religion:  {},
		buildings: {
			
		},
		units:     {}
	},
	arabic:   {
		full_name: "Arabian",
		research:  {},
		religion:  {},
		buildings: {
		
		},
		units:     {}
	},
	turk:   {
		full_name: "Turkish",
		research:  {},
		religion:  {},
		buildings: {
			   
		},
		units:     {}
	}
};

var hiddenRes = {
	research: true,
	faith:    true,
	leather:  true,
	iron:     true,
	smith:    true,
	sawmill:  true,
	barracks:  true,
	stable:   true
};

var hiddenTask = {
	smith:     true,
	sawmiller: true,
	soldier:   true,
	cavalery:  true
};

var buildings = {
		tent: {
			cost: {
				skins: 1,
				wood:  10
			},
			amount: 0,
			max:    5,
			income: 0,
			type:   "houses",
			land:   1,
			desc:   "<b>Cost:</b><br />10 wood - 1 Skin - 1 land<br /><b>Gives: </b><br /> 5 max population"
		},
		hut: {
			cost: {
				wood:  30
			},
			amount: 0,
			max:    10,
			income: 0,
			type:   "houses",
			land:   2,
			desc:   "<b>Cost:</b><br />30 wood - 2 land<br /><b>Gives: </b><br /> 15 max population"
		},
		foodShed: {
			cost: {
				wood:  125
			},
			amount: 0,
			max:    200,
			income: 0,
			type:   "food",
			land:   6,
			desc:   "<b>Cost:</b><br />125 wood - 6 land<br /><b>Gives: </b><br /> 200 max food"
		},
		woodShed: {
			cost: {
				wood:  100
			},
			amount: 0,
			max:    200,
			income: 0,
			type:   "wood",
			land:   6,
			desc:   "<b>Cost:</b><br />100 wood - 6 land<br /><b>Gives: </b><br /> 200 max wood"
		},
		stoneShed: {
			cost: {
				wood: 150
			},
			amount: 0,
			max:    200,
			income: 0,
			type:   "stone",
			land:   6,
			desc:   "<b>Cost:</b><br />150 wood - 6 land<br /><b>Gives: </b><br /> 200 max stone"
		},
		barracks: {
			cost: {
				wood:  10,
				stone: 30
			},
			amount: 0,
			max:    10,
			income: 0,
			type:   "barracks",
			land:   3,
			desc:   "<b>Cost:</b><br />10 wood - 30 stone - 3 land<br /><b>Gives: </b><br /> 10 max soldiers"
		},
		stable: {
			cost: {
				wood:  20,
				stone: 30
			},
			amount: 0,
			max:    10,
			income: 0,
			type:   "stable",
			land:   6,
			desc:   "<b>Cost:</b><br />20 wood - 30 stone - 6 land<br /><b>Gives: </b><br /> 10 max cavalery"
		},
		smith: {
			cost: {
				stone: 60
			},
			amount: 0,
			max:    1,
			income: 0,
			type:   "smith",
			land:   2,
			desc:   "<b>Cost:</b><br />60 stone - 2 land<br /><b>Gives: </b><br /> 1 max smith"
		},
		sawmill: {
			cost: {
				wood: 90
			},
			amount: 0,
			max:    1,
			income: 0,
			type:   "sawmill",
			land:   3,
			desc:   "<b>Cost:</b><br />90 wood - 3 land<br /><b>Gives: </b><br /> 1 max sawmiller"
		}
};
	
var gain = {
		food:       1,
		wood:       0.6,
		stone:      0.4
};

var workers = {
		civilians:    0,
		unemployed:   0,
		farmers:      0,
		woodcers:     0,
		miners:       0,
		armedFarmers: 0,
		smith:        0,
		sawmiller:    0,
		soldier:      0,
		cavalery:     0
	};

var currentAffinity = undefined;
var username = "Bananadana";
var safeHaven = 6000;

// specialResourceChances - lower is more chance
var sRC = {
		food:       1500,
		wood:       1500,
		stone:      1500,
		land:       5000
};

var x = document;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Functions:		////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Start:
function start() {
	gameloop();
	descriptions();
}


// Loop:
var second = 1;


// Generates a random number between $min and $max
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function ucfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function strtolower(string)
{
	return string.toLowerCase();
}




// Function that's used to get cookie information.
function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	
	return "";
} 



// This is the main loop, loops 20x per second.
// This makes the game run, everything is defined in this loop
function gameloop(){
	
	// Once per second
	if (second<20)
	{
	    second++;
	    
	} else {
		
	    second = 1;
	    execIncome();
	}
	
	// Functions that need to be checked / Executed
	resources();
	income();
	checkStuff();
	calculateAttack();
	
	// Re-Starts itself after 50ms (20x per second)
	setTimeout('gameloop()',50);
}



// Saves the game
function save()
{
	// Store all important HTML elements.
	var html = {
			tents: parseInt(x.getElementById("tentCount").innerHTML),
			huts:  parseInt(x.getElementById("hutCount").innerHTML),
			food:  parseInt(x.getElementById("foodShedCount").innerHTML),
			wood:  parseInt(x.getElementById("woodShedCount").innerHTML),
			stone: parseInt(x.getElementById("stoneShedCount").innerHTML)
	};
	
	// Prepare the save file
	var save = {
			res:       JSON.stringify(res),
			workers:   JSON.stringify(workers),
			buildings: JSON.stringify(buildings),
			html:      JSON.stringify(html),
			sh:        safeHaven,
			religion:  JSON.stringify(currentAffinity)
	};
	
	// Save the actual cookie
	document.cookie = "save=" + JSON.stringify(save) + ";";
	
	// Returns a "Saved" message to the user.
	alert("Saved");
}



// Loads the game
function load()
{
	// Retreive the cookie
	load_ = JSON.parse(getCookie("save"));
	
	// Load the resources, workers, buildings etc...
	res             = JSON.parse(load_.res);
	workers         = JSON.parse(load_.workers);
	buildings       = JSON.parse(load_.buildings);
	html            = JSON.parse(load_.html);
	safeHaven       = JSON.parse(load_.sh);
	currentAffinity = JSON.parse(load_.religion);
	
	// Sets the HTML elements correctly
	x.getElementById("tentCount").innerHTML      = html.tents;
	x.getElementById("hutCount").innerHTML       = html.huts;
	x.getElementById("foodShedCount").innerHTML  = html.food;
	x.getElementById("woodShedCount").innerHTML  = html.wood;
	x.getElementById("stoneShedCount").innerHTML = html.stone;
	
	alert("Loaded!");
}

// Function for displaying the costs and gains from buildings, based on the above declared variables
function descriptions(){
	for(var key in buildings){
		
	}
}

function showDesc(e, elementID)
{
    var desc = null;
    
    if (buildings[elementID] != undefined)
	desc = buildings[elementID].desc;
    else if (res[elementID] != undefined)
	desc = res[elementID].desc;
    else if (workers[elementID] != undefined)
	desc = workers[elementID].desc;
    else if (affinities[elementID] != undefined)
	desc = affinities[elementID].desc;
    
    x.getElementById("tooltip").innerHTML     = desc;
    x.getElementById("tooltip").style.display = "block";
    x.getElementById("tooltip").style.left    = (e.clientX + 5) + "px";
    x.getElementById("tooltip").style.top     = (e.clientY - 80) + "px";
}

function removeDesc()
{
		if (hidePopup)
			x.getElementById("tooltip").style.display = "none";
		else
			hidePopup = true;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 		Calculations:		////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function resources(){
    
	for(var key in res)
	{
		//console.log(key);
		x.getElementById(key+'Count').innerHTML=Math.round(res[key].amount*10)/10;
		x.getElementById(key+'Barfull').style.width=(res[key].amount/res[key].max*100)+'%';
		x.getElementById(key+"Max").innerHTML=res[key].max;
  }

	for(var i = 0; i < workers.farmers; i++)
		if(getRandomInt(0, sRC.food) == 0 && res.skins.amount < res.skins.max)
			res.skins.amount++;

	for(var j = 0; j < workers.woodcers; j++)
		if(getRandomInt(0, sRC.wood) == 0 && res.herbs.amount < res.herbs.max)
			res.herbs.amount++;
	
	for(var j = 0; j < workers.woodcers; j++)
		if(getRandomInt(0, sRC.land) == 0)
			res.land.max++;

	for(var k = 0; k < workers.miners; k++ && res.ore.amount < res.ore.max)
		if(getRandomInt(0, sRC.stone) == 0)
			res.ore.amount++;
	
    res.houses.amount = workers.civilians;
    x.getElementById('civCount').innerHTML=workers.civilians;
    x.getElementById('unempCount').innerHTML=workers.unemployed;
    x.getElementById('farmersCount').innerHTML=workers.farmers;
    x.getElementById('woodcersCount').innerHTML=workers.woodcers;
    x.getElementById('minersCount').innerHTML=workers.miners;
    x.getElementById('armedFarmersCount').innerHTML=workers.armedFarmers;
}



// Check things, general bug fixing and prevention, other shenanigans
function checkStuff()
{
	// Resources that have not yet been unlocked are hidden/displayed here when asked.
	for(var hiddenThing in hiddenRes)
	{
		if(hiddenRes[hiddenThing] != undefined && hiddenRes[hiddenThing])
			x.getElementById(hiddenThing).style.display = "none";
		else
			x.getElementById(hiddenThing).style.display = "block";
	}
	
	// Set the username, size and affinity in the header
	if(currentAffinity == undefined){
		x.getElementById("civLevel").innerHTML = "Small Camp";
		x.getElementById("usernameHeader").innerHTML = username;
	}
	else{
		x.getElementById("civLevel").innerHTML = "Small " + currentAffinity.full_name + " Camp";
		x.getElementById("usernameHeader").innerHTML = username;
	}
}



// Calculate income
function income()
{
    // workers.civilians impact on food
    res.food.income = workers.civilians*-0.6;
    
    //workers.farmers
    res.food.income += workers.farmers*gain.food;
	incomeWrite('foodGain', "food");
	
    
	//Woodcutters
	res.wood.income = workers.woodcers*gain.wood;
	incomeWrite('woodGain', "wood");
	
	
	//Woodcutters
	res.stone.income = workers.miners*gain.stone;
	incomeWrite('stoneGain', "stone");
    
	colorGain();
}



// Calculates when to attack and then attacks with the calculated amount
function calculateAttack()
{
	// Is the player still protected?
	safeHaven--;
	
	if(safeHaven > 0 || true)
		return false;
	
	// If not calculate whether to attack
	var ticksSinceSafeHaven = -safeHaven;
	
	if(getRandomInt(0, 6000) == 0)
		randomAttack(parseInt(((ticksSinceSafeHaven / 5000) + 1) + (workers.civilians / getRandomInt(4, 7))));
}



// Works out the attack... removes the lost army and workers.
function randomAttack(amount)
{
	alert("ATTAKKU with " + amount + " Barbarians!");
	
	// Make the armed farmers and barbarians fight
	if(workers.armedFarmers > 0)
	{
		var barbarians = amount - workers.armedFarmers;
		workers.armedFarmers -= amount;
		workers.civilians -= amount;
		res.houses.amount -= amount;
		amount = barbarians;
	}
	
	// Fix amounts
	if(workers.armedFarmers < 0)
	{
		workers.civilians += -workers.armedFarmers;
		res.houses.amount += -workers.armedFarmers;
		workers.armedFarmers = 0;
	}
	
	if(amount < 0)
		amount = 0;
	
	// Fight the civilians with the remaining barbarians.
	kill(amount * 2);
}



// Adds a civilian 
function addCiv(amount){
	
	// If there's enough food and room in the houses
    if ( amount*20 <= res.food.amount && workers.civilians + amount <= res.houses.max) 
    {
    	// Reduce food. Add civilian, unemployed and fill a house.
			res.food.amount -= amount*20;
			workers.civilians += amount;
			workers.unemployed += amount;
			res.houses.amount += amount;
    }
}



// Chooses the affinity of the village
function chooseAffinity(affinity)
{
	if(currentAffinity == undefined && affinities[affinity] != undefined)
	{
		currentAffinity = affinities[affinity];
		x.getElementById('affinityMenu0').style.display = "none";
		x.getElementById('religionMenu0').style.display = "block";
		hiddenRes.faith = false;
		religionTree = currentAffinity.religion;
		updateReligionTree();
		updateAffinityBuildings();
	}
}



function updateReligionTree()
{
	
}


function updateAffinityBuildings()
{
	var buff = "";
	var boolthingy = false;
	
	for(var category in currentAffinity.buildings)
	{
		if(!boolthingy)
			buff += "<div class='buildBlock left'>";
		else
			buff += "<div class='buildBlock right'>";
		
		boolthingy != boolthingy;
		
		buff += "<span class='buildTitle'>" + ucfirst(strtolower(category)) + "</span>";
		
		for(var key in currentAffinity.buildings[category])
		{
			buff += "<div class='block'><span>" + ucfirst(strtolower(key)) + ":<a id='" + key + "Count'>0</a></span></div>";
			buff += "<div class='add free' onclick='constructAffinity(\"" + category + "\", \"" + key + "\", 1)'>+1</div>";
			buff += "<div class='add free' onclick='constructAffinity(\"" + category + "\", \"" + key + "\", 10)'>+10</div>";
			buff += "<div class='add free' onclick='constructAffinity(\"" + category + "\", \"" + key + "\", 100)'>+100</div>";
			buff += "<div class='add free' onclick='constructAffinity(\"" + category + "\", \"" + key + "\", 1000)'>+1000</div>";
		}
	}
	x.getElementById("affinityBuildings").innerHTML = buff;
}


function updateBuildings()
{
	
}


function updateWorkers()
{
	
}



// Assigns a civilian to a certain task
function assignCiv(place, amount){
	
	// If this task exists
	if (workers[place] != undefined)
	{
		if (amount < 0 && -amount > workers[place])
			amount = -workers[place];
		else if (amount > 0 && amount > workers['unemployed'])
			amount = workers['unemployed'];
		
		workers[place] += amount;
		workers['unemployed'] -= amount;
	}
}



// Calculates income
function execIncome() {
	
	// Loop through income types
	for(var key in res)
	{
		// If there's any room left add the income
		if (res[key].amount + res[key].income <= res[key].max)
			res[key].amount = res[key].amount + res[key].income;
		else
			res[key].amount = res[key].max;
    }
	
	// Kill civilians if the food's gone
	if (res.food.amount <= 0)
	{
		res.food.amount = 0;
		kill((Math.ceil(res.food.income/5)-1)*-1);
	}
}



// How to kill people
function kill(amount){
	
	// Reduce housing
	res.houses.amount -= amount;
	
	if(res.houses.amount < 0)
		res.houses.amount = 0;
	
	// Set all to 0 if there are more deaths than there are civilians.
	if(workers.civilians <= amount)
	{
		for(var key in workers)
			workers[key] = 0;
		
		return;
		
	} else {
		
		workers.civilians -= amount;
	}
	
	// Kill off unemployed people first
	if(amount > workers.unemployed)
	{
		workers.unemployed = 0;
		amount -= workers.unemployed;
		
		// Loop through and kill all kinds of workers equally
		while(amount > 0)
		{
			for(var key in workers)
			{
				if(amount > 0 && key!='unemployed' && key!='civilians' && workers[key] > 0)
				{
					workers[key]--;
					amount--;
				}
			}
		}
		
	} else {
		
		workers.unemployed -= amount;
		return;
	}
}



// Build things (Building ID in array, amount of buildings that need to be constructed)
function construct(buildingType, amount)
{
	// Is there enough land?
	if((buildings[buildingType].land * amount) + res.land.amount > res.land.max)
		return false;
	
	// Are there enough resources?
	for(var key in buildings[buildingType].cost)
		if(res[key].amount < buildings[buildingType].cost[key] * amount)
			return false;
	
	// Remove the resources
	for(var key in buildings[buildingType].cost)
		res[key].amount -= buildings[buildingType].cost[key] * amount;
	
	onConstruct(buildingType);
	
	// Add the resources that the building adds
	res[buildings[buildingType].type].amount  +=  buildings[buildingType].amount * amount;
	res[buildings[buildingType].type].max     +=  buildings[buildingType].max * amount;
	res[buildings[buildingType].type].income  +=  buildings[buildingType].income * amount;
	x.getElementById(buildingType + "Count").innerHTML = parseInt(x.getElementById(buildingType + "Count").innerHTML) + amount;
	
	// Add the amount of used land.
	res.land.amount += buildings[buildingType].land * amount;
	
	return true;
}


function onConstruct(buildingType)
{
    if (buildingType == "smith") {
      hiddenTask.smith = false;
      hiddenRes.smith = false;
      hiddenRes.iron = false;
    }
}


function constructAffinity(category, buildingType, amount)
{
	// Is there enough land?
	if((currentAffinity.buildings[category][buildingType].land * amount) + res.land.amount > res.land.max)
		return false;
	
	// Are there enough resources?
	for(var key in currentAffinity.buildings[category][buildingType].cost)
		if(res[key].amount < currentAffinity.buildings[category][buildingType].cost[key] * amount)
			return false;
	
	// Remove the resources
	for(var key in currentAffinity.buildings[category][buildingType].cost)
		res[key].amount -= currentAffinity.buildings[category][buildingType].cost[key] * amount;
	
	// Add the resources that the building adds
	res[currentAffinity.buildings[category][buildingType].type].amount            +=   currentAffinity.buildings[category][buildingType].amount * amount;
	res[currentAffinity.buildings[category][buildingType].type].max               +=   currentAffinity.buildings[category][buildingType].max * amount;
	res[currentAffinity.buildings[category][buildingType].type].income            +=   currentAffinity.buildings[category][buildingType].income * amount;
	x.getElementById(buildingType + "Count").innerHTML   =   parseInt(x.getElementById(buildingType + "Count").innerHTML) + amount;
	
	// Add the amount of used land.
	res.land.amount += currentAffinity.buildings[category][buildingType].land * amount;
	
	return true;
}



// Add resources by clicking
function clicky(type)
{
	if(gain[type] != undefined && res[type].amount < res[type].max)
		res[type].amount += gain[type];
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 		Generate HTML:		////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Set the colours for the income in the right menu
function colorGain(){
    
	// Loop through the array, check if the income indicators need a new lick of paint
	for(var key in res)
	{
		count = gain[key];
		
		if(key != undefined && count != undefined)
		{
			if (res[key].income < 0) { x.getElementById(key+'Gain').style.color='#F55'; }
		    if (res[key].income == 0) { x.getElementById(key+'Gain').style.color='#FFF'; }
		    if (res[key].income > 0) { x.getElementById(key+'Gain').style.color='#0F0'; }
		}
	}
}



// Writes away the income of a resource type
function incomeWrite(id, arrayLocation) {
	x.getElementById(id).innerHTML = Math.round(res[arrayLocation].income*10)/10+'/s';
}
