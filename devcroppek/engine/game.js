kod_formularza = '';

$(document).ready(function(){
    
    var down = {};
    var checkPosition = null;
    var isRunning = false;
    
    $(document).keydown(function(event){
        
        var key = event.which;
        var start_player_pos = $('#player').position();
        
        if(down[key] == null && isRunning == false && $('#formularz_kontaktowy').css('display') == 'none' && $('#player').css('display') == 'block')
        {
            move(key, start_player_pos);
        }
        
    });
    
    $(document).keyup(function(event){
        
        var key = event.which;
        down[key] = null;
        
        $('#player').stop();
        
        clearInterval(checkPosition);
        isRunning = false;
        
    });
    
    function move(key, start_player_pos)
    {   
        //przycisk D, przesunięcie w prawo
        if(key == 68 && down['68'] == null && start_player_pos['left'] < 848)
        {
            $('#player').animate({left: "+=900px"}, 1900, 'linear');
            down['68'] = true;
            
            checkPosition = setInterval(function(){
                
                isRunning = true;
                var player_pos = $('#player').position();
                
                if($('#level1').css('display') == 'block')
                {
                    call_function = level1_objects(player_pos, key);
                }
                else if($('#level2').css('display') == 'block')
                {
                    call_function = level2_objects(player_pos, key);
                }
                else if($('#level3').css('display') == 'block')
                {
                    call_function = level3_objects(player_pos, key);
                }
                
                if(player_pos['left'] > 847)
                {   
                    $('#player').stop();
                    $('#player').css({left: "850px"});
                    clearInterval(checkPosition);
                    isRunning = false;
                }
                   
            }, 10);
            
        }
        //przycisk A, przesunięcie w lewo
        else if(key == 65 && down['65'] == null && start_player_pos['left'] > 2)
        {
            $('#player').animate({left: "-=900px"}, 1900, 'linear');
            down['65'] = true;
            
            checkPosition = setInterval(function(){
                
                isRunning = true;
                var player_pos = $('#player').position();
                
                if($('#level1').css('display') == 'block')
                {
                    call_function = level1_objects(player_pos, key);
                }
                else if($('#level2').css('display') == 'block')
                {
                    call_function = level2_objects(player_pos, key);
                }
                else if($('#level3').css('display') == 'block')
                {
                    call_function = level3_objects(player_pos, key);
                }
                
                if(player_pos['left'] < 2)
                {
                    $('#player').stop();
                    $('#player').css({left: "0px"});
                    clearInterval(checkPosition);
                    isRunning = false;
                }
                   
            }, 10);
        }
        //przycisk S, przesunięcie w dół
        else if(key == 83 && down['83'] == null && start_player_pos['top'] < 448)
        {
            $('#player').animate({top: "+=500px"}, 1250, 'linear');
            down['83'] = true;
            
            checkPosition = setInterval(function(){
                
                isRunning = true;
                var player_pos = $('#player').position();
                
                if($('#level1').css('display') == 'block')
                {
                    call_function = level1_objects(player_pos, key);
                }
                else if($('#level2').css('display') == 'block')
                {
                    call_function = level2_objects(player_pos, key);
                }
                else if($('#level3').css('display') == 'block')
                {
                    call_function = level3_objects(player_pos, key);
                }
                
                if(player_pos['top'] > 449)
                {
                    $('#player').stop();
                    $('#player').css({top: "450px"});
                    clearInterval(checkPosition);
                    isRunning = false;
                }
                   
            }, 10);
        }
        //przycisk W, przesunięcie w górę
        else if(key == 87 && down['87'] == null && start_player_pos['top'] > 2)
        {
            $('#player').animate({top: "-=500px"}, 1250, 'linear');
            down['87'] = true;
            
            checkPosition = setInterval(function(){
                
                isRunning = true;
                var player_pos = $('#player').position();
                
                if($('#level1').css('display') == 'block')
                {
                    call_function = level1_objects(player_pos, key);
                }
                else if($('#level2').css('display') == 'block')
                {
                    call_function = level2_objects(player_pos, key);
                }
                else if($('#level3').css('display') == 'block')
                {
                    call_function = level3_objects(player_pos, key);
                }
                
                if(player_pos['top'] < 2)
                {
                    $('#player').stop();
                    $('#player').css({top: "0px"});
                    clearInterval(checkPosition);
                    isRunning = false;
                }
                   
            }, 10);
        }
    }
    
});