<?php

namespace App\Http\Forms\Grammars;

class CreateForm extends BaseForm
{
    public function buildForm()
    {
        parent::buildForm();

        $this
            ->add('submit', 'submit', [
                'label' => 'Create',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
            ]);
    }
}
