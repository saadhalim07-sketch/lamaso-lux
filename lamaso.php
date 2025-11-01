<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $numero = $_POST['numero'];
    $ville = $_POST['ville'];
    $localisation = $_POST['localisation'];
    $produit = $_POST['produit'];
    $prix = $_POST['prix'];

    $to = "saadhalim07@gmail.com"; // ضع بريدك هنا
    $subject = "Nouvelle commande depuis Lamaso Lux";
    $message = "
    Nom: $nom\n
    Prénom: $prenom\n
    Email: $email\n
    Numéro: $numero\n
    Ville: $ville\n
    Localisation: $localisation\n
    Produit: $produit\n
    Prix: $prix
    ";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "invalid";
}
?>
