<?php

namespace App\Http\Forms\Auth;

use Anhskohbo\NoCaptcha\Facades\NoCaptcha;
use App\Http\Forms\Form;

class LoginForm extends Form
{
    public function __construct()
    {
        $this->setFormOption('class', 'form-horizontal');
    }

    public function buildForm()
    {
        $this
            ->add('email', 'email', [
                'label' => 'E-Mail Address',
                'template' => 'laravel-form-builder::horizontal-text',
            ])
            ->add('password', 'password', [
                'label' => 'Password',
                'template' => 'laravel-form-builder::horizontal-text',
            ])
            ->add('remember', 'checkbox', [
                'label' => 'Remember me',
                'template' => 'laravel-form-builder::horizontal-checkbox',
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
                'label' => 'Login',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
                'template' => 'laravel-form-builder::horizontal-button',
                'links' => [
                    link_to('/password/reset', 'Forgot your password?', [
                        'class' => 'btn btn-link',
                    ]),
                ],
            ]);
    }
}
