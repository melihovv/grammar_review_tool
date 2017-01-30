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
@endsection
