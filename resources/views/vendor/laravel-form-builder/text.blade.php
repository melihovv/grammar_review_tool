@php
    $showError = isset($options['showError'])
        ? $options['showError']
        : $showError;
@endphp

@if ($showLabel && $showField)
    @if ($options['wrapper'] !== false)
        <div {!! $options['wrapperAttrs'] !!}>
    @endif
@endif

@if ($showLabel && $options['label'] !== false && $options['label_show'])
    {!! Form::customLabel($name, $options['label'], $options['label_attr']) !!}
@endif

@if ($showField)
    @if (isset($rightWrapperClass))
        <div class="{!! $rightWrapperClass !!}">
    @endif

    {!! Form::input($type, $name, $options['value'], $options['attr']) !!}

    @include('laravel-form-builder::help_block')
    @include('laravel-form-builder::errors')

    @if (isset($rightWrapperClass))
        </div>
    @endif
@endif

@if ($showLabel && $showField)
    @if ($options['wrapper'] !== false)
        </div>
    @endif
@endif
