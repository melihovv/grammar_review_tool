<?php

namespace App\Http\Requests;

use Dingo\Api\Http\FormRequest;
use Fadion\Sanitizer\FormRequest\Sanitizable;

class GrammarRequest extends FormRequest
{
    use Sanitizable;

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'owner' => 'required|integer|min:1|exists:users,id',
            'name' => 'required|string|max:255',
            'content' => 'required|string|max:65535',
            'public_view' => 'boolean',
        ];
    }

    public function sanitizers()
    {
        return [
            'name' => 'trim',
        ];
    }
}
