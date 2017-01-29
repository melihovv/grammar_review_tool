<?php

namespace App\Http\Forms\Auth;

use App\Http\Forms\Form;

class ForgotPasswordForm extends Form
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
            ->add('submit', 'submit', [
                'label' => 'Send Password Reset Link',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
                'template' => 'laravel-form-builder::horizontal-button',
            ]);
    }
}
