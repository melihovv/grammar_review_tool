<?php

namespace App\Repositories;

use App\Entities\User;
use App\Presenters\UserPresenter;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepositoryRepositoryEloquent.
 */
class UserRepositoryEloquent extends BaseRepository implements UserRepository
{
    /**
     * Specify Model class name.
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    /**
     * Specify Presenter class name.
     *
     * @return string
     */
    public function presenter()
    {
        return UserPresenter::class;
    }
}
