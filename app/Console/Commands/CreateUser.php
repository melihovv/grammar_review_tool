<?php

namespace App\Console\Commands;

use App\Entities\User;
use Illuminate\Validation\Rule;

class CreateUser extends Command
{
    protected $signature = 'create:user {name} {email}
                            {--p|password= : Password}
                            {--admin : Create admin user}';

    protected $description = 'Create user';

    public function handle()
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

        User::create([
            'name' => $this->argument('name'),
            'email' => $this->argument('email'),
            'password' => bcrypt($password),
            'is_admin' => $this->option('admin'),
            'api_token' => str_random(60),
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
