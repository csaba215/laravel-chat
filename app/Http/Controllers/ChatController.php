<?php

namespace App\Http\Controllers;

use App\Models\ChatGroup;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ChatGroup::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ChatGroup  $chat
     * @return \Illuminate\Http\Response
     */
    public function show(ChatGroup $chat)
    {
        return $chat;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ChatGroup  $chat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ChatGroup $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ChatGroup  $chat
     * @return \Illuminate\Http\Response
     */
    public function destroy(ChatGroup $chat)
    {
        //
    }
}
