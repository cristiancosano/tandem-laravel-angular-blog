<?php
namespace App\Console\Closures;

use App\Models\Article;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class SyncArticles
{
    public function __invoke()
    {
        $admin = $this->createAdminIfNotExists();
        $articles = $this->getArticlesFromAPI();
        $this->formatArticles($admin, $articles);
        $this->createArticlesIfNotExist($articles);
    }

    function createAdminIfNotExists()
    {
        return User::firstOrCreate(
            [
                'email' => 'admin@tandemup.app'
            ],
            [
                'name' => 'Admin',
                'password' => Hash::make('secret'),
            ]
        );
    }

    function getArticlesFromAPI()
    {
        $response = Http::acceptJson()->get('https://in.tandemtech.app/technical-test');
        return $response->json();
    }

    function formatArticles($admin, &$articles)
    {
        foreach ($articles as &$article) {
            if (isset($article['publishedAt']))
            {
                $article['published_at'] = $article['publishedAt'];
                unset($article['publishedAt']);
            }
            $article['published_at'] = Carbon::parse($article['published_at']);
            $article['author'] = $admin->id;
        }
    }

    function createArticlesIfNotExist($articles)
    {
        Article::upsert($articles, ['title'], ['description', 'published_at']);
    }
}
