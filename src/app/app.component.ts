import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts=[
    {
     title: 'Mon premier post',
     content: 'Azertyuiopoiuhvouhnughuhvuehggruhfuhvevrougsgreuubgrureiubviueviureviurebuebviuev\nuirevuevrebiuebvvrebvevidr',
     loveits: 0,
     created_at: '2016-03-19T00:00:00'
    },
    {
      title: 'Mon deuxième post',
      content: 'Qsdfghjklmugvqughuouzhfz\nubfzumhfzgfgzqgrsyuveybviyrgrzugouhgiugedi\nuggergblegdggrilygeiyrgfggfiybrdybvyrvybvybvyrdlfgvedhbdhfblidhbyvgeyigiyhiygfyehghguh"u\neiheiugrurgziuheqouhbvubveqbvbqzfusobfdubzqubcuezbuezbubeuezqbuiezqbububreez',
      loveits: 0,
      created_at: '2017-11-16T00:00:00'
    },
    {
      title: 'Encore un post',
      content: 'Wxcvbniyzgf"aiygmdmugfmugzeufgzgsyufdg"rfzsfmuzgsdmufgzhgddfgslkdhfgslzlkdhfzslk\ndhgzlskhdxzlks',
      loveits: 0,
      created_at: '2018-02-20T00:00:00'
    }
   ];
  
  } 

