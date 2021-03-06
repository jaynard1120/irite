import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { window } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  files: any;
  constructor(
    private service: ApiService,
    public fb: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }

  image:any;
  genre = { "romance": "", "fiction": "", "horror": "", "thriller": "", "scifi": "" };
  newGenre: any = [];

  book = new FormGroup({
    title: new FormControl('',Validators.required),
    romance: new FormControl(''),
    fiction: new FormControl(''),
    horror: new FormControl(''),
    thriller: new FormControl(''),
    scifi: new FormControl(''),
    blurb: new FormControl('',Validators.required),
    story: new FormControl('',Validators.required)
  })

  // input = (<HTMLInputElement>document.getElementById('show')).innerHTML = this.book.value.story
display(){
  
}

  getKeys(object: any) {
    Object.keys(object).forEach(key => {
      if (object[key] == true) {
        this.newGenre.push(key)
      }
    })
  }
  icon:Boolean = true
  button = "PUBLISH"
  publish() {
    this.icon = false;
    this.button = "PUBLISHING..."
    this.getKeys({"romance":this.book.value.romance,"fiction":this.book.value.fiction,
    "horror":this.book.value.thriller,"scifi":this.book.value.scifi,"thriller":this.book.value.thriller})
    this.service.addStory({"title": this.book.value.title, "genre":this.newGenre,"blurb":this.book.value.blurb,"storyFlow":this.book.value.story})
      .subscribe(response => {
        this.book.reset()
        this.router.navigate(["home"])
      },error => {
        this.book.reset()
        this.router.navigate(["home"])
      })
  }



  handleFileInput(event: any){
    this.files = event.target.files[0];
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      minHeight: '40',
      maxHeight: '50',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};


}
