for(coaster in coasterData){
	$("#coasterList").append('<a class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">'+coasterData[coaster]['Rollercoaster Name']+'</h5><div class="switch"><input name="'+coasterData[coaster]['Rollercoaster Name']+'" type="checkbox" onclick="addCoaster(this)"><label for="cmn-toggle-4"></label></div></div></a>');
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
