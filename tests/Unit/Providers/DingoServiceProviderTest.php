<?php

namespace Tests\Unit\Providers;

use App\Entities\User;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\BrowserKitTestCase;
use Tests\Traits\ApiHelpers;

class DingoServiceProviderTest extends BrowserKitTestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testModelNotFoundException()
    {
        $user = factory(User::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.show', [1]);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->assertResponseStatus(404);
    }
}
