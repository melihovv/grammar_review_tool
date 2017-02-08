<?php if ($showLabel && $showField): ?>
    <?php if ($options['wrapper'] !== false): ?>
        <div <?= $options['wrapperAttrs'] ?> >
    <?php endif; ?>
<?php endif; ?>

<?php if ($showLabel && $options['label'] !== false && $options['label_show']): ?>
    <?= Form::customLabel($name, $options['label'], $options['label_attr']) ?>
<?php endif; ?>

<?php $staticWrapperClass = config(
    'laravel-form-builder.defaults.horizontal_checkbox_wrapper_class'
) ?>
<div class="<?= $staticWrapperClass ?>">
    <?php if ($showField): ?>
        <<?= $options['tag'] ?> <?= $options['elemAttrs'] ?>><?= $options['value'] ?></<?= $options['tag'] ?>>

        <?php include 'help_block.php' ?>

    <?php endif; ?>

    <?php if (isset($errors)): ?>
        <?php foreach ($errors->get('g-recaptcha-response') as $err): ?>
            <div <?= $options['errorAttrs'] ?>><?= $err ?></div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>


<?php if ($showLabel && $showField): ?>
    <?php if ($options['wrapper'] !== false): ?>
        </div>
    <?php endif; ?>
<?php endif; ?>
