<?php

namespace App\Http\Forms\Auth;

use App\Http\Forms\Form;

class ResetPasswordForm extends Form
{
    public function __construct()
    {
        $this->setFormOption('class', 'form-horizontal');
    }

    public function buildForm()
    {
        $this
            ->add('token', 'hidden', [
                'default_value' => $this->getData('token'),
            ])
            ->add('email', 'email', [
                'label' => 'E-Mail Address',
                'template' => 'laravel-form-builder::horizontal-text',
                'default_value' => $this->getData('email'),
            ])
            ->add('password', 'password', [
                'label' => 'Password',
                'template' => 'laravel-form-builder::horizontal-text',
            ])
            ->add('password_confirmation', 'password', [
                'label' => 'Confirm Password',
                'template' => 'laravel-form-builder::horizontal-text',
            ])
            ->add('submit', 'submit', [
                'label' => 'Reset Password',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
                'template' => 'laravel-form-builder::horizontal-button',
            ]);
    }
}
