<?php
session_start();

// Als de score nog niet is ingesteld, initialiseer deze
if (!isset($_SESSION['score'])) {
    $_SESSION['score'] = 0;
}

// Controleer of er een score wordt gestuurd en werk deze bij
if (isset($_GET['score'])) {
    $_SESSION['score'] = (int)$_GET['score'];
}

// Geef de huidige score terug naar de client
echo $_SESSION['score'];
?>