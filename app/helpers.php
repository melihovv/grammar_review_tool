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

if (!function_exists('hmr_asset')) {
    /**
     * Returns url to asset on hot module replacement server.
     *
     * @param string $path Path to asset.
     * @return string
     */
    function hmr_asset($path)
    {
        $serverUrl = env('HMR_SERVER', 'http://localhost:8080');

        return "$serverUrl/$path";
    }
}
