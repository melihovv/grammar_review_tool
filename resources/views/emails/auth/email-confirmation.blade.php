@component('mail::message')
# Hello, {{ $user->name }}

Click on the below link to confirm your email address

@component('mail::button', [
    'url' => url("register/confirm/$user->email_token"),
    'color' => 'blue',
])
Confirm
@endcomponent

@endcomponent
