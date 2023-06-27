export class Card {
  identifier?: string;
  knowledgeOnTech?: number;
  avatarHeaderImage?: string;
  headerTitle?: string;
  headerSubtitle?: string;
  bodyTitle?: string;
  bodySubtitle?: string;

  constructor(
    identifier?: string,
    knowledgeOnTech?: number,
    avatarHeaderImage?: string,
    headerTitle?: string,
    headerSubtitle?: string,
    bodyTitle?: string,
    bodySubtitle?: string
  ) {
    this.identifier = identifier;
    this.knowledgeOnTech = knowledgeOnTech;
    this.avatarHeaderImage = avatarHeaderImage;
    this.headerTitle = headerTitle;
    this.headerSubtitle = headerSubtitle;
    this.bodyTitle = bodyTitle;
    this.bodySubtitle = bodySubtitle;
  }
}
