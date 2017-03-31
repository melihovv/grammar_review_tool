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
    @include('grammars.partials.validate-grammar-before-submit', [
        'inputName' => 'content',
        'type' => $grammar->type,
    ])
@endsection
