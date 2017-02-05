<?php

namespace App\Http\Requests;

use Dingo\Api\Http\FormRequest;

abstract class Request extends FormRequest
{
    use SanitizesInput;

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
     *
     * @return array
     */
    public function extraData()
    {
        return [];
    }

    /**
     * Returns the sanitiziers to be applied to the data.
     *
     * @return array
     */
    public function sanitizers()
    {
        return [];
    }
}
