<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>

<body>
<h1>Hello, {{ $user->name }}</h1>
<p>Click on the below link to confirm your email address</p>
<a href="{{ url("register/confirm/$user->email_token") }}" target="_blank">
    Confirm
</a>
</body>
</html>
