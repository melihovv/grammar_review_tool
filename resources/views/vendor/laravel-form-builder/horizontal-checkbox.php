<?php if ($showLabel && $showField): ?>
    <?php if ($options['wrapper'] !== false): ?>
        <div <?= $options['wrapperAttrs'] ?> >
    <?php endif; ?>
<?php endif; ?>

<?php $checkboxWrapperClass = config(
    'laravel-form-builder.defaults.horizontal_checkbox_wrapper_class'
) ?>
<div class="<?= $checkboxWrapperClass ?>">
    <?php if ($showField): ?>
        <div class="checkbox">
            <label>
                <?= Form::hidden($name, 0) ?>
                <?= Form::checkbox($name, $options['value'], $options['checked'], $options['attr']) ?>
                <?= $options['label'] ?>
            </label>
        </div>

        <?php include 'help_block.php' ?>
    <?php endif; ?>

    <?php include 'errors.php' ?>
</div>

<?php if ($showLabel && $showField): ?>
    <?php if ($options['wrapper'] !== false): ?>
        </div>
    <?php endif; ?>
<?php endif; ?>
