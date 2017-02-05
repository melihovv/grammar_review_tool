<?php

namespace App\Http\Requests;

use Fadion\Sanitizer\Facades\Sanitizer;

trait SanitizesInput
{
    public function sanitize()
    {
        $inputs = array_merge($this->additionalInput(), $this->all());

        $inputs = Sanitizer::run($inputs, $this->sanitizers());

        $this->replace($inputs);
    }
}
