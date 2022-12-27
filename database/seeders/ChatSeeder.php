<?php

namespace Database\Seeders;

use App\Models\ChatMessage;
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

            $selected_users = $users->random(rand(1, 3));
            $group->users()->attach(
                $selected_users
            );
            foreach($selected_users as $selected_user) {
                ChatMessage::factory()
                ->count(1)
                ->for($group)
                ->for($selected_user)
                ->create();
            }
        });
    }
}
