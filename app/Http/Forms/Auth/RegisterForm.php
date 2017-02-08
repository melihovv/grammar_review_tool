<?php

namespace App\Http\Forms\Auth;

use Anhskohbo\NoCaptcha\Facades\NoCaptcha;
use App\Http\Forms\Form;

class RegisterForm extends Form
{
    public function __construct()
    {
        $this->setFormOption('class', 'form-horizontal');
    }

    public function buildForm()
    {
        $this
            ->add('name', 'text', [
                'label' => 'Name',
                'template' => 'laravel-form-builder::horizontal-text',
            ])
            ->add('email', 'email', [
                'label' => 'E-Mail Address',
                'template' => 'laravel-form-builder::horizontal-text',
            ])
            ->add('password', 'password', [
                'label' => 'Password',
                'template' => 'laravel-form-builder::horizontal-text',
            ])
            ->add('password_confirmation', 'password', [
                'label' => 'Confirm Password',
                'template' => 'laravel-form-builder::horizontal-text',
            ])
            ->add('g-recaptcha-response', 'hidden', [
                'showError' => false,
            ])
            ->add('captcha', 'static', [
                'tag' => 'div',
                'label' => false,
                'value' => NoCaptcha::display(),
                'template' => 'laravel-form-builder::horizontal-captcha',
            ])
            ->add('submit', 'submit', [
                'label' => 'Register',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
                'template' => 'laravel-form-builder::horizontal-button',
            ]);
    }
}
