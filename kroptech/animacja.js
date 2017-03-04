setInterval("test()", 10);
setInterval("koniec()", 500);

var flaga = true;
var focused;
var theend = true;

function test()
{
    focused = document.hasFocus();
}

function indexanimation() 
{ 
    theend = false;
    kolo();
    
    $('#kolo').fadeToggle('slow');
    $('#napis').fadeToggle('slow');
    $('#kolo').css({display: "block",});
    $('#napis').css({display: "block",});
        
    function kolo()
    {
        if (focused === true && flaga === true) 
        {
            $('#kolo').addClass("animacjaKolo");
            
            setTimeout(function()
            {
                    $('#kolo').fadeToggle('slow');     
                    $('#napis').fadeToggle('slow'); 
            }, 6000);
            
            setTimeout(function()
            {
                napisJEDEN();
                $('#kolo').removeClass("animacjaKolo");
                flaga = false;
            }, 6500);
            
        }
        else
        {
            setTimeout(function()
            {
                kolo();
            }, 1000);
        }
    }
    
    function napisJEDEN()
    {
        flaga = true;
           
        $('#text1').fadeToggle('slow');
        napisJEDENkoniec();
        
        function napisJEDENkoniec()
        {       
            if (focused === true && flaga === true) 
            {            
                setTimeout(function()
                {
                    $('#text1').fadeToggle('slow');
                }, 2000);

                setTimeout(function()
                {
                    kropek();
                    flaga = false;
                }, 2700);
            }
            else
            {
                setTimeout(function()
                {
                    flaga = true;
                    napisJEDENkoniec();
                }, 500);
            }
        }
    }
    
    function kropek()
    {
        flaga = true;
        
        $('#kropek').toggle('slow');
        $('#kropekText').fadeToggle('slow');
        
        kropekKoniec();
        
        function kropekKoniec()
        {
            if (focused === true && flaga === true) 
            { 
                setTimeout(function()
                {
                    $('#kropek').toggle('slow');
                    $('#kropekText').fadeToggle('slow');
                }, 2200);

                setTimeout(function()
                {
                    zawor();
                    flaga = false;
                }, 2700);
            }
            else
            {
                setTimeout(function()
                {
                    flaga = true;
                    kropekKoniec();
                }, 500);
            }
        }
    }
    
    function zawor()
    {
        flaga = true;
        
        $('#zawor').toggle('slow');
        $('#zaworText').fadeToggle('slow');
        
        zaworKoniec();
        
        function zaworKoniec()
        {
            if (focused === true && flaga === true) 
            { 
                setTimeout(function()
                {
                    $('#zawor').toggle('slow');
                    $('#zaworText').fadeToggle('slow');
                }, 2200);

                setTimeout(function()
                {
                    igor();
                    flaga = false;
                }, 2700);
            }
            else
            {
                setTimeout(function()
                {
                    flaga = true;
                    zaworKoniec();
                }, 500);
            }
        }
    }
    
    function igor()
    {
        flaga = true;
        
        $('#igor').toggle('slow');
        $('#igorText').fadeToggle('slow');
        
        igorKoniec();
        
        function igorKoniec()
        {
            if (focused === true && flaga === true) 
            { 
                setTimeout(function()
                {
                    $('#igor').toggle('slow');
                    $('#igorText').fadeToggle('slow');
                }, 2200);

                setTimeout(function()
                {
                    kacper();
                    flaga = false;
                }, 2700);
            }
            else
            {
                setTimeout(function()
                {
                    flaga = true;
                    igorKoniec();
                }, 500);
            }
        }
    }
    
    function kacper()
    {
        flaga = true;
        
        $('#kacper').toggle('slow');
        $('#kacperText').fadeToggle('slow');
        
        kacperKoniec();
        
        function kacperKoniec()
        {
            if (focused === true && flaga === true) 
            { 
                setTimeout(function()
                {
                    $('#kacper').toggle('slow');
                    $('#kacperText').fadeToggle('slow');
                }, 2200);

                setTimeout(function()
                {
                    napisDWA();
                    flaga = false;
                }, 2800);
            }
            else
            {
                setTimeout(function()
                {
                    flaga = true;
                    kacperKoniec();
                }, 500);
            }
        }
    }
    
    function napisDWA()
    {
        flaga = true;
           
        $('#text2').fadeToggle('slow');
        napisDWAkoniec();
        
        function napisDWAkoniec()
        {       
            if (focused === true && flaga === true) 
            {            
                setTimeout(function()
                {
                    $('#text2').fadeToggle('slow');
                }, 3500);

                setTimeout(function()
                {
                    flaga = false;
                    theend = true;
                }, 4000);
            }
            else
            {
                setTimeout(function()
                {
                    flaga = true;
                    napisDWAkoniec();
                }, 500);
            }
        }
    }
}

function koniec()
{
    if(theend == true)
    {
        flaga = true;
        indexanimation();
    }
}