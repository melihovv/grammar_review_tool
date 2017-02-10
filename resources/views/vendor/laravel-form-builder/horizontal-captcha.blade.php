@php
    $options['label_attr']['class'] = config(
        'laravel-form-builder.defaults.horizontal_label_class'
    );
    $rightWrapperClass = config(
        'laravel-form-builder.defaults.horizontal_static_wrapper_class'
    );
@endphp

@extends('laravel-form-builder::static')

@section('errors')
    <?php if (isset($errors)): ?>
        <?php foreach ($errors->get('g-recaptcha-response') as $err): ?>
            <div <?= $options['errorAttrs'] ?>><?= $err ?></div>
        <?php endforeach; ?>
    <?php endif; ?>
@overwrite

