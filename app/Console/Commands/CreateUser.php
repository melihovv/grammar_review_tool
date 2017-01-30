<?php

namespace App\Console\Commands;

use App\Services\UserService;
use Illuminate\Validation\Rule;

class CreateUser extends Command
{
    protected $signature = 'create:user {name} {email}
                            {--p|password= : Password}
                            {--admin : Create admin user}';

    protected $description = 'Create user';

    public function handle(UserService $service)
    {
        $password = $this->option('password');
        if (!$password) {
            $password = $this->secret('Type user password');
        }

        $this->validator()->setData(['password' => $password]);
        $this->validator()->setRules(['password' => 'required|min:6']);

        if ($this->validator()->fails()) {
            $this->error($this->getFormattedErrors());

            return;
        }

        $service->create([
            'name' => $this->argument('name'),
            'email' => $this->argument('email'),
            'password' => $password,
            'is_admin' => $this->option('admin'),
            'confirmed' => 1,
            'email_token' => null,
        ]);
    }

    protected function rules()
    {
        return [
            'email' => [
                'email',
                Rule::unique('users'),
            ],
            'name' => [
                'string',
                Rule::unique('users'),
            ],
            'admin' => 'boolean',
        ];
    }
}
