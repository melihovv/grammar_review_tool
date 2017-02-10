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

    <{!! $options['tag'] !!} {!! $options['elemAttrs'] !!}>{!!  $options['value'] !!}</{!!  $options['tag'] !!}>

    @include('laravel-form-builder::help_block')

    @if (isset($rightWrapperClass))
        @yield('errors')
        </div>
    @endif
@endif

@if ($showLabel && $showField)
    @if ($options['wrapper'] !== false)
        </div>
    @endif
@endif
