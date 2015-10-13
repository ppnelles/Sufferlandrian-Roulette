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
    	$('#painshake').text(video);
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