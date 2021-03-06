<!--
	Moja pierwsza strona - główna strona KropTech.net 
	Data ukończenia: 08.03.2016r.
	Wersja: v.3.0
	Języki: HTML5, CSS3, JavaScript (jQuery), PHP
-->

<!DOCTYPE HTML>

<?php
    
    session_start();
    
    if (isset($_POST['email']))
    {
        //Udana walidacja
        $wszystko_OK = true;
        
        // Tworzymy zmienną dla imienia i nazwiska
        $name = $_POST['name'];
        
        if (empty($_POST['name'])) 
        {
            $wszystko_OK = false;
            $_SESSION['e_nick'] = "Podaj imię i nazwisko!";
        }
        
        // Tworzymy zmienną dla adresu email
        $email = $_POST['email'];
        
        $emailB = filter_var($email, FILTER_SANITIZE_EMAIL);
        
        if ((filter_var($emailB, FILTER_VALIDATE_EMAIL) == false) || ($emailB != $email) || empty($_POST['email']))
        {
            $wszystko_OK = false;
            $_SESSION['e_email'] = "Podaj poprawny adres email!";
        }
        
        
        // Tworzymy zmienną dla wiadomości
        $message = $_POST['message'];
        
        if (empty($_POST['message'])) 
        {
            $wszystko_OK = false;
            $_SESSION['e_message'] = "Wpisz treść wiadomości!";
        }
        
        // Podajesz adres email z którego ma być wysłana wiadomość
        $odkogo = "kroptechnet@gmail.com";

        // Podajesz adres email na który chcesz otrzymać wiadomość
        $dokogo = "kroptechnet@gmail.com";

        // Podajesz tytuł jaki ma mieć ta wiadomość email
        $tytul = "Wiadomość z formularza kontaktowego.";

        // Przygotowujesz treść wiadomości
        $wiadomosc = "";
        $wiadomosc .= "Imie i nazwisko: " . $name . "\n";
        $wiadomosc .= "Od: " . $email . "\n";
        $wiadomosc .= "Wiadomosc: " . $message . "\n";

        // Dodajemy UTF-8 do naglowka naszej wiadomości
        $naglowek = "";
        $naglowek .= "Od:" . $odkogo . " \n";
        $naglowek .= "Content-Type:text/plain;charset=utf-8";
        
        //Bot or not?
        
        $sekret = "6LfJWB0TAAAAAFma3U_xrIJzbzZ7HhmTWFXMX65w";
        $sprawdz = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$sekret.'&response='.$_POST['g-recaptcha-response']);
        
        $odpowiedz = json_decode($sprawdz);
        
        if($odpowiedz -> success==false)
        {
            $wszystko_OK = false;
            $_SESSION['e_bot'] = "Musisz potwierdzić CAPTCHE!";
        }
        
        if($wszystko_OK == true)
        {
            //Wszystkie testy zaliczone
            
            // Wysyłamy wiadomość
            $sukces = mail($dokogo, $tytul, $wiadomosc, $naglowek);

            // Przekierowywujemy na potwierdzenie
            if ($sukces)
            {
              print "<meta http-equiv=\"refresh\" content=\"0;URL=wiadomosc-wyslana-pomyslnie\">";
            }
            else
            {
              print "<meta http-equiv=\"refresh\" content=\"0;URL=blad-wysylania-wiadomosci\">";
            }
        }
    }
?>

<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<title>Kontakt | KropTech</title>
	
	<meta name="description" content="Usługi informatyczne Września. Szybki kontakt, wiele sposobów!" />
	<meta name="keywords" content="kroptech, krop, tech, net, Września, wielkopolska, Białężyce, Chocicza Wielka, we, Wrześni, facebook, formularz, youtube, email, kontakt, kontaktowy" />
	
	<link rel="Stylesheet" href="style.css" type="text/css" /> 
	<link rel="Stylesheet" href="css/fontello.css" type="text/css" /> 
	<link rel="Shortcut icon" href="img/favicon.ico" />
	<link href='https://fonts.googleapis.com/css?family=Dosis:400,600|Lobster&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	
	<script src='https://www.google.com/recaptcha/api.js'></script>
	
