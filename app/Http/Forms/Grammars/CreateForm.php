<?php

namespace App\Http\Forms\Grammars;

class CreateForm extends BaseForm
{
    public function buildForm()
    {
        parent::buildForm();

        $this
            ->addBefore('name', 'type', 'select', [
                'choices' => [
                    'lemon' => 'Lemon',
                    'bison' => 'Bison',
                ],
                'label' => 'Format',
            ])
            ->add('submit', 'submit', [
                'label' => 'Create',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
            ]);
    }
}
