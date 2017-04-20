kod_formularza = '';

$(document).ready(function(){
    
    var down = {},
        checkPosition = null,
        isRunning = false,
        player = $('#player'),
        formularz = $('#formularz_kontaktowy'),
        level1 = $('#level1'),
        level2 = $('#level2'),
        level3 = $('#level3');
    
    $(document).keydown(function(event){
        
        var key = event.which;
        var start_player_pos = player.position();
        
        if(down[key] == null && isRunning == false && formularz.css('display') == 'none' && player.css('display') == 'block')
        {
            move(key, start_player_pos);
        }
        
    });
    
    $(document).keyup(function(event){
        
        var key = event.which;
        down[key] = null;
        
        player.stop();
        
        clearInterval(checkPosition);
        isRunning = false;
        
    });
    
    function move(key, start_player_pos)
    {   
        //przycisk D, przesunięcie w prawo
        if(key == 68 && down['68'] == null && start_player_pos['left'] < 848)
        {
            moveDirection('left', '+=900px', '68'); 
        }
        //przycisk A, przesunięcie w lewo
        else if(key == 65 && down['65'] == null && start_player_pos['left'] > 2)
        {
            moveDirection('left', '-=900px', '65');
        }
        //przycisk S, przesunięcie w dół
        else if(key == 83 && down['83'] == null && start_player_pos['top'] < 448)
        {
            moveDirection('top', '+=500px', '83');
        }
        //przycisk W, przesunięcie w górę
        else if(key == 87 && down['87'] == null && start_player_pos['top'] > 2)
        {
            moveDirection('top', '-=500px', '87');
        }
    }
    
    function moveDirection(direction, value, key)
    {
        var player_pos;
        
        if(direction == 'left')
        {
            player.animate({left: value}, 1900, 'linear');   
        }
        else
        {
            player.animate({top: value}, 1250, 'linear');
        }
        
        down[key] = true;

        checkPosition = setInterval(function(){

            isRunning = true;
            player_pos = player.position();

            if(level1.css('display') == 'block')
            {
                call_function = level1_objects(player_pos, key);
            }
            else if(level2.css('display') == 'block')
            {
                call_function = level2_objects(player_pos, key);
            }
            else if(level3.css('display') == 'block')
            {
                call_function = level3_objects(player_pos, key);
            }
            
            switch(key)
            {
                case '68':
                    if(player_pos['left'] > 847)
                    {
                        stopPlayer('left', '850px');
                    }
                    break;
                case '65':
                    if(player_pos['left'] < 2)
                    {
                        stopPlayer('left', '0px');
                    }
                    break;
                case '83':
                    if(player_pos['top'] > 449)
                    {
                        stopPlayer('top', '450px');
                    }
                    break;
                case '87':
                    if(player_pos['top'] < 2)
                    {
                        stopPlayer('top', '0px');
                    }
                    break;
            }
            
            function stopPlayer(direction, stop_point)
            {
                player.stop();
                if(direction == 'left')
                {
                    player.css({left: stop_point});   
                }
                else
                {
                    player.css({top: stop_point});
                }
                clearInterval(checkPosition);
                isRunning = false;
            }

        }, 10);
    }
    
});