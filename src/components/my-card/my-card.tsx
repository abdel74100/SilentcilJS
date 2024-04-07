import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop() imageSrc: string;
  @Prop() titre: string;
  @Prop() texte: string;

  render() {
    return (
      <div class="carte">
        <img src={this.imageSrc} alt={this.titre} />
        <h2>{this.titre}</h2>
        <p>{this.texte}</p>
      </div>
    );
  }
}
