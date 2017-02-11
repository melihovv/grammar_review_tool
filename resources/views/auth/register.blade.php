@extends('layouts.app')

@section('content')
    @if (!session()->has('info'))
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">Register</div>
                        <div class="panel-body">
                            {!! form($form) !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
@endsection
