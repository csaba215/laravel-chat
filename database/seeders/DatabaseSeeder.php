<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Szobonya Csaba',
            'email' => 'csaba@szobonya.com',
            'password' => Hash::make('password'),
        ]);

        $this->call([
            ChatSeeder::class,
        ]);
    }
}
