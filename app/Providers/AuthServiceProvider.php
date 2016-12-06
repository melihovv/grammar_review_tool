<?php

namespace App\Providers;

use App\Entities\Comment;
use App\Entities\Grammar;
use App\Policies\CommentPolicy;
use App\Policies\GrammarPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        Grammar::class => GrammarPolicy::class,
        Comment::class => CommentPolicy::class,
    ];

    public function boot()
    {
        $this->registerPolicies();
    }
}
