<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleRequest;
use App\Models\Article;
use Illuminate\Http\Response;

class ArticleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only('store');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        return response(Article::with('author:id,name')->orderBy('published_at', 'desc')->paginate(15));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreArticleRequest $request
     * @return Response
     */
    public function store(StoreArticleRequest $request): Response
    {
        $article = new Article;
        $article->title = $request->get('title');
        $article->description = $request->get('description');
        $article->author = $request->user()->id;
        $saved = $article->save();
        return response([
            'status' => ($saved) ? 'Saved' : 'Not saved',
            'article' => $article->fresh('author:id,name')
        ], ($saved) ? 200 : 500);
    }

    /**
     * Display the specified resource.
     *
     * @param Article $article
     * @return Response
     */
    public function show(Article $article): Response
    {
        return response($article->fresh('author:id,name'));
    }
}
