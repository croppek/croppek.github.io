//komentarz

$(document).ready(function(){
    
    $('form').submit(false);
    
    $('#kontakt_name_input').attr('placeholder', 'Jan Kowalski');
    $('#kontakt_name_input').focus(function(){
        $(this).attr('placeholder', '');
    });
    $('#kontakt_name_input').blur(function(){
        $(this).attr('placeholder', 'Jan Kowalski');
    });
    
    $('#kontakt_email_input').attr('placeholder', 'przykladowy@mail.com');
    $('#kontakt_email_input').focus(function(){
        $(this).attr('placeholder', '');
    });
    $('#kontakt_email_input').blur(function(){
        $(this).attr('placeholder', 'przykladowy@mail.com');
    });
    
    $('#kontakt_text_input').attr('placeholder', 'Miejsce na Twoją wiadomość. :)');
    $('#kontakt_text_input').focus(function(){
        $(this).attr('placeholder', '');
    });
    $('#kontakt_text_input').blur(function(){
        $(this).attr('placeholder', 'Miejsce na Twoją wiadomość. :)');
    });
    
    var send_clicked = false;
    
    $("#send_msg_btn").unbind('click');
    $('#send_msg_btn').click(function(){
        
        if(send_clicked == false)
        { 
            send_clicked = true;
            
            if($("#kontakt_name_input").val() != "" && $("#kontakt_email_input").val() != "" && $("#kontakt_text_input").val() != "" && $("#kontakt_kod_input").val() != '')
            {
                var kod_dostepu = $("#kontakt_kod_input").val();
                kod_dostepu.toUpperCase();

                if(kod_dostepu == kod_formularza)
                {
                    $('#incorrect_pass_text').fadeOut(200);

                    $('form').fadeOut(200, function(){

                        var imieinazwisko = $('#kontakt_name_input').val();
                        var email = $('#kontakt_email_input').val();
                        tresc = $('#kontakt_text_input').val();

                        $.post("send_message.php", {kontakt_name:imieinazwisko, kontakt_email:email, kontakt_text:tresc}, function(result){

                            if(result == "true")
                            {
                                $('form').empty().append("Twoja wiadomość została wysłana pomyślnie! <br /><br /> Odpowiedź zostanie przekazana na podany adres email.").fadeIn(300);
                            }
                            else if(result == "false")
                            {
                                $('form').empty().append('Wystąpił błąd podczas wysyłania wiadomości..<br /> <input id="contact_goback_btn" class="button" onclick="goback()" type="button" style="width: 250px; margin-top: 15px;" value="Spróbuj ponownie">').fadeIn(500);
                            }
                            else if(result == "niepoprawnyemail")
                            {
                                $('form').empty().append('Podany adres email jest niepoprawny.<br /> <input id="contact_goback_btn" class="button" onclick="goback()" type="button" style="width: 250px; margin-top: 15px;" value="Spróbuj ponownie">').fadeIn(500);
                            }
                            else if(result == "blad")
                            {
                                $('form').empty().append('Wystąpił błąd podczas przesyłania danych do pliku PHP.<br /> <input id="contact_goback_btn" class="button" onclick="goback()" type="button" style="width: 250px; margin-top: 15px;" value="Spróbuj ponownie">').fadeIn(500);
                            }
                            else
                            {
                                $('form').empty().append(result + '<br /> <input id="contact_goback_btn" class="button" onclick="goback()" type="button" style="width: 250px; margin-top: 15px;" value="Spróbuj ponownie">').fadeIn(500);
                            }

                        });

                    });
                }
                else
                {
                    if($('#incorrect_pass_text').css('display') == 'block')
                    {
                        $('#incorrect_pass_text').fadeOut(200,function(){

                            $('#incorrect_pass_text').fadeOut(200).empty().append('<b>Podałeś nieprawidłowy kod dostępu.</b>').fadeIn(300);

                        }); 
                    }
                    else
                    {
                        $('#incorrect_pass_text').fadeOut(200).empty().append('<b>Podałeś nieprawidłowy kod dostępu.</b>').fadeIn(300);
                    }
                }
            }
            else if($("#kontakt_name_input").val() == "" || $("#kontakt_email_input").val() == "" || $("#kontakt_text_input").val() == "" || $("#kontakt_kod_input").val() == "")
            {
                $('#incorrect_pass_text').fadeOut(200).empty().append('<b>Wszystkie pola muszą być wypełnione.</b>').fadeIn(300);
            }
            
            setTimeout(function(){
                   
                send_clicked = false;
                    
            }, 1000);
        }
        
    });
        
});

function goback(){

    $('form').fadeOut(200, function(){

        $('#incorrect_pass_text').fadeOut(200);

        $('form').empty().append('<label class="label_kontakt" style="margin-left: 50px;">Imię i nazwisko:</label><input id="kontakt_name_input" class="contact_text_input" type="text" name="kontakt_name" style="width: 250px;" required="" placeholder="Jan Kowalski"><label class="label_kontakt">E-mail:</label><input id="kontakt_email_input" class="contact_text_input" type="email" name="kontakt_email" style="width: 250px;" required="" placeholder="przykladowy@mail.com"><label class="label_kontakt">Wiadomość:</label><textarea id="kontakt_text_input" class="contact_text_input" name="kontakt_text" style="width:500px; height: 150px; font-size: 1em;" required="" placeholder="Miejsce na Twoją wiadomość. :)">'+ tresc +'</textarea><label class="label_kontakt">Kod dostępu:</label><input id="kontakt_kod_input" class="contact_text_input" type="text" name="kod" style="width: 150px; margin: 5px auto 15px;" required=""><input id="send_msg_btn" class="button" name="wyslij_wiadomosc" type="submit" value="Wyślij"><script src="kontakt.js"></script>').fadeIn(500);

    });
    
};