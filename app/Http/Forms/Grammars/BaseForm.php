<?php

namespace App\Http\Forms\Grammars;

use App\Http\Forms\Form;

abstract class BaseForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('name', 'text', [
                'label' => 'Title',
            ])
            ->add('content', 'hidden', [
                'label' => 'Grammar',
            ])
            ->add('ace-editor', 'static', [
                'label' => false,
                'tag' => 'div',
            ])
            ->add('public_view', 'checkbox', [
                'label' => 'Visible to everyone',
            ]);
    }
}
