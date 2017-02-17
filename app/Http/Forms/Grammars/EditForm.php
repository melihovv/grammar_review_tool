<?php

namespace App\Http\Forms\Grammars;

class EditForm extends BaseForm
{
    public function buildForm()
    {
        parent::buildForm();

        $this
            ->add('submit', 'submit', [
                'label' => 'Update',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
            ]);
    }
}
