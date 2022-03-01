<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $title Title of article
 * @property string $description Description of article
 * @property integer $author User id of author
 * @property DateTime $published_at Date of publication
 */
class Article extends Model
{
    use HasFactory;
    public const CREATED_AT = 'published_at';
    public const UPDATED_AT = null;
    protected $primaryKey = 'title';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'title',
        'description',
        'author'
    ];
    protected $dates = ['published_at'];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author', 'id');
    }
}
