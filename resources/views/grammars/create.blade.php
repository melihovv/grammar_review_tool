@extends('layouts.app')

@section('content')
    <div class="container">
        {!! form($form) !!}
    </div>
@endsection

@section('scripts')
    @parent

    @include('partials.ace-editor', [
        'editorId' => 'ace-editor',
        'inputName' => 'content',
    ])

    <script>
        $(() => {
            $('form').submit(e => {
                const parser = new Parser.default()
                const $input = $('input[name=content]')

                try {
                    parser.parse($input.val())
                } catch (e) {
                    const errors = parser.getErrors()
                    let template = '<div class="text-danger">'
                    errors.forEach(error => {
                      template += `${error}<br>`
                    })
                    template += '</div>'

                    $input.after(template)

                    return false
                }

                return true
            })
        })
    </script>
@endsection
