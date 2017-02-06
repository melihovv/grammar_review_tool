<?php

namespace App\Http\Requests\Grammar;

use App\Http\Requests\Request;
use Illuminate\Support\Facades\Auth;

class GrammarUpdateRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'public_view' => 'required|boolean',
        ]);
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedLocalVariable)
     */
    public function getValidatorInstance()
    {
        $validator = parent::getValidatorInstance();

        $validator->sometimes(
            'allow_to_comment',
            [
                'required',
                'boolean',
            ],
            function ($input) {
                return Auth::user()->isGrammarOwner($this->route('grammar'));
            }
        );

        return $validator;
    }
}
