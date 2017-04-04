//generowanie banera
var banner_generating = (function(){
    
    var template = '<div class="kolumna">'+
                        '<div class="baner_grid">'+
                            '<img class="napis" src="img/napis_maly.png" />'+
                        '</div>'+
                        '<div class="baner_grid shorter">'+
                            '<img class="znaczek" src="img/znaczek.png" />'+
                        '</div>'+
                        '<div class="baner_grid">'+
                            '<img class="napis" src="img/napis_maly.png" />'+
                        '</div>'+
                        '<div class="baner_grid shorter">'+
                            '<img class="znaczek" src="img/znaczek.png" />'+
                        '</div>'+
                        '<div class="baner_grid">'+
                            '<img class="napis" src="img/napis_maly.png" />'+
                        '</div>'+
                    '</div>';
    
    var template2 = '<div class="kolumna">'+
                        '<div class="baner_grid shorter">'+
                            '<img class="znaczek" src="img/znaczek.png" />'+
                        '</div>'+
                        '<div class="baner_grid">'+
                            '<img class="napis" src="img/napis_maly.png" />'+
                        '</div>'+
                        '<div class="baner_grid shorter">'+
                            '<img class="znaczek" src="img/znaczek.png" />'+
                        '</div>'+
                        '<div class="baner_grid">'+
                            '<img class="napis" src="img/napis_maly.png" />'+
                        '</div>'+
                        '<div class="baner_grid shorter">'+
                            '<img class="znaczek" src="img/znaczek.png" />'+
                        '</div>'+
                    '</div>';
    
    var stop_shake;
    
    //cache DOM
    var baner = $('#baner'),
        logo = baner.find('#logo');
    
    //init and bind events
    generatre_banner();
    $(window).resize(shake_logo);
    $(window).scroll(function(){ clearTimeout(stop_shake); shake_logo(); });
    
    //functions
    function generatre_banner()
    {
        var doc_width = $(window).width();
        var i = 0;
        var columns = Math.ceil(doc_width / 100) + 5;
        
        if(columns <= 9)
        {
            columns = 10;
        }
        
        logo.addClass('shake');
        
        for(var k = 0; k < columns; k++)
        {   if(k % 2 == 0)
            {
                baner.append(template);   
            }
            else
            {
                baner.append(template2);
            }
        }
        
        setTimeout(function(){
            
            var kolumna;
            
            var generate = setInterval(function(){
            
                if(i < columns)
                {       
                    kolumna = $('.kolumna:nth-child('+ (i+1) +')');
                    kolumna.children().css('visibility', 'visible').hide().fadeIn(200);
                }
                else
                {
                    clearInterval(generate);
                    setTimeout(function(){ logo.removeClass('shake'); }, 700);
                }

                i++;

            }, 100);   
            
        }, 100);
    } 
    
    function shake_logo()
    {   
        if(!logo.hasClass('shake'))
        {
            logo.addClass('shake');   
        }
        
        stop_shake = setTimeout(function(){
            
            if(logo.hasClass('shake'))
            {
                logo.removeClass('shake');   
            }
            
        }, 2000);
    }
    
})();