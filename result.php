<?php
// Set header to return JSON
header('Content-Type: application/json');

// Prevent caching
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

// More diverse and fun responses
$responses = [
    // Positive responses
    ["result" => "Handsome", "level" => 95, "emoji" => "🌟"],
    ["result" => "Handsome", "level" => 87, "emoji" => "😍"],
    ["result" => "Handsome", "level" => 92, "emoji" => "🔥"],
    ["result" => "Handsome", "level" => 89, "emoji" => "✨"],
    // Negative responses
    ["result" => "Nome", "level" => 45, "emoji" => "🤷‍♂️"],
    ["result" => "Nome", "level" => 38, "emoji" => "😶"],
    ["result" => "Nome", "level" => 42, "emoji" => "🙃"],
    ["result" => "Nome", "level" => 40, "emoji" => "🙈"]
];

// Get a random response
$response = $responses[array_rand($responses)];

// Current time for timestamp
$timestamp = date('Y-m-d H:i:s');

// Return expanded JSON response
echo json_encode([
    'status' => 'success',
    'result' => $response['result'],
    'level' => $response['level'],
    'emoji' => $response['emoji'],
    'timestamp' => $timestamp
]);
?> 