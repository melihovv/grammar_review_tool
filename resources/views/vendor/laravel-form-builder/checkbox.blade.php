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

    @if (isset($rightWrapperClass))
        {{ $options['label'] }}
    @endif

    @include('laravel-form-builder::help_block')

    @if (isset($rightWrapperClass))
        </div>
    @endif
@endif

@if ($showLabel && $options['label'] !== false && $options['label_show'] && !isset($rightWrapperClass))
    {!! Form::customLabel($name, $options['label'], $options['label_attr']) !!}
@endif

@include('laravel-form-builder::errors')

@if ($showLabel && $showField)
    @if ($options['wrapper'] !== false)
        </div>
    @endif
@endif

