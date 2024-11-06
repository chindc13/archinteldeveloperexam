<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'email' => 'jerryson.derraco13@gmail.com',
            'password' => bcrypt('admin'),
            'firstname' => 'Jerryson',
            'lastname' => 'Derraco',
            'type' => 'Writer',
            'status' => 'Active',
        ]);
    }
}
