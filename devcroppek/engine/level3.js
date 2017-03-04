var is_dead = false;
var open1 = false;
var open2 = false;
var wygenerowano = false;

function level3_objects(player_pos, key)
{
    if(is_dead == false)
    {
        //śmierć po wejściu w lave
        if((player_pos['top'] < 180 || player_pos['top'] > 270) && is_dead == false)
        {
            is_dead = true;

            dead();
        }

        //śmierć po wpadnięciu w lave (chodnik)
        if((player_pos['left'] > 350 && player_pos['left'] < 450 && open1 == false) || (player_pos['left'] > 550 && player_pos['left'] < 650 && open2 == false) && is_dead == false)
        {
            is_dead = true;

            dead();
        }
        
        //podniesienie zwoju
        if(player_pos['left'] > 770 && player_pos['top'] > 180 && player_pos['top'] < 270 && is_dead == false)
        {
            if(wygenerowano == false)
            {
                wygenerowano = true;
                
                var znaki = ['A','C','E','F','H','J','K','M','5','8','N','P','R','T','U','V','W','X','Y','4','9','3','7'];

                for (var i = 0; i < 6; i++) 
                {
                    var random_char = getRandomInt(0, (znaki.length - 1));
                    kod_formularza += znaki[random_char];
                }

                $('#kod_span').append(kod_formularza); 
            }
            
            $('#kod_do_formularza').fadeIn(250);
            
        }
        else
        {
            $('#kod_do_formularza').fadeOut(250);
        }
        
        //podest ze zwojem
        if(player_pos['left'] > 788 && player_pos['top'] > 180 && player_pos['top'] < 270 && is_dead == false && key == 68)
        {
            $('#player').stop();
            $('#player').css({left: "790px"});
        }

        //powrót do level2
        if(player_pos['left'] < 10 && player_pos['top'] > 180 && player_pos['top'] < 270 && key == 65)
        {   
            is_dead = true;

            $('#player').hide();

            $('#level3').fadeOut(500, function(){
                
                $('body').css('background-image', 'url("IMG/bg/bg_level2.jpg")');
                $('#player').css({top: "120px"});
                $('#player').css({left: "170px"});
                $('#level2').fadeIn(500, function(){

                    $('#player').show(250);
                    is_dead = false;

                });
            });
        }
    }
}

function dead()
{
    $('#player').stop();
        
    var miganie = setInterval(function(){

        $('#player').css('opacity', '0.2');

        setTimeout(function(){

            $('#player').css('opacity', '1');

        }, 200);

    },300);
    
    setTimeout(function(){

        clearInterval(miganie);
        $('#player').fadeOut(250, function(){
            $('#player').css('opacity', '1');
        });


    },2200);

    //przeniesienie do level 1
    setTimeout(function(){
        
        $('#level3').fadeOut(500, function(){
            
            $('body').css('background-image', 'url("IMG/bg/bg_level1.jpg")');
            $('#player').css({top: "440px"});
            $('#player').css({left: "20px"});
            $('#level1').fadeIn(500, function(){

                $('#player').show(250);
                is_dead = false;

            });
        });

    }, 2500);               
}

setInterval(function(){
    
    if($('#level3').css('display') == 'block')
    {
        var player_idle_pos = '';

        if(is_dead == false)
        {
            $('#chodnik1').toggle('slide',function(){

                if($('#chodnik1').css('display') == 'none')
                {
                    open1 = false;

                    //sprawdzenie czy player nie zatrzymał się na zamkniętym chodniku
                    player_idle_pos = $('#player').position();

                    if((player_idle_pos['left'] > 350 && player_idle_pos['left'] < 450 && open1 == false) && is_dead == false)
                    {
                        is_dead = true;

                        dead();
                    }

                }
                else
                {
                    open1 = true;
                }

            });

            setTimeout(function(){

                $('#chodnik2').toggle('slide',function(){

                    if($('#chodnik2').css('display') == 'none')
                    {
                        open2 = false; 

                        //sprawdzenie czy player nie zatrzymał się na zamkniętym chodniku
                        player_idle_pos = $('#player').position();

                        if((player_idle_pos['left'] > 550 && player_idle_pos['left'] < 650 && open2 == false) && is_dead == false)
                        {
                            is_dead = true;

                            dead();
                        }
                    }
                    else
                    {
                        open2 = true;
                    }

                });

            }, 600);
        }
    }
    
}, 1200);

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var bg_num = 0;

setInterval(function(){
    
    if($('#level3').css('display') == 'block')
    {
        if(bg_num == 0)
        {
            $('#level3').css('background-image', 'url("IMG/levels/level3_4.jpg")');
        }
        else if(bg_num == 1)
        {
            $('#level3').css('background-image', 'url("IMG/levels/level3_3.jpg")');
        }
        else if(bg_num == 2)
        {
            $('#level3').css('background-image', 'url("IMG/levels/level3_2.jpg")');
        }
        else if(bg_num == 3)
        {
            $('#level3').css('background-image', 'url("IMG/levels/level3_1.jpg")');
        }
        
        bg_num++;
        
        if(bg_num > 3)
        {
            bg_num = 0;
        }
    }
    
}, 1500);






