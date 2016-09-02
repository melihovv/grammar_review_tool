<?php

namespace App\Http\Requests;

use Dingo\Api\Http\FormRequest;
use Fadion\Sanitizer\FormRequest\Sanitizable;

class CommentRequest extends FormRequest
{
    use Sanitizable;

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'content' => 'required|string|max:65535',
            'row' => 'required|integer|min:1',
            'column' => 'required|integer|min:0',
        ];
    }
}
