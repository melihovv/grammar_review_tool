<?php

namespace App\Listeners;

use App\Mail\EmailConfirmation;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Mail;

class UserRegisteredListener
{
    public function handle(Registered $event)
    {
        $email = new EmailConfirmation($event->user);

        Mail::to($event->user->email)->send($email);
    }
}
