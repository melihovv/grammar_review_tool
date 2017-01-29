<?php if ($showLabel && $showField): ?>
    <?php if ($options['wrapper'] !== false): ?>
        <div <?= $options['wrapperAttrs'] ?> >
    <?php endif; ?>
<?php endif; ?>

<?php if ($showLabel && $options['label'] !== false && $options['label_show']): ?>
    <?php $options['label_attr']['class'] = config(
        'laravel-form-builder.defaults.horizontal_label_class'
    ) ?>
    <?= Form::customLabel($name, $options['label'], $options['label_attr']) ?>
<?php endif; ?>

<?php $rightWrapperClass = config(
    'laravel-form-builder.defaults.horizontal_wrapper_class'
) ?>
<div class="<?= $rightWrapperClass ?>">
    <?php if ($showField): ?>
        <?= Form::input($type, $name, $options['value'],
            $options['attr']) ?>

        <?php include 'help_block.php' ?>
    <?php endif; ?>

    <?php include 'errors.php' ?>
</div>

<?php if ($showLabel && $showField): ?>
    <?php if ($options['wrapper'] !== false): ?>
        </div>
    <?php endif; ?>
<?php endif; ?>
