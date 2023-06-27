import { Component, OnInit, Optional, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from 'src/app/services/auth.service';
import { CardRepositoryService } from 'src/app/services/card-repository.service';
import { SectionRepositoryService } from 'src/app/services/section-repository.service';
import { CommonModule } from '@angular/common';
import { Section } from 'src/app/models/section/section';
import { Card } from 'src/app/models/card/card';
import { FetchCardPipe } from 'src/app/pipes/fetch-card.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    FetchCardPipe,
  ],
})
export class HomeComponent implements OnInit {
  public authService: AuthService = inject(AuthService);
  public cardRepositoryService: CardRepositoryService = inject(
    CardRepositoryService
  );
  public sectionRepositoryService: SectionRepositoryService = inject(
    SectionRepositoryService
  );
  public sections: Section[] = [];
  public cards: Card[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.refreshSections();
    this.refreshCards();
  }

  public removeCard(card: Card): void {
    this.cards = this.cards?.filter((c) => c.identifier !== card.identifier);
  }

  public fetchAllCardsOfSection(section: Section): Card[] {
    let response: Card[] = [];
    if (
      section.cards &&
      (section.cards ?? false) &&
      section.cards.length > 0 &&
      this.cards &&
      (this.cards ?? false)
    ) {
      let ids = section.cards.map((card) => card.identifier);
      this.cards.forEach((card) => {
        if (ids.indexOf(card.identifier) > -1) {
          response.push(card);
        } else {
        }
      });
    }
    return response;
    /* let response: Card[] = [];
    if (
      section.cards &&
      (section.cards ?? false) &&
      this.cards &&
      (this.cards ?? false)
    ) {
      console.log(`for section ${JSON.stringify(section)}`);
      for (let card of this.cards) {
        if (
          card.identifier &&
          (card.identifier ?? false) &&
          section.cards
            .map((card) => card.identifier)
            .indexOf(card.identifier) > -1
        ) {
          console.log(`pushed ${JSON.stringify(card)}`);
          response.push(card);
        } else {
          console.log(`non pushed ${JSON.stringify(card)}`);
        }
      }
    }
    console.log(response);
    return response; */
  }

  private refreshSections(): void {
    this.sectionRepositoryService
      .findAll()
      .subscribe(
        (sections) =>
          (this.sections = sections.sort((a, b) => a.weight! - b.weight!))
      );
  }
  private refreshCards(): void {
    this.cardRepositoryService
      .findAll()
      .subscribe((cards) => (this.cards = cards));
  }
}