</head>

										<!-- BODY -->

<body>

<div class="wrapper">

	<header class="mainHeader">
	
		<div class="mainLogo">
			<div class="logoText">
				<h1 class="logoNapis">KropTech.net</h1>
				<p class="logoPodpis">Twoje centrum pomocy informatycznej!<p>
			</div>
		</div>
		
		<div class="mainLogoImg">
			<div class="logoImage"><img class="logoImg" src="img/responsive-logo.png"/></div>
		</div>
		
		<nav class="nav">
			
			<span class="nav-btn"><i class="icon-menu"></i> MENU</span>
			<ul class="navList">
				<li><a href="oferta">Oferta</a>
					<ul>
						<li><a href="zestawy-komputerowe"><p class="text-lista-rozwijana">Składanie zestawów<br />komputerowych</p></a></li>
						<li><a href="naprawa-komputerow"><p class="text-lista-rozwijana">Naprawa komputerów</p></a></li>
						<li><a href="obrobka-zdjec-filmow"><p class="text-lista-rozwijana">Obróbka zdjęć<br /> / montaż filmów</p></a></li>
						<li><a href="grafika-rysunki-plakaty"><p class="text-lista-rozwijana">Grafika / Rysunki / Plakaty</p></a></li>
						<li><a href="tworzenie-stron-internetowych"><p class="text-lista-rozwijana">Tworzenie witryn<br /> internetowych</p></a></li>
					</ul>
				</li>
				<li><a href="portfolio">Portfolio</a></li>
				<li><a href="projekty">Projekty</a></li>
				<li style="display: none;"></li>
				<li  class="active"><a href="kontakt">Kontakt</a>
					<ul>
						<li><a href="ekipa">Nasza ekipa <i class="icon-emo-beer"></i></a></li>
					</ul>
				</li>
				<li><a href="https://web.facebook.com/kroptech" target="_blank" title="Polub nas na Facebook'u!"><i class="icon-facebook-official"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UCQVn-n2wUUY2sIVphQcRP2Q" target="_blank" title="Subskrybuj nasz kanał!"><i class="icon-youtube-squared"></i></a></li>
			</ul>
		</nav>
	
	</header>
	
										<!-- KONTENT -->
	
	<div class="mainContent">
		
		<div class="content_wrapper">
			<article class="mainArticle_aside_kontakt">
				<content class="textContent">
					<h3>Łatwy i szybki kontakt! Wiele możliwości!</h3>
					
					<p><span style="font-weight: 700;"><i class="icon-mail-alt"></i> E-mail:</span><span style="word-spacing: 5px;"> kroptechnet@gmail.com</span><br />
					
					<p><span style="font-weight: 700;"><i class="icon-phone-squared"></i> Tel / SMS:</span><span style="word-spacing: 5px;"> 721 143 480</span><br />&nbsp &nbsp &nbsp &nbsp <span style="font-size: 15px; font-style: italic;">( Telefony odbieramy od 15 do 22 ) </span><br />
					
					<p><span style="font-weight: 700;"><i class="icon-facebook-official"></i></span><span class="kontaktLink" style="word-spacing: 0px;"> <a href="http://facebook.com/kroptech" target="_blank">Facebook.com/kroptech</a></span>
					
					<p><span style="font-weight: 700;"><i class="icon-youtube-squared"></i></span><span class="kontaktLink" style="word-spacing: 0px;"><a href="https://www.youtube.com/channel/UCQVn-n2wUUY2sIVphQcRP2Q" target="_blank"> Youtube.com/kroptechnet</a></span><br />
					
					<p><span style="font-weight: 700;"><i class="icon-vcard"></i></span><span style="word-spacing: 5px;"> Lub wypełnij formularz kontaktowy</span><br /><br />
					
					<div class="button" style="line-height: 125%; padding-top: 0; margin-bottom: 10px;"><a href="ekipa">Poznaj naszą ekipę! <i class="icon-emo-beer"></i></a></div>
				</content>
			</article>
		
            <span class="indexBorderVertical"></span>
        
			<aside class="video_aside_kontakt">
				<div class="formularzBox">
					<h2 style="margin: 0 0 10px; padding: 0; font-style: italic; font-weight: 400;">Napisz do nas!</h2>
					
					<div class="formularz">
					<form method="post">
        
					<label>Imie i nazwisko:</label>
					<input name="name" placeholder="Jan kowalski">
                        
                        <?php
                            
                            if (isset($_SESSION['e_nick']))
                            {
                                echo '<div class="form_error">'.$_SESSION['e_nick'].'</div>';
                                unset($_SESSION['e_nick']);
                            }
                    
                        ?>
							
					<label>E-mail:</label>
					<input name="email" type="email" placeholder="przyklad@poczta.pl">
                        
                        <?php
                            
                            if (isset($_SESSION['e_email']))
                            {
                                echo '<div class="form_error">'.$_SESSION['e_email'].'</div>';
                                unset($_SESSION['e_email']);
                            }
                    
                        ?>
							
					<label>Wiadomość:</label>
					<textarea name="message" placeholder="Tutaj opisz swój problem lub zadaj pytanie :)"></textarea>
                        
                         <?php
                            
                            if (isset($_SESSION['e_message']))
                            {
                                echo '<div class="form_error">'.$_SESSION['e_message'].'</div>';
                                unset($_SESSION['e_message']);
                            }
                    
                        ?>
                        
                    <label>Potwierdź, że nie jesteś robotem:</label>
                    <div class="g-recaptcha" data-sitekey="6LfJWB0TAAAAAJteZfBtkaT6aTI4JDU2NSf_gvRG"></div>
                        
                        <?php
                            
                            if (isset($_SESSION['e_bot']))
                            {
                                echo '<div class="form_error">'.$_SESSION['e_bot'].'</div>';
                                unset($_SESSION['e_bot']);
                            }
                    
                        ?>
						
					<input id="submit" name="submit" type="submit" value="Wyślij">
						
					</form>
					</div>
				</div>
			</aside>
		</div>
		<div style="clear: both;"></div>
		
		<span class="indexBorder"></span>
		
	<aside class="video">
			<h2 class="textVideo">Jak trafić?</h2>
			<div class="mainVideoWrapper">
				<div class="videoWrapper">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9757.471179271597!2d17.517559268144602!3d52.309328259572894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704e93b4414c767%3A0x7507e05244a968e!2sChocicza+Wielka+1%2C+62-300+Chocicza+Wielka!5e0!3m2!1spl!2spl!4v1458875355244" width="600" height="450" style="border:3px solid #c34f4f; border-radius: 5px;" allowfullscreen></iframe>
				</div>
			</div>
	</aside>
	</div>
	
	<footer class="mainFooter">
		<p class="textFooter">Bartosz Kropidłowski &nbsp &copy; 2016 &nbsp&nbsp|&nbsp&nbsp  Wszelkie prawa zastrzeżone  &nbsp&nbsp|&nbsp &nbsp <i class="icon-mail-alt"></i> kroptechnet@gmail.com</p>
	</footer>
	
</div>
	
										<!-- Skrypty JS -->
	
	<script src="jquery-1.12.1.min.js"></script>

	<script>

	$(document).ready(function() {
	   var stickyNavTop = $('nav').offset().top;

	   var stickyNav = function(){
	   var scrollTop = $(window).scrollTop();

	   if (scrollTop > stickyNavTop) { 
		  $('nav').addClass('sticky');
	   } else {
		  $('nav').removeClass('sticky');
		}
	   };

	   stickyNav();

	   $(window).scroll(function() {
		  stickyNav();
	   });
	   });
	   
	   $('span.nav-btn').click(function()
	   {
			$('ul.navList').slideToggle();
	   })
	   
	   $(window).resize(function()
	   {
			if ($(window).width() > 1010)
			{
				$('ul.navList').removeAttr('style');
			}
	   })
	   
	</script>
	
</body>
</html>