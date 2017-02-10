@php
    $rightWrapperClass = config(
        'laravel-form-builder.defaults.horizontal_checkbox_wrapper_class'
    );
@endphp

@extends('laravel-form-builder::checkbox')
<?php $checkboxWrapperClass = config(
    'laravel-form-builder.defaults.horizontal_checkbox_wrapper_class'
) ?>

