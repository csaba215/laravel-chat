<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ChatMessage;
use App\Models\User;

class ChatGroup extends Model
{
    
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];

    public function messages()
    {
        return $this->hasMany(ChatMessage::class);
    }
    
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}