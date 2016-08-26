<?php

namespace App\Repositories;

use App\Entities\User;
use App\Presenters\UserPresenter;
use App\Validators\UserValidator;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepositoryRepositoryEloquent
 * @package namespace App\Repositories;
 */
class UserRepositoryEloquent extends BaseRepository implements UserRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    /**
     * Specify Presenter class name
     *
     * @return string
     */
    public function presenter()
    {
        return UserPresenter::class;
    }
}
