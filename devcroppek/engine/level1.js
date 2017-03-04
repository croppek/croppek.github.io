function level1_objects(player_pos, key)
{
    if(player_pos['left'] < 450)
    {
        //lewa część poziomu
        if(player_pos['left'] < 350 && player_pos['top'] < 432 && player_pos['top'] > 420 && key == 87)
        {
            $('#player').stop();
            $('#player').css({top: "430px"});
        }
        else if(player_pos['left'] < 352 && player_pos['top'] < 430 && player_pos['top'] > 100 && key == 65)
        {
            $('#player').stop();
            $('#player').css({left: "350px"});
        }
        else if(player_pos['left'] < 350 && player_pos['top'] > 98 && player_pos['top'] < 160 && key == 83)
        {
            $('#player').stop();
            $('#player').css({top: "100px"});
        }
    }
    
    //prawa część poziomu
    if(player_pos['left'] > 450)
    {
        //prawa część poziomu poniżej 160px
        if(player_pos['top'] > 160)
        {
            //dolny obiekt nad tablicą
            if(player_pos['left'] > 450 && player_pos['top'] < 352 && player_pos['top'] > 340 && key == 87)
            {
                $('#player').stop();
                $('#player').css({top: "350px"});
            }
            else if(player_pos['left'] > 447 && player_pos['top'] < 350 && player_pos['top'] > 210 && key == 68)
            {
                $('#player').stop();
                $('#player').css({left: "450px"});
            }
            else if(player_pos['left'] > 450 && player_pos['top'] < 350 && player_pos['top'] > 210 && key == 83)
            {
                $('#player').stop();
                $('#player').css({top: "210px"});
            }
            
            //Tablica z informacjami o grze
            if(player_pos['left'] > 678 && player_pos['top'] < 500 && player_pos['top'] >= 350 && key == 68)
            {   
                $('#player').stop();
                $('#player').css({left: "680px"});
            }
        }
        else
        {
            //górny obiekt (lewy)
            if(player_pos['left'] > 447 && player_pos['left'] < 600 && player_pos['top'] < 150 && key == 68)
            {
                $('#player').stop();
                $('#player').css({left: "450px"});
            }
            else if(player_pos['left'] > 450 && player_pos['top'] < 152 && player_pos['left'] < 630 && key == 87)
            {
                $('#player').stop();
                $('#player').css({top: "150px"});
            }
            else if(player_pos['left'] > 450 && player_pos['left'] < 632 && player_pos['top'] < 150 && key == 65)
            {
                $('#player').stop();
                $('#player').css({left: "630px"});
            }

            //górny obiekt (prawy)
            if(player_pos['left'] > 718 && player_pos['top'] < 150 && key == 68)
            {
                $('#player').stop();
                $('#player').css({left: "720px"});
            }
            else if(player_pos['left'] > 720 && player_pos['top'] < 152 && key == 87)
            {
                $('#player').stop();
                $('#player').css({top: "150px"});
            }
            
            //komputer z formularzem
            if(player_pos['left'] > 610 && player_pos['left'] < 730 && player_pos['top'] < 82 && key == 87)
            {
                $('#player').stop();
                $('#player').css({top: "80px"});
            }
        }
    }
    
    //Wyświetlanie tablicy z informacjami o grze
    if(player_pos['left'] > 660 && player_pos['top'] > 340)
    {
        if($('#informacje_o_grze').css('display') == 'none')
        {
            $('#informacje_o_grze').fadeIn(250);
        }
    }
    else
    {
        if($('#informacje_o_grze').css('display') == 'block')
        {
            $('#informacje_o_grze').fadeOut(250);
        }
    }
    
    //Wyświetlanie formularza kontaktowego
    if(player_pos['left'] > 610 && player_pos['left'] < 735 && player_pos['top'] <= 80 && key == 87)
    {
        if($('#formularz_kontaktowy').css('display') == 'none')
        {
            $('#formularz_kontaktowy').slideDown(500); 
        }
    }
    
    //Przejście do jaskini (level2)
    if(player_pos['left'] < 65 && player_pos['top'] < 135 && key == 65)
    {
        $('#player').stop();
        
        $('#player').hide();
        
        $('#level1').fadeOut(500, function(){
            
            $('body').css('background-image', 'url("IMG/bg/bg_level2.jpg")');
            $('#player').css({top: "430px"});
            $('#player').css({left: "170px"});
            $('#level2').fadeIn(500, function(){

                $('#player').show(250);

            });
        });
    }
}