<?php

// Only process POST requests.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize form fields.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $dob = trim($_POST["birth-date"]);
    $birth_place = strip_tags(trim($_POST["birth-place"]));
    $occupation = strip_tags(trim($_POST["Occupation"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mobile = strip_tags(trim($_POST["adhar_no"]));
    $nominee_name = strip_tags(trim($_POST["Nominee-name"]));
    $nominee_dob = trim($_POST["Nominee-birth-date"]);
    $nominee_pan = strip_tags(trim($_POST["Nominee-pan-no"]));
    
    // File uploads
    $files = [
        'pan_card' => $_FILES['pan_card'],
        'aadhar_card' => $_FILES['aadhar_card'],
        'bank_cheque' => $_FILES['bank_cheque']
    ];

    // Check that data was sent to the mailer.
    if (empty($name) || empty($dob) || empty($birth_place) || empty($occupation) || empty($mobile) || empty($email) || empty($nominee_name) || empty($nominee_dob) || empty($nominee_pan) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // File upload handling
    $upload_dir = 'uploads/'; // Set your upload directory
    $allowed_types = ['jpg', 'jpeg', 'png', 'pdf']; // Allowed file types
    $max_size = 2 * 1024 * 1024; // 2MB max file size

    $file_paths = [];
    $file_errors = [];

    foreach ($files as $file_field => $file) {
        $file_name = basename($file['name']);
        $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        $file_path = $upload_dir . uniqid() . '.' . $file_ext;

        if ($file['error'] !== UPLOAD_ERR_OK) {
            $file_errors[] = "Error uploading $file_name.";
            continue;
        }

        if (!in_array($file_ext, $allowed_types)) {
            $file_errors[] = "$file_name has an invalid file type.";
            continue;
        }

        if ($file['size'] > $max_size) {
            $file_errors[] = "$file_name exceeds the maximum size of 2MB.";
            continue;
        }

        if (move_uploaded_file($file['tmp_name'], $file_path)) {
            $file_paths[$file_field] = $file_path;
        } else {
            $file_errors[] = "Failed to move uploaded file for $file_name.";
        }
    }

    // If there were file upload errors, return them
    if (!empty($file_errors)) {
        http_response_code(400);
        echo implode("\n", $file_errors);
        exit;
    }

    // Set the recipient email address.
    $recipient = "kadlag.support@gmail.com";

    // Set the email subject.
    $subject = "New inquiry from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Date of Birth: $dob\n";
    $email_content .= "Place of Birth: $birth_place\n";
    $email_content .= "Occupation: $occupation\n";
    $email_content .= "Aadhar Registered Mobile No: $mobile\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Nominee Name: $nominee_name\n";
    $email_content .= "Nominee Date of Birth: $nominee_dob\n";
    $email_content .= "Nominee PAN Card Number: $nominee_pan\n\n";
    
    // Append file paths if needed
    foreach ($file_paths as $field => $path) {
        $email_content .= ucfirst(str_replace('_', ' ', $field)) . ": $path\n";
    }

    // Build the email headers.
    $email_headers = "From: $name <$email>";
    
    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
        // header("Location: thank-you.html");
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
        // header("Location: oops.html");
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
    // header("Location: ".$_SERVER["HTTP_REFERER"]);
    // exit;
}

?>
