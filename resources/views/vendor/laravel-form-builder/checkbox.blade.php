@if ($showLabel && $showField)
    @if ($options['wrapper'] !== false)
        <div {!! $options['wrapperAttrs'] !!}>
    @endif
@endif

@if ($showField)
    @if (isset($rightWrapperClass))
        <div class="{!! $rightWrapperClass !!}">
    @endif

    {!! Form::hidden($name, 0) !!}
    {!! Form::checkbox($name, $options['value'], $options['checked'], $options['attr']) !!}

    @include('laravel-form-builder::help_block')

    @if ($showLabel && $options['label'] !== false && $options['label_show'])
        {!! Form::customLabel($name, $options['label'], $options['label_attr']) !!}
    @endif

    @if (isset($rightWrapperClass))
        </div>
    @endif
@endif

@include('laravel-form-builder::errors')

@if ($showLabel && $showField)
    @if ($options['wrapper'] !== false)
        </div>
    @endif
@endif

