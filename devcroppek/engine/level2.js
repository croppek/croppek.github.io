var odpowiedz_zadanie = '';
var ma_klucz = false;
var zadanie_ok = false;

function level2_objects(player_pos, key)
{
    //lewa część poziomu
    if(player_pos['left'] <= 250)
    {
        //lewa ściana
        if(player_pos['left'] < 102 && key == 65)
        {
            $('#player').stop();
            $('#player').css({left: "100px"});
        }
        //klapa do przejścia do lvl3
        else if(player_pos['left'] < 265 && player_pos['left'] >= 100 && player_pos['top'] < 107 && key == 87)
        {
            if(ma_klucz == true)
            {
                $('#klapa_lvl2').css('background-image', 'url("IMG/levels/klapaotwarta.png")');
                
                $('#player').stop();
                
                $('#player').hide();

                $('#level2').fadeOut(500, function(){
                    
                    $('body').css('background-image', 'url("IMG/bg/bg_level3.jpg")');
                    $('#player').css({top: "225px"});
                    $('#player').css({left: "50px"});
                    $('#level3').fadeIn(500, function(){

                        $('#player').show(250);

                    });
                });
            }
            else
            {
                $('#player').stop();
                $('#player').css({top: "105px"});
            }
        }
    }
    
    //prawa część poziomu
    if(player_pos['left'] > 245)
    {
        //prawa część poziomu poniżej 150px
        if(player_pos['top'] > 150)
        {
            //ścianay dookoła pokoju
            if(player_pos['left'] > 248 && player_pos['left'] < 400 && player_pos['top'] > 190 && key == 68)
            {
                $('#player').stop();
                $('#player').css({left: "250px"});
            }
            else if(player_pos['left'] > 250 && player_pos['left'] < 700 && player_pos['top'] > 188 && player_pos['top'] < 205 && key == 83)
            {
                $('#player').stop();
                $('#player').css({top: "190px"});
            }
            else if(player_pos['left'] > 750 && player_pos['top'] > 188 && key == 83)
            {
                $('#player').stop();
                $('#player').css({top: "190px"});
            }
            else if(player_pos['left'] >= 500 && player_pos['left'] <= 750 && player_pos['top'] > 388 && key == 83)
            {
                $('#player').stop();
                $('#player').css({top: "390px"});
            }
            else if(player_pos['left'] > 748 && player_pos['top'] > 190 && key == 68)
            {
                $('#player').stop();
                $('#player').css({left: "750px"});
            }
            else if(player_pos['left'] < 502 && player_pos['left'] > 480 && player_pos['top'] > 190 && key == 65)
            {
                $('#player').stop();
                $('#player').css({left: "500px"});
            }
            else if(player_pos['left'] < 702 && player_pos['left'] > 680 && player_pos['top'] > 190 && player_pos['top'] < 260 && key == 65)
            {
                $('#player').stop();
                $('#player').css({left: "700px"});
            }
            else if(player_pos['left'] < 700 && player_pos['left'] >= 500 && player_pos['top'] > 210 && player_pos['top'] < 262 && key == 87)
            {
                $('#player').stop();
                $('#player').css({top: "260px"});
            }
            
            //drzwi do pokoju
            if(player_pos['left'] >= 700 && player_pos['left'] <= 750 && player_pos['top'] > 188 && player_pos['top'] < 205 && key == 83 && $('#drzwi_do_pokoju').css('display') == 'block')
            {
                $('#player').stop();
                $('#player').css({top: "195px"});
            }
            
            //klucz do klapy
            if(player_pos['left'] > 580 && player_pos['left'] < 670 && player_pos['top'] > 280 && player_pos['top'] < 370 && $('#drzwi_do_pokoju').css('display') == 'none')
            {
                $('#klucz_do_klapy').fadeOut(150);
                ma_klucz = true;
            }
        }
        else
        {
            //górna ściana
            if(player_pos['left'] > 248 && player_pos['top'] < 120 && key == 68)
            {
                $('#player').stop();
                $('#player').css({left: "250px"});
            }
            else if(player_pos['left'] > 250 && player_pos['top'] < 122 && key == 87)
            {
                $('#player').stop();
                $('#player').css({top: "120px"});
            }
        }
    }
    
    //drzwi do pokoju
    if(player_pos['left'] > 695 && player_pos['left'] < 805 && player_pos['top'] > 170 && player_pos['top'] < 205 && zadanie_ok == false)
    {
        if($('#kod_do_pokoju').css('display') == 'none')
        {
            var random_zadanie = Math.floor((Math.random() * 10) + 1);
            var zadanie = '';
            
            if(random_zadanie == 1)
            {
                zadanie = '2 * 2 * 3';
                odpowiedz_zadanie = 12;
            }
            else if(random_zadanie == 2)
            {
                zadanie = '5 - 3 * 2 + 3';
                odpowiedz_zadanie = 2;
            }
            else if(random_zadanie == 3)
            {
                zadanie = '4 + 4 - 2 * 2';
                odpowiedz_zadanie = 4;
            }
            else if(random_zadanie == 4)
            {
                zadanie = '3 * 4 + 5';
                odpowiedz_zadanie = 17;
            }
            else if(random_zadanie == 5)
            {
                zadanie = '2 * 1 * 2';
                odpowiedz_zadanie = 4;
            }
            else if(random_zadanie == 6)
            {
                zadanie = '40 * 1 - 12';
                odpowiedz_zadanie = 28;
            }
            else if(random_zadanie == 7)
            {
                zadanie = '5 * 5 * 5';
                odpowiedz_zadanie = 125;
            }
            else if(random_zadanie == 8)
            {
                zadanie = '3 - 4 + 10';
                odpowiedz_zadanie = 9;
            }
            else if(random_zadanie == 9)
            {
                zadanie = '9 * 2 + 2';
                odpowiedz_zadanie = 20;
            }
            else if(random_zadanie == 10)
            {
                zadanie = '4 + 4 * 2';
                odpowiedz_zadanie = 12;
            }
            
            $('#zadanie_matematyczne').empty().append(zadanie);
            $('#kod_do_pokoju').fadeIn(250);
        }
    }
    else
    {
        if($('#kod_do_pokoju').css('display') == 'block')
        {
            $('#kod_do_pokoju').fadeOut(250);
        }
    }
    
    //powrót do level1
    if(player_pos['left'] <= 250 && player_pos['left'] >= 100 && player_pos['top'] > 440 && key == 83)
    {
        $('#player').stop();
        
        $('#player').hide();
            
        $('#level2').fadeOut(500, function(){
            
            $('body').css('background-image', 'url("IMG/bg/bg_level1.jpg")');
            $('#player').css({top: "45px"});
            $('#player').css({left: "130px"});
            $('#level1').fadeIn(500, function(){

                $('#player').show(250);

            });
        });
    }
}

var btn_clicked = false;

$('#zadanie_btn').unbind('click');
$('#zadanie_btn').click(function(){
    
    if(btn_clicked == false)
    {
        btn_clicked = true;
        
        var odpowiedz_zadanie_user = $('#zadanie_input').val();

        if(odpowiedz_zadanie_user == odpowiedz_zadanie)
        {
            zadanie_ok = true;

            $('#kod_do_pokoju').fadeOut(250, function(){
                $('#drzwi_do_pokoju').fadeOut(500); 
            });
        }
        else
        {
            $('#zadanie_input').val('');
            $('#kod_do_pokoju').animate({left: "+=20px"}, 100, 'linear');
            $('#kod_do_pokoju').animate({left: "-=40px"}, 100, 'linear');
            $('#kod_do_pokoju').animate({left: "+=20px"}, 100, 'linear');
        }
        
        setTimeout(function(){
            
           btn_clicked = false;
            
        }, 500);
    }
    
    
});