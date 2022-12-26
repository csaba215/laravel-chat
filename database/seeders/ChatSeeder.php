<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\ChatGroup::factory()
        ->count(50)
        ->create();
        
        \App\Models\User::factory()
        ->count(5)
        ->create();

        $users = \App\Models\User::all();
        \App\Models\ChatGroup::all()->each(function ($group) use ($users) { 
            $group->users()->attach(
                $users->random(rand(1, 3))->pluck('id')->toArray()
            );
        });

    }
}
