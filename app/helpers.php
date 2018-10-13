<?php

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
     * @param string $asset          Asset file name.
     * @param string $tag            Tag name.
     * @param bool   $productionOnly Generate only in production.
     *
     * @return string
     */
    function asset_tag($asset, $tag, $productionOnly)
    {
        if (app()->environment('production', 'testing')) {
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
     * @param string $asset          Asset file name.
     * @param bool   $productionOnly Generate only in production.
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
     * @param string $asset          Asset file name.
     * @param bool   $productionOnly Generate only in production.
     *
     * @return string|null
     */
    function style($asset, $productionOnly = true)
    {
        return asset_tag($asset, 'style', $productionOnly);
    }
}

if (!function_exists('lcs')) {
    /**
     * Compute longest common subsequence table.
     *
     * @param array $linesA
     * @param array $linesB
     *
     * @return array
     */
    function lcs(array $linesA, array $linesB)
    {
        $amountOfLinesA = count($linesA);
        $amountOfLinesB = count($linesB);
        $table = [];

        for ($i = -1; $i < $amountOfLinesA; $i++) {
            for ($j = -1; $j < $amountOfLinesB; $j++) {
                $table[$i][$j] = 0;
            }
        }

        for ($i = 0; $i < $amountOfLinesA; $i++) {
            for ($j = 0; $j < $amountOfLinesB; $j++) {
                if ($linesA[$i] === $linesB[$j]) {
                    $table[$i][$j] = $table[$i - 1][$j - 1] + 1;
                } else {
                    $table[$i][$j] = max(
                        $table[$i][$j - 1],
                        $table[$i - 1][$j]
                    );
                }
            }
        }

        return $table;
    }
}

if (!function_exists('newLine2br')) {
    /**
     * Replaces all new lines with <br> tag.
     *
     * @param $str
     *
     * @return string
     */
    function newLine2br($str)
    {
        return str_replace(["\r\n", "\r", "\n"], '<br>', $str);
    }
}
