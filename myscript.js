$(document).ready(function(){
    $('#cont-2').hide()
    $('#cont-3').hide()
    $('#cont-4').hide()
    $('#cont-5').hide()
    $('#btn-1').click(function(){
        $('#cont-1').hide(function(){
             $("#cont-2").fadeIn(200)
             $('header').css({
                height: 'auto',
             })
        })
    })
    $("#btn-back").click(function(){
        $('#cont-2').hide(function(){
            $("#cont-1").fadeIn(200)
       })
       $('header').css({
        height: '100vh',
     })
     
    })
    $("#btn-next").click(function(){
        $("#cont-1, #cont-2").hide(function(){
            $("#cont-3").fadeIn(200)
        })

    })
    $("#btn-back-1").click(function(){
        $('#cont-3').hide(function(){
            $("#cont-2").fadeIn(200)
       })
    })
    $("#btn-next-1").click(function(){
        $('#cont-3').hide(function(){
            $("#cont-4").fadeIn(200)
       })
    })
    $("#back-1").click(function(){
        $('#cont-4').hide(function(){
            $("#cont-3").fadeIn(200)
       })
    })
    $("#back-2").click(function(){
        $('#cont-5').hide(function(){
            $("#cont-4").fadeIn(200)
       })
    })
    $('#next-1').click(function(){
        $('#cont-4').hide(function(){
            $("#cont-5").fadeIn(200)
        })
    })
    var $mainCont = $("#main");
    $mainCont.hide()
    $(".overlay").on('click', function(){
        
        $mainCont.show()
        var $imgurl = $(this).siblings('img').attr('src');
        $('#mainImg').attr('src', $imgurl).fadeIn(200)
      })
      $('.close').click(function(){
        $mainCont.fadeOut(200)
      })

})