import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by sherxon on 4/21/17.
 */
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(posts, value) {
     return posts.filter(post=>(post.title.indexOf(value)>=0||value.length==0));
  }

}
