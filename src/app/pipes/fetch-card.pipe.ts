import { Pipe, PipeTransform, inject } from '@angular/core';
import { CardRepositoryService } from '../services/card-repository.service';
import { Observable } from 'rxjs';
import { Card } from '../models/card/card';

@Pipe({
  name: 'fetchCard',
  standalone: true,
})
export class FetchCardPipe implements PipeTransform {
  private cardRepositoryService: CardRepositoryService = inject(
    CardRepositoryService
  );

  transform(value: string[]): Observable<Card>[] {
    return value.map((cardId) =>
      this.cardRepositoryService.findOneById(cardId)
    );
  }
}
