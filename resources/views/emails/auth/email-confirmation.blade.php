@component('mail::message')
# Hello, {{ $user->name }}

Click on the below link to confirm your email address

@component('mail::button', [
    'url' => route('auth.confirm', ['token' => $user->email_token]),
    'color' => 'blue',
])
Confirm
@endcomponent

@endcomponent
