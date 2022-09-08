
/*<!-- =================  start   =========================== -->*/

$(document).ready(function(){
	$(".hidden").hide();
    $(".hider").click(function(){
        $(this).parent("td").parent("tr").next(".hidden").slideToggle("slow").siblings(".hidden:visible")
        .slideUp("slow");
        return false;
    });
    
});

/*<!-- =================  end   =========================== -->*/
	


