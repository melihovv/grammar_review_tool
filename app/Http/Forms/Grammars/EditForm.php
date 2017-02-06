<?php

namespace App\Http\Forms\Grammars;

use App\Http\Forms\Form;
use Illuminate\Support\Facades\Auth;

class EditForm extends Form
{
    public function buildForm()
    {
        if (Auth::user()->isGrammarOwner($this->getModel())) {
            $this->add('public_view', 'checkbox', [
                'label' => 'Visible to everyone',
            ]);
        }

        $this
            ->add('allow_to_comment', 'checkbox', [
                'label' => 'Allow to comment',
            ])
            ->add('buttons', 'buttongroup', [
                'template' => 'laravel-form-builder::buttongroup',
                'splitted' => true,
                'size' => 'md',
                'buttons' => [
                    'close' => [
                        'label' => 'Close',
                        'attr' => [
                            'class' => 'btn btn-default',
                            'data-dismiss' => 'modal',
                        ],
                    ],
                    'submit' => [
                        'label' => 'Update',
                        'attr' => [
                            'type' => 'submit',
                            'class' => 'btn btn-primary',
                        ],
                    ],
                ],
            ]);
    }
}
