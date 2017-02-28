<?php

namespace App\Http\Requests\Grammar;

use App\Http\Requests\Request;

class ShowRequest extends Request
{
    public function rules()
    {
        return array_merge(parent::rules(), [
            'version' => 'nullable|integer|belongs_to_grammar:version',
        ]);
    }

    public function sanitizers()
    {
        return array_merge(parent::sanitizers(), [
            'version' => [function ($value) {
                return abs($value);
            }],
        ]);
    }
}
