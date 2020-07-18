<?php if (!empty($_POST)): 
    $data = array(
    'account' => htmlspecialchars($_POST["account"]),
    'customer' => htmlspecialchars($_POST["customer"])
);
 
$payload = json_encode($data);
 
// Prepare new cURL resource
$ch = curl_init('http://java-api:8443/accounts');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLINFO_HEADER_OUT, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

// Set HTTP Header for POST request 
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($payload))
);
 
// Submit the POST request
$result = curl_exec($ch);
 
// Close cURL session handle
curl_close($ch);

?>

<?php else: ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        Account: <input type="text" name="account"><br>
        Customer: <input type="text" name="customer"><br>
        <input type="submit">
    </form>
<?php endif; ?>