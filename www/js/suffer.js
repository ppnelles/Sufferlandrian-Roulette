$(window).load(function() {
    if (localStorage["videos"] != null) {
        var stored = JSON.parse(localStorage["videos"]);

        for (i=0; i!=stored.length;i++) {
            var checkbox = $("li input[type='checkbox'][value='"+stored[i]+"']");
            checkbox.attr("checked","checked");
        }
    }

});

$(".randomVid").click(function(){
    var videos = $("input:checkbox:checked").map(function(){
        return this.value;
    }).toArray();
        
    var orders = ["GvA orders you to do -painshake-", "Do -painshake- or get flogged by minions", "Fluffy is hungry, do -painshake- or else", "Don't be a wretched, do -painshake-", "Do -painshake- and beat your inner couchlandrian", "Minions ask nicely: Do -painshake- or get flogged", "A couchlandrian says that you can't do -painshake- prove him wrong !", "Do -painshake- and suffer, suffer, suffer", "No donuts for you. -painshake- instead !", "Beat your own ass with -painshake- or they'll kick it later..."];
    
    var video = videos[Math.floor(Math.random()*videos.length)];
    var order = orders[Math.floor(Math.random()*orders.length)]; 
    var result = order.replace('-painshake-','<b id="painshake">'+video+'</b>');

    if (video != null) {
    	$('#results h1').html(result);
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