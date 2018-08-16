var coasterData = [{"Latitude":41.479863,"Longitude":-82.682405,"Rollercoaster Name":"Blue Streak","Wait Time":"5"},{"Latitude":41.48475,"Longitude":-82.690383,"Rollercoaster Name":"Cedar Creek Mine Ride","Wait Time":"0"},{"Latitude":41.483617,"Longitude":-82.68533,"Rollercoaster Name":"Corkscrew","Wait Time":"5"},{"Latitude":41.480925,"Longitude":-82.679165,"Rollercoaster Name":"GateKeeper","Wait Time":"15"},{"Latitude":41.48635,"Longitude":-82.689561,"Rollercoaster Name":"Gemini","Wait Time":"0"},{"Latitude":41.48211,"Longitude":-82.685177,"Rollercoaster Name":"Iron Dragon","Wait Time":"30"},{"Latitude":41.485406,"Longitude":-82.686053,"Rollercoaster Name":"Magnum XL-200","Wait Time":"5"},{"Latitude":41.485242,"Longitude":-82.692557,"Rollercoaster Name":"Maverick","Wait Time":"90"},{"Latitude":41.481612,"Longitude":-82.686674,"Rollercoaster Name":"Millennium Force","Wait Time":"60"},{"Latitude":41.47943,"Longitude":-82.681598,"Rollercoaster Name":"Raptor","Wait Time":"0"},{"Latitude":41.482739,"Longitude":-82.686784,"Rollercoaster Name":"Rougarou","Wait Time":"45"},{"Latitude":41.48283,"Longitude":-82.685324,"Rollercoaster Name":"Top Thrill Dragster","Wait Time":"15"},{"Latitude":41.482012,"Longitude":-82.679817,"Rollercoaster Name":"Wicked Twister","Wait Time":"0"},{"Latitude":41.480122,"Longitude":-82.682965,"Rollercoaster Name":"Valravn","Wait Time":"60"},{"Latitude":41.480917,"Longitude":-82.680117,"Rollercoaster Name":"MaXair","Wait Time":"15"},{"Latitude":41.482765,"Longitude":-82.684581,"Rollercoaster Name":"Power Tower","Wait Time":"15"},{"Latitude":41.484364,"Longitude":-82.690766,"Rollercoaster Name":"Skyhawk","Wait Time":"0"},{"Latitude":41.485726,"Longitude":-82.688363,"Rollercoaster Name":"Pipe Scream","Wait Time":"5"},{"Latitude":41.486171,"Longitude":-82.693173,"Rollercoaster Name":"Steel Vengeance","Wait Time":"120"}];

coasterData.sort(function(a, b){
    if(a['Rollercoaster Name'] < b['Rollercoaster Name']) return -1;
    if(a['Rollercoaster Name']> b['Rollercoaster Name']) return 1;
    return 0;
})

for (coaster in coasterData){
	var columns = [];
	var properties = coasterData[coaster]
	for(prop in properties){
		if (prop != 'Latitude' && prop != 'Longitude'){
			columns.push({
				data: prop,
				title: prop
			})
		}
	}
}

$(document).ready(function() {
    $('#example').DataTable( {
        data: coasterData,
        columns: columns
    } );
} );
$(function() {
  $(".expand").on( "click", function() {
    // $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});