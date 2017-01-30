<?php

if (!function_exists('get_current_action')) {
    /**
     * Returns method name of the current route.
     *
     * @return string
     */
    function get_current_action()
    {
        list(, $action) = explode(
            '@',
            Route::getCurrentRoute()->getActionName()
        );

        return $action;
    }
}

if (!function_exists('path_to_hmr_asset')) {
    /**
     * Returns absolute url to asset on hot module replacement server.
     *
     * @param string $path Path to asset.
     *
     * @return string
     */
    function path_to_hmr_asset($path)
    {
        $serverUrl = env('HMR_SERVER', 'http://localhost:8080');

        return "$serverUrl/$path";
    }
}

if (!function_exists('path_to_asset')) {
    /**
     * Returns absolute url to asset.
     *
     * @param string $asset Asset file name.
     *
     * @return string
     */
    function path_to_asset($asset)
    {
        return asset(elixir($asset, 'assets'));
    }
}

if (!function_exists('asset_tag')) {
    /**
     * Generates <$tag> tag.
     *
     * @param string $asset Asset file name.
     * @param string $tag Tag name.
     * @param bool $productionOnly Generate only in production.
     *
     * @return string
     */
    function asset_tag($asset, $tag, $productionOnly)
    {
        if (app()->environment('production')) {
            return call_user_func("Html::$tag", path_to_asset($asset));
        }

        if (!$productionOnly) {
            return call_user_func("Html::$tag", path_to_hmr_asset($asset));
        }
    }
}

if (!function_exists('script')) {
    /**
     * Generate <script> tag.
     *
     * @param string $asset Asset file name.
     * @param bool $productionOnly Generate only in production.
     *
     * @return string|null
     */
    function script($asset, $productionOnly = true)
    {
        return asset_tag($asset, 'script', $productionOnly);
    }
}

if (!function_exists('style')) {
    /**
     * Generate <style> tag.
     *
     * @param string $asset Asset file name.
     * @param bool $productionOnly Generate only in production.
     *
     * @return string|null
     */
    function style($asset, $productionOnly = true)
    {
        return asset_tag($asset, 'style', $productionOnly);
    }
}
