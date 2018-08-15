for(coaster in coasterData){
	$("#coasterList").append('<a class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">'+coasterData[coaster]['Rollercoaster Name']+'</h5><small><label class="switch"><input type="checkbox"><span class="slider round"></span></label></small></div></a>');
}