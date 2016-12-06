<?php

namespace App\Http\Requests;

use Dingo\Api\Http\FormRequest;
use Fadion\Sanitizer\FormRequest\Sanitizable;

class Request extends FormRequest
{
    use Sanitizable;

    public function authorize()
    {
        return true;
    }
}
