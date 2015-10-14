$(window).load(function() {
    if (localStorage["videos"] != null) {
        var stored = JSON.parse(localStorage["videos"]);

        for (i=0; i!=stored.length;i++) {
            var checkbox = $("input[type='checkbox'][value='"+stored[i]+"']");
            checkbox.attr("checked","checked");
        }
    }

});

$(".randomVid").click(function(){
    var videos = $("input:checkbox:checked").map(function(){
        return this.value;
    }).toArray();
        
    var video = videos[Math.floor(Math.random()*videos.length)];

    if (video != null) {
	    var commands = $("#commands li").map(function() {
			return $(this).html().replace('-painshake-','<b id="painshake">'+video+'</b>');	    
	    });
		var command = commands[Math.floor(Math.random()*commands.length)];
	    
	    
    	$('#results h1').html(command);
        $('body').attr('class','result');
    }
    else {
    	$('body').attr('class','error');
    }

    localStorage["videos"] = JSON.stringify(videos);
  })


$(".reset").click(function(){
    $('body').attr('class','choose');
})

$("#selectall").change(function(){
    $("input").prop('checked', $(this).prop("checked"));
});