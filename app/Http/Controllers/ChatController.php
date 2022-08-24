<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class ChatController extends Controller
{
    
    function __construct()
    {

    }

    public static function routes()
    {
        Route::get('/getChat/{id}', [ChatController::class, 'getChat']);
    }

    public function getChat()
    {
        return(['test'=>'a']);
    }

}
