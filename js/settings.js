for(coaster in coasterData){
	$("#coasterList").append('<div class="list-group"><a class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">'+coasterData[coaster]['Rollercoaster Name']+'</h5><small><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></small></div><input type="range" min="0" max="120" value="60" class="slider" id="'+coasterData[coaster]['Rollercoaster Name Short']+'" step="5" oninput="sliderChange(this)"><p id="'+coasterData[coaster]['Rollercoaster Name Short']+'-Number">60 Minutes</p></a></div>');
}


var selectedCoasters = []

function addCoaster(data){
	if (data.checked == true){
		selectedCoasters.push({
			coaster: data.name
		})
	}
	if (data.checked == false){
		for(coaster in selectedCoasters){
			if(selectedCoasters[coaster]['coaster'] == data.name){
				delete selectedCoasters[coaster]
			}
		}
	}
}

function sliderChange(coaster){
	$("#"+coaster.id+"-Number").text(coaster.value+' minutes');
}
