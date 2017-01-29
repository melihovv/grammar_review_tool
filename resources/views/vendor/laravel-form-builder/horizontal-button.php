<?php if ($options['wrapper'] !== false): ?>
    <div <?= $options['wrapperAttrs'] ?> >
<?php endif; ?>

<?php $buttonWrapperClass = config(
    'laravel-form-builder.defaults.horizontal_checkbox_wrapper_class'
) ?>
<div class="<?= $buttonWrapperClass ?>">
    <?= Form::button($options['label'], $options['attr']) ?>

    <?php if (isset($options['links'])): ?>
        <?php foreach ($options['links'] as $link): ?>
            <?= $link ?>
        <?php endforeach ?>
    <?php endif ?>

    <?php include 'help_block.php' ?>
</div>

<?php if ($options['wrapper'] !== false): ?>
    </div>
<?php endif; ?>
