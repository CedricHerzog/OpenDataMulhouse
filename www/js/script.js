var data; // a global

svg=d3.select('body')
	.select('svg')
	.attr("width", window.innerWidth)
	.attr("height", window.innerHeight);

d3.json("arbres.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  visualisation(data);
});

function visualisation (data) {
	svg.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.attr("cx", function(d){
		return (d.LAT_WGS84-47.7)*window.innerWidth*11.25-100;
	})
	.attr("cy", function(d){
		return (d.LON_WGS84-7.20)*window.innerHeight*11.25-825;
	})
	.attr("r", 1)
	.attr("fill", "green");
}
