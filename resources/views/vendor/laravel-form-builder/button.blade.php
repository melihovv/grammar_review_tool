@if ($options['wrapper'] !== false)
    <div {!! $options['wrapperAttrs'] !!}>
@endif

@if (isset($rightWrapperClass))
    <div class="{!! $rightWrapperClass !!}">
@endif

{!! Form::button($options['label'], $options['attr']) !!}
@include('laravel-form-builder::help_block')

@if (isset($options['links']))
    @foreach ($options['links'] as $link)
        {!! $link !!}
    @endforeach
@endif

@if (isset($rightWrapperClass))
    </div>
@endif

@if ($options['wrapper'] !== false)
    </div>
@endif

