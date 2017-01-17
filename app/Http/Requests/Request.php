<?php

namespace App\Http\Requests;

use Dingo\Api\Http\FormRequest;

abstract class Request extends FormRequest
{
    use Sanitizable;

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $this->sanitize();

        return [];
    }

    /**
     * Returns additional input to be inserted to request input data.
     * @return array
     */
    public function additionalInput()
    {
        return [];
    }

    /**
     * Returns the sanitiziers to be applied to the data.
     * @return array
     */
    public function sanitizers()
    {
        return [];
    }
}
