import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environment/environment';
import { ArticleService } from '@features/articles/services/article.service';

@Component({
  selector: 'app-create-article-card',
  templateUrl: './create-article-card.component.html',
  styleUrls: ['./create-article-card.component.scss']
})
export class CreateArticleCardComponent implements OnInit {

  public createArticleForm: FormGroup;
  public submitedWithErrors = false;
  public production = environment.production;
  public httpStatus: {status: string, message: string, color: string} | undefined = undefined;

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService) {
    this.createArticleForm = this.formBuilder.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(255)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(144)
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(article: any){
    this.submitedWithErrors = !this.createArticleForm.valid;
    if(this.createArticleForm.valid){
      const title = this.createArticleForm.get('title')?.value;
      const description = this.createArticleForm.get('description')?.value;

      //Clear form inputs and send data to API
      this.createArticleForm.reset();
      
      this.articleService.createArticle(title, description).subscribe({
        next: data => {
          console.log(data)
          this.httpStatus = {status: 'ok', message: 'Article created successfully', color: 'success'}
        },
        error: (error) =>{
          console.log(error)
           this.httpStatus = {status: 'fail', message: 'Error creating article', color: 'danger'}
        }
      });
    }
  }

  fillForm(){
    const random = parseInt((Math.random()*1000).toFixed());
    this.createArticleForm.setValue({
      title: `Lorem ipsum ${random}`, 
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, dignissimos velit repellat numquam dolor autem eveniet alias incidunt cumque? Numquam rem consectetur vel nam totam distinctio vitae, aut sequi? Dolorem?'})
  }

  get title(){ return this.createArticleForm.get('title'); }
  get description(){ return this.createArticleForm.get('description'); }

}

