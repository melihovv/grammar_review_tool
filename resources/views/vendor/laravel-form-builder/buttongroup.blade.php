@if ($options['wrapper'] !== false)
    <div {!! $options['wrapperAttrs'] !!}>
@endif

@if (!$options['splitted'])
    <div class="btn-group btn-group-{!! $options['size'] !!}">
@endif

@foreach ($options['buttons'] as $button)
    {!! Form::button($button['label'], $button['attr']) !!}
@endforeach

@if (!$options['splitted'])
    </div>
@endif

@if ($options['wrapper'] !== false)
    </div>
@endif

