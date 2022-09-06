import { Component, Input } from '@angular/core';
import { Link, Node } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        class="link"
        [attr.x1]="getSource().x"
        [attr.y1]="getSource().y"
        [attr.x2]="getTarget().x"
        [attr.y2]="getTarget().y"
    ></svg:line>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent  {
  @Input('linkVisual') link!: Link;

  public getSource():Node{
    return <Node>(this.link.source);
  }

  public getTarget():Node{
    return <Node>(this.link.target);
  }
}
